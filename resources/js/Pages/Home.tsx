import type { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import ScrollReveal from '../components/ScrollReveal';
import CamerhubLayout from '../Layouts/CamerhubLayout';
import {
    heroStats,
    operationsPerks,
} from '../data/camerhub';

const Home = () => {
    return (
        <>
            <Head title="Camerhub · Bureau d’automatisation IA">
                <meta
                    name="description"
                    content="Camerhub construit des expériences IA immersives : automatisations sur-mesure, chatbots WhatsApp, copilotes métiers et monitoring temps réel."
                />
            </Head>

            <ScrollReveal as="section" className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60 animate-spark">
                        Univers IA Camerhub
                    </span>
                    <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                        Donnez à votre entreprise un copilote IA qui vient du futur.
                    </h1>
                    <p className="mt-5 text-lg text-white/70">
                        Je m’appelle <strong className="font-semibold text-white">Paul</strong>. Camerhub conçoit des expériences IA immersives qui combinent automatisation, conversation et monitoring en continu.
                        Nous faisons gagner du temps, réduisons les coûts et gardons toujours la main sur la qualité.
                    </p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="/contact"
                            className="flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3f37c9] via-[#4cc9f0] to-[#4895ef] px-6 text-base font-semibold shadow-lg shadow-[#3f37c9]/30 transition hover:scale-[1.01] animate-pulse-glow"
                        >
                            Planifier un diagnostic
                        </a>
                        <a
                            href="/cases"
                            className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-base font-semibold text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white"
                        >
                            Voir les réalisations
                        </a>
                    </div>
                    <figure className="mt-10 hidden lg:block">
                        <img
                            src="/images/ai-grid.svg"
                            alt="Grille d’automatisations Camerhub"
                            className="w-full max-w-md rounded-3xl border border-white/10 shadow-lg shadow-[#3f37c9]/30"
                            loading="lazy"
                        />
                    </figure>
                    <dl className="mt-10 grid grid-cols-2 gap-6 text-sm text-white/60 sm:grid-cols-4">
                        {heroStats.map((stat) => (
                            <div key={stat.label}>
                                <dt className="text-xs uppercase tracking-[0.3em]">{stat.label}</dt>
                                <dd className="mt-1 text-2xl font-semibold text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 backdrop-blur robot-glow">
                    <div className="absolute -top-10 right-6 h-32 w-32 rounded-full bg-[#4cc9f0]/30 blur-2xl animate-aurora" />
                    <div className="absolute -bottom-10 left-8 h-40 w-40 rounded-full bg-[#4361ee]/20 blur-3xl animate-aurora-slow animation-delay-2000" />
                    <div className="relative z-20 w-full space-y-6">
                        <div className="space-y-4 rounded-3xl border border-white/10 bg-[#050b1d]/80 p-6 shadow-lg shadow-[#4361ee]/20">
                            <div className="flex items-center justify-between text-xs text-white/60">
                                <span>Marketplace WhatsApp</span>
                                <span className="inline-flex items-center gap-1 text-emerald-400">
                                    Live
                                </span>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex max-w-sm flex-col gap-2 rounded-2xl bg-white/10 p-4">
                                    <span className="text-xs uppercase tracking-[0.25em] text-[#4cc9f0]">Client</span>
                                    <p>Je cherche un service ménage et un traiteur pour samedi.</p>
                                </div>
                                <div className="ml-auto flex max-w-sm flex-col gap-2 rounded-2xl bg-[#3f37c9]/40 p-4 text-white">
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Copilote</span>
                                    <p>Je te propose les offres vérifiées disponibles. Tu préfères le pack Essentiel ou Premium ?</p>
                                </div>
                                <div className="flex max-w-sm flex-col gap-2 rounded-2xl bg-white/10 p-4">
                                    <span className="text-xs uppercase tracking-[0.25em] text-[#4cc9f0]">Client</span>
                                    <p>Montre-moi les deux et ajoute une option déco.</p>
                                </div>
                                <div className="ml-auto flex max-w-sm flex-col gap-2 rounded-2xl bg-[#3f37c9]/40 p-4 text-white">
                                    <span className="text-xs uppercase tracking-[0.25em] text-white/70">Copilote</span>
                                    <p>Voilà les packs + un devis PDF. Tu veux réserver 15h ou 18h ?</p>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/237620205400"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-[#4cc9f0]/40 bg-[#4cc9f0]/10 px-4 py-2 text-xs font-semibold text-[#4cc9f0] transition hover:bg-[#4cc9f0]/15"
                            >
                                Tester la marketplace
                            </a>
                        </div>
                        <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                            <img
                                src="/images/robot-operator.svg"
                                alt="Copilote marketplace Camerhub"
                                className="mx-auto w-full max-w-xs drop-shadow-[0_20px_45px_rgba(76,201,240,0.25)]"
                                loading="lazy"
                            />
                            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">Workflow piloté par Camerhub</p>
                        </figure>
                        <div className="rounded-2xl border border-white/10 bg-[#050b1d]/70 p-6 shadow-lg shadow-black/30">
                            <p className="text-sm uppercase tracking-[0.25em] text-white/50">Operations Copilot</p>
                            <ul className="mt-4 space-y-3 text-sm text-white/75">
                                {operationsPerks.map((perk) => (
                                    <li key={perk.title} className="flex items-start gap-2">
                                        <perk.icon className="mt-1 h-4 w-4 text-[#4cc9f0]" />
                                        <div>
                                            <p className="font-medium text-white">{perk.title}</p>
                                            <p className="text-white/70">{perk.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal as="section" className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div className="flex flex-col justify-between gap-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-white/60">Tester le copilote</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white">Converse avec le chatbot WhatsApp Camerhub</h2>
                        <p className="mt-4 text-white/70">Découvre comment le workflow conseille, vend et programme des services en temps réel. Clique, passe sur WhatsApp et tu es guidé dès le premier message.</p>
                    </div>
                    <a
                        href="https://wa.me/237620205400"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#3f37c9] via-[#4cc9f0] to-[#4895ef] px-6 text-sm font-semibold text-white transition hover:scale-[1.01]"
                    >
                        Tester sur WhatsApp
                    </a>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050b1d]/80 p-6 text-sm text-white/80">
                    <div className="absolute -top-16 right-8 h-32 w-32 rounded-full bg-[#4cc9f0]/20 blur-2xl" />
                    <div className="absolute -bottom-12 left-8 h-40 w-40 rounded-full bg-[#4361ee]/20 blur-3xl" />
                    <div className="relative z-10 space-y-4">
                        <div className="flex max-w-xs flex-col gap-2 rounded-2xl bg-white/10 p-4 shadow-lg shadow-black/30">
                            <span className="text-xs uppercase tracking-[0.25em] text-[#4cc9f0]">Toi</span>
                            <p>Je veux réserver un photographe et louer une salle pour samedi.</p>
                        </div>
                        <div className="ml-auto flex max-w-xs flex-col gap-2 rounded-2xl bg-[#3f37c9]/40 p-4 text-white shadow-lg shadow-[#3f37c9]/30">
                            <span className="text-xs uppercase tracking-[0.25em] text-white/70">Copilote</span>
                            <p>Je compare les prestataires, je te montre 3 offres et je bloque un acompte sécurisé si tu valides.</p>
                        </div>
                        <div className="flex max-w-xs flex-col gap-2 rounded-2xl bg-white/10 p-4 shadow-lg shadow-black/30">
                            <span className="text-xs uppercase tracking-[0.25em] text-[#4cc9f0]">Toi</span>
                            <p>Ajoute la déco et un service traiteur, je valide après.</p>
                        </div>
                        <div className="ml-auto flex max-w-xs flex-col gap-2 rounded-2xl bg-[#3f37c9]/40 p-4 text-white shadow-lg shadow-[#3f37c9]/30">
                            <span className="text-xs uppercase tracking-[0.25em] text-white/70">Copilote</span>
                            <p>Voici le pack complet + devis PDF et un lien de paiement. Tu préfères livraison 15h ou 18h ?</p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

        </>
    );
};

Home.layout = (page: ReactNode) => <CamerhubLayout>{page}</CamerhubLayout>;

export default Home;
