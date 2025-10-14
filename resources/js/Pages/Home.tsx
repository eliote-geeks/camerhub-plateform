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
                    <img
                        src="/images/robot-operator.svg"
                        alt="Robot opérateur Camerhub"
                        className="relative z-10 mx-auto w-full max-w-xs drop-shadow-[0_20px_45px_rgba(76,201,240,0.25)] md:max-w-sm"
                        loading="lazy"
                    />
                    <div className="relative z-20 w-full space-y-6">
                        <div className="rounded-2xl border border-white/10 bg-[#050b1d]/80 p-6 shadow-lg shadow-[#4361ee]/10">
                            <div className="flex items-center justify-between text-xs text-white/60">
                                <span>Assistant WhatsApp</span>
                                <span className="inline-flex items-center gap-1 text-emerald-400">
                                    Live
                                </span>
                            </div>
                            <p className="mt-3 text-base font-medium">Bonjour Paul, Camerhub vient de clôturer 15 tickets sans agent humain.</p>
                            <p className="mt-2 text-sm text-white/60">✔ Intention reconnue · ✔ Fallback géré · ✔ Rapport envoyé</p>
                        </div>
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
        </>
    );
};

Home.layout = (page: ReactNode) => <CamerhubLayout>{page}</CamerhubLayout>;

export default Home;
