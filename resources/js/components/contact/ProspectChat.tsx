import { FormEvent, useEffect, useRef } from 'react';
import useCopilotChat, { type ChatMessage } from '../../hooks/useCopilotChat';

type ProspectChatProps = {
    whatsappNumber: string;
};

const assistantWarmup: ChatMessage = {
    role: 'assistant',
    content:
        "Salut 👋 je suis le copilote Camerhub. Dis-moi où tu veux injecter de l’IA (automatisation, chatbot, data, etc.) et je te propose une feuille de route immédiate.",
};

const ProspectChat = ({ whatsappNumber }: ProspectChatProps) => {
    const { history, message, setMessage, isLoading, error, setError, submit } = useCopilotChat({
        warmupMessage: assistantWarmup,
    });

    const viewportRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!viewportRef.current) {
            return;
        }

        const viewport = viewportRef.current;
        const target = viewport.scrollHeight;

        try {
            viewport.scrollTo({
                top: target,
                behavior: 'smooth',
            });
        } catch (error) {
            viewport.scrollTop = target;
        }
    }, [history, isLoading]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        await submit();
    };

    return (
        <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#050b1d]/70 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">Copilote IA</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">Discutons de ton cas d’usage</h2>
                </div>
                <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#4cc9f0]/40 bg-[#4cc9f0]/10 px-3 py-1 text-xs font-semibold text-[#4cc9f0] transition hover:bg-[#4cc9f0]/20"
                >
                    WhatsApp direct
                </a>
            </div>

            <div
                ref={viewportRef}
                className="mt-5 flex-1 overflow-y-auto rounded-xl border border-white/5 bg-white/5 p-4 max-h-80 min-h-[12rem]"
            >
                <div className="space-y-4">
                    {history.map((item, index) => (
                        <div
                            key={`${item.role}-${index}-${item.content.slice(0, 8)}`}
                            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg shadow-black/10 ${
                                item.role === 'assistant'
                                    ? 'bg-[#1f2a44]/70 text-white'
                                    : item.role === 'system'
                                      ? 'bg-[#3f37c9]/20 text-[#b9c6ff]'
                                      : 'ml-auto bg-[#4cc9f0]/20 text-[#d9f6ff]'
                            }`}
                        >
                            {item.content}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="w-fit rounded-2xl bg-[#1f2a44]/70 px-4 py-2 text-sm text-white/70">
                            Le copilote rédige une réponse…
                        </div>
                    )}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4 text-sm">
                <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="min-h-[90px] rounded-xl border border-white/10 bg-[#030712] px-3 py-3 text-white placeholder:text-white/30 focus:border-[#4cc9f0] focus:outline-none"
                    placeholder="Décris ton contexte, tes outils ou ton idée de produit IA..."
                    maxLength={600}
                />
                {error && <span className="text-xs text-rose-300">{error}</span>}
                <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-white/40">
                        No-code & code : on adapte la stack à ton budget. Dossier envoyé au pipeline n8n.
                    </span>
                    <button
                        type="submit"
                        className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#3f37c9] to-[#4cc9f0] px-5 font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={isLoading}
                    >
                        {isLoading ? 'En cours…' : 'Envoyer'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProspectChat;
