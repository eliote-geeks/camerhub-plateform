import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

const projectScopes = [
    'Diagnostic rapide',
    'Automatisations internes',
    'Chatbot / Voix augmentée',
    'Data & monitoring',
    'Autre besoin IA',
];

const ContactForm = () => {
    const [form, setForm] = useState({
        full_name: '',
        email: '',
        company: '',
        project_scope: projectScopes[0],
        message: '',
    });

    const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [lastChannel, setLastChannel] = useState<'email' | 'whatsapp' | null>(null);

    const whatsappNumber = '237691754257';
    const emailRecipient = 'pauleliote97@gmail.com';

    const summary = useMemo(() => {
        return [
            `Nom complet : ${form.full_name || '—'}`,
            `Email : ${form.email || '—'}`,
            `Entreprise : ${form.company || '—'}`,
            `Priorité : ${form.project_scope || '—'}`,
            '',
            'Brief :',
            form.message || '—',
        ].join('\n');
    }, [form]);

    const validate = () => {
        const nextErrors: Partial<Record<keyof typeof form, string>> = {};

        if (!form.full_name.trim()) {
            nextErrors.full_name = 'Nom complet requis';
        }

        if (!form.email.trim()) {
            nextErrors.email = 'Email requis';
        }

        if (!form.project_scope.trim()) {
            nextErrors.project_scope = 'Priorité requise';
        }

        if (!form.message.trim()) {
            nextErrors.message = 'Merci de détailler votre besoin';
        }

        setErrors(nextErrors);

        return Object.keys(nextErrors).length === 0;
    };

    const handleMailSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validate()) {
            setStatusMessage(null);
            return;
        }

        setLastChannel('email');
        setStatusMessage("Ton client email va s'ouvrir avec ton message pré-rempli.");

        const subject = encodeURIComponent(`Demande Camerhub – ${form.full_name}`);
        const body = encodeURIComponent(summary);

        window.location.href = `mailto:${emailRecipient}?subject=${subject}&body=${body}`;
    };

    const handleWhatsappClick = () => {
        if (!validate()) {
            setStatusMessage(null);
            return;
        }

        setLastChannel('whatsapp');
        setStatusMessage('Redirection vers WhatsApp en cours…');

        const whatsappMessage = encodeURIComponent(`Bonjour Paul,\n\n${summary}`);
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank', 'noopener');
    };

    const handleChange = (field: keyof typeof form) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
        setStatusMessage(null);
    };

    return (
        <form onSubmit={handleMailSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-[#3f37c9]/10 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">Brief express</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Décris ton besoin IA</h2>
                </div>
                <span className="text-xs text-white/40">* champs obligatoires</span>
            </div>

            {statusMessage && (
                <div
                    className={`mt-6 rounded-lg border px-4 py-3 text-sm ${
                        lastChannel === 'email'
                            ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200'
                            : 'border-[#4cc9f0]/40 bg-[#4cc9f0]/10 text-[#c7f2ff]'
                    }`}
                >
                    {statusMessage}
                </div>
            )}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                    <span className="text-white/70">Nom complet *</span>
                    <input
                        type="text"
                        value={form.full_name}
                        onChange={handleChange('full_name')}
                        className="h-11 rounded-xl border border-white/10 bg-[#050b1d]/70 px-3 text-white placeholder:text-white/30 focus:border-[#4cc9f0] focus:outline-none"
                        placeholder="Paul Camerhub"
                        required
                    />
                    {errors.full_name && <span className="text-xs text-rose-300">{errors.full_name}</span>}
                </label>

                <label className="flex flex-col gap-2 text-sm">
                    <span className="text-white/70">Email *</span>
                    <input
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        className="h-11 rounded-xl border border-white/10 bg-[#050b1d]/70 px-3 text-white placeholder:text-white/30 focus:border-[#4cc9f0] focus:outline-none"
                        placeholder="ton.email@entreprise.com"
                        required
                    />
                    {errors.email && <span className="text-xs text-rose-300">{errors.email}</span>}
                </label>

                <label className="flex flex-col gap-2 text-sm">
                    <span className="text-white/70">Entreprise</span>
                    <input
                        type="text"
                        value={form.company}
                        onChange={handleChange('company')}
                        className="h-11 rounded-xl border border-white/10 bg-[#050b1d]/70 px-3 text-white placeholder:text-white/30 focus:border-[#4cc9f0] focus:outline-none"
                        placeholder="Nom de l’organisation"
                    />
                    {errors.company && <span className="text-xs text-rose-300">{errors.company}</span>}
                </label>

                <label className="flex flex-col gap-2 text-sm">
                    <span className="text-white/70">Priorité *</span>
                    <select
                        value={form.project_scope}
                        onChange={handleChange('project_scope')}
                        className="h-11 rounded-xl border border-white/10 bg-[#050b1d]/70 px-3 text-white focus:border-[#4cc9f0] focus:outline-none"
                    >
                        {projectScopes.map((scope) => (
                            <option key={scope} value={scope} className="bg-[#030712] text-white">
                                {scope}
                            </option>
                        ))}
                    </select>
                    {errors.project_scope && <span className="text-xs text-rose-300">{errors.project_scope}</span>}
                </label>
            </div>

            <label className="mt-5 flex flex-col gap-2 text-sm">
                <span className="text-white/70">Explique ton besoin *</span>
                <textarea
                    value={form.message}
                    onChange={handleChange('message')}
                    className="min-h-[160px] rounded-xl border border-white/10 bg-[#050b1d]/70 px-3 py-3 text-white placeholder:text-white/30 focus:border-[#4cc9f0] focus:outline-none"
                    placeholder="Objectifs, outils actuels, résultats attendus..."
                    required
                />
                {errors.message && <span className="text-xs text-rose-300">{errors.message}</span>}
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                    type="submit"
                    className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#3f37c9] via-[#4cc9f0] to-[#4895ef] px-6 text-sm font-semibold text-white transition hover:scale-[1.01]"
                >
                    Envoyer par email
                </button>
                <button
                    type="button"
                    onClick={handleWhatsappClick}
                    className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-[#4cc9f0]/40 bg-[#050b1d]/70 px-6 text-sm font-semibold text-[#4cc9f0] transition hover:border-[#4cc9f0]/60 hover:text-white"
                >
                    Continuer sur WhatsApp
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
