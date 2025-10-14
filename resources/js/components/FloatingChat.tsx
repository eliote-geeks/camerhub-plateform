import { useEffect, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import useCopilotChat, { type ChatMessage } from '../hooks/useCopilotChat';

type FloatingChatProps = {
    whatsappNumber: string;
};

const warmupMessage: ChatMessage = {
    role: 'assistant',
    content:
        "Hello, je suis le copilote Camerhub. Besoin d’une idée IA, d’un diagnostic ou d’un devis rapide ? Pose ta question !",
};

const FloatingChat = ({ whatsappNumber }: FloatingChatProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { history, message, setMessage, isLoading, error, setError, submit } = useCopilotChat({
        warmupMessage,
    });

    const viewportRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!viewportRef.current) {
            return;
        }
        viewportRef.current.scrollTo({
            top: viewportRef.current.scrollHeight,
            behavior: 'smooth',
        });
    }, [history, isLoading, isOpen]);

    const handleSend = async () => {
        await submit();
    };

    const handleWhatsappClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`, '_blank');
    };

    const handleToggle = () => {
        setIsOpen((open) => !open);
        setError(null);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {isOpen && (
                <div className="flex w-[22rem] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#050b1d]/80 backdrop-blur-xl shadow-2xl shadow-[#3f37c9]/30">
                    <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3">
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Copilote IA</p>
                            <p className="text-sm font-semibold text-white">Parle à Camerhub</p>
                        </div>
                        <button
                            type="button"
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70 transition hover:text-white"
                            onClick={handleToggle}
                        >
                            Fermer
                        </button>
                    </div>
                    <div ref={viewportRef} className="flex max-h-80 flex-col gap-3 overflow-y-auto px-4 py-4">
                        {history.map((item, index) => (
                            <div
                                key={`${item.role}-${index}-${item.content.slice(0, 12)}`}
                                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-lg shadow-black/15 ${
                                    item.role === 'assistant'
                                        ? 'bg-[#1f2a44]/80 text-white'
                                        : item.role === 'system'
                                          ? 'bg-[#b5179e]/15 text-[#f7c3ff]'
                                          : 'ml-auto bg-[#4cc9f0]/15 text-[#d6f7ff]'
                                }`}
                            >
                                {item.content}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="w-fit rounded-2xl bg-[#1f2a44]/70 px-4 py-2 text-sm text-white/70">
                                Le copilote écrit…
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-3 border-t border-white/10 bg-[#030b23]/80 px-4 py-4 text-sm">
                        <textarea
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            className="min-h-[80px] rounded-xl border border-white/10 bg-[#030712]/80 px-3 py-2 text-white placeholder:text-white/30 focus:border-[#4cc9f0] focus:outline-none"
                            placeholder="Décris ton besoin IA ou ton idée de projet…"
                            maxLength={600}
                        />
                        {error && <span className="text-xs text-rose-300">{error}</span>}
                        <div className="flex items-center justify-between gap-3 text-xs text-white/40">
                            <button
                                type="button"
                                className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
                                onClick={handleWhatsappClick}
                            >
                                WhatsApp direct
                            </button>
                            <button
                                type="button"
                                className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-[#3f37c9] to-[#4cc9f0] px-4 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                                onClick={handleSend}
                                disabled={isLoading}
                            >
                                {isLoading ? 'En cours…' : 'Envoyer'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={handleToggle}
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#3f37c9] via-[#4cc9f0] to-[#4895ef] text-white shadow-xl shadow-[#3f37c9]/40 transition hover:scale-[1.05]"
            >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">Ouvrir le copilote IA</span>
            </button>
        </div>
    );
};

export default FloatingChat;

