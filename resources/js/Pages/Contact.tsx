import type { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import ScrollReveal from '../components/ScrollReveal';
import CamerhubLayout from '../Layouts/CamerhubLayout';
import ProspectChat from '../components/contact/ProspectChat';
import {
    contactBadges,
    contactChannels,
} from '../data/camerhub';

const Contact = () => {
    const whatsappNumber = '237691754257';
    const contactEmail = 'pauleliote97@gmail.com';
    const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Brief Camerhub')}`;
    const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        'Bonjour Paul, je veux discuter de mon projet IA avec Camerhub.',
    )}`;

    return (
        <>
            <Head title="Contact Camerhub">
                <meta
                    name="description"
                    content="Prêt à faire décoller vos workflows IA ? Contactez Camerhub pour un diagnostic express ou branchez votre webhook n8n."
                />
            </Head>

            <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-20 right-16 h-56 w-56 rounded-full bg-[#4cc9f0]/20 blur-[120px] animate-aurora" />
                    <div className="absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-[#3f37c9]/18 blur-[110px] animate-aurora-slow animation-delay-2000" />
                </div>

                <div className="relative flex flex-col gap-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <ScrollReveal as="div" className="max-w-2xl animate-float-soft">
                            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Contact</p>
                            <h1 className="mt-2 text-3xl font-semibold">Prêt à faire décoller vos workflows IA ?</h1>
                            <p className="mt-4 text-white/70">
                                Envoyez-moi un message avec vos défis actuels. Je reviens vers vous sous 24h avec une proposition de diagnostic.
                            </p>
                            <div className="mt-6 space-y-3 text-sm text-white/70">
                                {contactChannels.map((channel) => (
                                    <a key={channel.label} href={channel.href} className="flex items-center gap-2 hover:text-white">
                                        <channel.icon className="h-5 w-5 text-[#4cc9f0]" />
                                        {channel.label}
                                    </a>
                                ))}
                                <p className="flex items-center gap-2">
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#4cc9f0]/10 text-[10px] font-semibold text-[#4cc9f0]">
                                        NDA
                                    </span>
                                    NDA possible avant échange technique
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal as="div" className="relative mx-auto w-full max-w-xs lg:max-w-sm" delayClassName="reveal-delay-400">
                            <div className="relative overflow-hidden rounded-full border border-white/10 bg-[#050b1d]/70 p-6 robot-glow">
                                <img
                                    src="/images/robot-orb.svg"
                                    alt="Robot compagnon Camerhub"
                                    className="w-full drop-shadow-[0_16px_40px_rgba(63,55,201,0.28)]"
                                    loading="lazy"
                                />
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                        <ScrollReveal as="div" className="animate-float-soft">
                            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-[#3f37c9]/10 backdrop-blur">
                                <div className="space-y-5">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Contact direct</p>
                                        <h2 className="mt-2 text-2xl font-semibold text-white">Envoyez votre brief en 1 clic</h2>
                                        <p className="mt-4 text-sm text-white/70">
                                            Choisissez le canal qui vous convient. Partagez votre contexte, vos outils et le résultat attendu : je vous
                                            réponds personnellement sous 24h.
                                        </p>
                                    </div>

                                    <div className="space-y-3 text-sm text-white/75">
                                        <a
                                            href={mailtoHref}
                                            className="flex items-center justify-between rounded-xl border border-white/10 bg-[#050b1d]/70 px-4 py-3 transition hover:border-[#4cc9f0]/50 hover:text-white"
                                        >
                                            <span className="font-medium">✉️ Email direct</span>
                                            <span className="text-xs uppercase tracking-[0.28em] text-white/40">mailto</span>
                                        </a>
                                        <a
                                            href={whatsappHref}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-between rounded-xl border border-[#4cc9f0]/30 bg-[#030b23]/80 px-4 py-3 transition hover:border-[#4cc9f0]/60 hover:text-white"
                                        >
                                            <span className="font-medium">💬 WhatsApp instantané</span>
                                            <span className="text-xs uppercase tracking-[0.28em] text-[#4cc9f0]">+237 {whatsappNumber}</span>
                                        </a>
                                        <p className="rounded-xl border border-white/10 bg-[#020616]/70 px-4 py-3 text-xs text-white/60">
                                            Disponible du lundi au vendredi · Réponse écrite et suggestions d’automatisations en moins de 24h.
                                        </p>
                                    </div>

                                    <div className="space-y-2 rounded-2xl border border-white/10 bg-[#050b1d]/70 p-5 text-xs text-white/60">
                                        <p className="text-white/70">Checklist express pour gagner du temps :</p>
                                        <ul className="list-disc space-y-1 pl-5">
                                            <li>Objectif business ou opérationnel visé</li>
                                            <li>Stack ou outils déjà en place (CRM, WhatsApp, data…)</li>
                                            <li>Volume ou fréquence (leads, tickets, rapports…)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center justify-between text-xs text-white/40">
                                    <span>Support FR · EN</span>
                                    <span>NDA disponible sur demande</span>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal as="div" className="animate-float-soft" delayClassName="reveal-delay-400">
                            <ProspectChat whatsappNumber={whatsappNumber} />
                        </ScrollReveal>
                    </div>

                    <ScrollReveal as="div" className="w-full rounded-2xl border border-white/10 bg-[#050b1d]/70 p-8 animate-float-soft">
                        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Disponibilités</p>
                        <div className="mt-4 space-y-4 text-sm text-white/70">
                            {contactBadges.map((badge) => (
                                <p key={badge.label} className="flex items-center justify-between">
                                    <span>{badge.label}</span>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs ${
                                            badge.tone === 'focus'
                                                ? 'bg-[#4cc9f0]/10 text-[#4cc9f0]'
                                                : 'bg-white/10'
                                        }`}
                                    >
                                        {badge.value}
                                    </span>
                                </p>
                            ))}
                        </div>
                        <a
                            href="https://calendar.app.google/4CRfZ9AX4u5LJVKN7"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#3f37c9] to-[#4cc9f0] px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.01] animate-pulse-glow"
                        >
                            Réserver un créneau
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
};

Contact.layout = (page: ReactNode) => <CamerhubLayout>{page}</CamerhubLayout>;

export default Contact;
