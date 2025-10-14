import { useCallback, useMemo, useState } from 'react';

export type ChatMessage = {
    role: 'user' | 'assistant' | 'system';
    content: string;
};

type UseCopilotChatOptions = {
    warmupMessage?: ChatMessage;
};

type UseCopilotChatReturn = {
    history: ChatMessage[];
    message: string;
    setMessage: (value: string) => void;
    isLoading: boolean;
    error: string | null;
    submit: (overrideMessage?: string) => Promise<void>;
    setError: (value: string | null) => void;
};

const useCopilotChat = ({ warmupMessage }: UseCopilotChatOptions = {}): UseCopilotChatReturn => {
    const webhookEndpoint = (import.meta.env.VITE_CHAT_WEBHOOK as string | undefined)?.trim() || '/contact/chat';
    const csrfToken = typeof document !== 'undefined'
        ? document.querySelector("meta[name='csrf-token']")?.getAttribute('content') ?? ''
        : '';
    const [history, setHistory] = useState<ChatMessage[]>(() => (warmupMessage ? [warmupMessage] : []));
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const sessionId = useMemo(() => `chat_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, []);

    const submit = useCallback(
        async (overrideMessage?: string) => {
            const content = (overrideMessage ?? message).trim();
            if (!content) {
                return;
            }

            setError(null);

            const outgoing: ChatMessage = {
                role: 'user',
                content,
            };

            setHistory((prev) => [...prev, outgoing]);
            setMessage('');
            setIsLoading(true);

            try {
                const payloadHistory = [...history, outgoing]
                    .filter((item) => item.role !== 'system')
                    .slice(-10)
                    .map((item) => ({ role: item.role, content: item.content }));

                const isExternal = /^https?:\/\//i.test(webhookEndpoint) &&
                    (typeof window === 'undefined' || !webhookEndpoint.startsWith(window.location.origin));

                const response = await fetch(webhookEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        ...(isExternal
                            ? {}
                            : {
                                  'X-Requested-With': 'XMLHttpRequest',
                                  ...(csrfToken ? { 'X-CSRF-TOKEN': csrfToken } : {}),
                              }),
                    },
                    credentials: isExternal ? 'omit' : 'include',
                    body: JSON.stringify({
                        message: content,
                        sessionId,
                        email: '',
                        history: payloadHistory.slice(0, payloadHistory.length - 1),
                    }),
                });

                if (!response.ok) {
                    if (response.status === 404 && webhookEndpoint !== '/contact/chat') {
                        throw new Error('Webhook endpoint not found');
                    }
                    throw new Error(`Webhook responded with status ${response.status}`);
                }

                const data = (await response.json()) as { response?: string; reply?: string };

                const reply: ChatMessage = {
                    role: 'assistant',
                    content:
                        data?.response ?? data?.reply ??
                        "Merci ! Je prépare une recommandation pour toi. Tu peux détailler davantage ton stack si besoin.",
                };

                setHistory((prev) => [...prev, reply]);
            } catch (chatError) {
                console.error(chatError);
                setError("Le copilote est momentanément indisponible. Essaie de nouveau ou passe sur WhatsApp.");
                setHistory((prev) => [
                    ...prev,
                    {
                        role: 'system',
                        content: "❗️ Petite panne. Tu peux contacter Paul directement sur WhatsApp en attendant.",
                    },
                ]);
            } finally {
                setIsLoading(false);
            }
        },
        [history, message, sessionId],
    );

    return {
        history,
        message,
        setMessage,
        isLoading,
        error,
        submit,
        setError,
    };
};

export default useCopilotChat;
