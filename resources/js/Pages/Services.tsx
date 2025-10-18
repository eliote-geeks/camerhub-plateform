import type { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import ScrollReveal from '../components/ScrollReveal';
import CamerhubLayout from '../Layouts/CamerhubLayout';
import {
    differentiators,
    integrationStack,
    operationsPerks,
    commerceIdeaSegments,
    revealDelays,
    serviceFaq,
    servicePackages,
    services,
} from '../data/camerhub';

const Services = () => {
    return (
        <>
            <Head title="Services Camerhub">
                <meta
                    name="description"
                    content="Découvrez les services IA Camerhub : automatisations n8n, agents conversationnels et monitoring data sur-mesure."
                />
            </Head>

            <ScrollReveal as="section" className="space-y-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-white/60">Services</p>
                        <h1 className="mt-2 text-3xl font-semibold">Vos flux automatisés de bout en bout</h1>
                    </div>
                    <p className="max-w-xl text-white/70">
                        Camerhub assemble le meilleur du low-code, du code et des API pour créer des expériences IA fiables. Chaque livrable est documenté,
                        monitoré et accompagné d’un plan d’amélioration continue.
                    </p>
                </div>
                <figure className="hidden w-full justify-center sm:flex">
                    <img
                        src="/images/workflow-sphere.svg"
                        alt="Visualisation d’un workflow automatisé"
                        loading="lazy"
                        className="w-full max-w-2xl rounded-3xl border border-white/10 shadow-xl shadow-[#3f37c9]/20"
                    />
                </figure>

                <div className="grid gap-6 md:grid-cols-2">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={service.title}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-white/30 animate-float-soft"
                            delayClassName={revealDelays[index % revealDelays.length]}
                        >
                            <div className="absolute -right-12 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-white/10 blur-2xl transition group-hover:bg-[#4cc9f0]/30" />
                            <div className="relative">
                                <service.icon className="h-9 w-9 text-[#4cc9f0]" />
                                <h2 className="mt-5 text-xl font-semibold">{service.title}</h2>
                                <p className="mt-3 text-sm text-white/70">{service.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal as="section" className="mt-20 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-white/60">Pourquoi Camerhub</p>
                    <h2 className="mt-2 text-3xl font-semibold">L’obsession de l’impact et du contrôle</h2>
                    <p className="mt-4 text-white/70">
                        Chaque projet est orchestré pour livrer un résultat mesurable, robuste et maîtrisé. Nous restons à vos côtés pour assurer le succès dès le premier sprint.
                    </p>
                    <div className="mt-8 grid gap-5 sm:grid-cols-3">
                        {differentiators.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-white/10 bg-[#050b1d]/70 p-5">
                                <item.icon className="h-8 w-8 text-[#00b4d8]" />
                                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm text-white/70">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-[#050b1d]/70 p-8 animate-float-soft animation-delay-2000">
                    <figure className="-mx-2 -mt-2 mb-4 overflow-hidden rounded-2xl border border-white/10">
                        <img
                            src="/images/data-orbit.svg"
                            alt="Pilotage data et monitoring"
                            loading="lazy"
                            className="w-full"
                        />
                    </figure>
                    <div>
                        <h3 className="text-xl font-semibold">Pack opérations IA</h3>
                        <p className="mt-3 text-sm text-white/70">
                            Plans d’actions hebdomadaires, monitoring unifié et support prioritaire pour assurer la réussite de vos cas d’usage IA.
                        </p>
                    </div>
                    <div className="space-y-4 text-sm text-white/70">
                        {operationsPerks.map((perk) => (
                            <div key={perk.title} className="flex items-start gap-3">
                                <perk.icon className="mt-1 h-5 w-5 text-[#4cc9f0]" />
                                <p>{perk.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal as="section" className="mt-20 space-y-12">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-white/60">Engagements</p>
                        <h2 className="mt-2 text-3xl font-semibold">Des packs calibrés pour passer de l’idée au run</h2>
                    </div>
                    <p className="max-w-xl text-white/70">
                        Chaque pack inclut un canal direct avec Camerhub, un dashboard partagé et l’accès à nos bibliothèques de prompts, tests et connecteurs.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {servicePackages.map((pack, index) => (
                        <ScrollReveal
                            key={pack.title}
                            className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#050b1d]/70 p-7 animate-float-soft"
                            delayClassName={revealDelays[index % revealDelays.length]}
                        >
                            <div>
                                <p className="text-xs uppercase tracking-[0.35em] text-white/50">{pack.timeline}</p>
                                <h3 className="mt-2 text-xl font-semibold text-white">{pack.title}</h3>
                                <p className="mt-2 text-sm text-white/60">{pack.tagline}</p>
                            </div>
                            <ul className="mt-5 flex flex-1 flex-col gap-3 text-sm text-white/75">
                                {pack.deliverables.map((deliverable) => (
                                    <li key={deliverable} className="relative pl-4">
                                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[#4cc9f0]" />
                                        {deliverable}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="/contact"
                                className="mt-6 inline-flex items-center justify-center rounded-full border border-[#4cc9f0]/40 bg-[#4cc9f0]/10 px-4 py-2 text-sm font-semibold text-[#4cc9f0] transition hover:bg-[#4cc9f0]/15"
                            >
                                Lancer ce pack
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal as="section" className="mt-20 space-y-8">
                <div className="space-y-4 text-center lg:text-left">
                    <p className="text-sm uppercase tracking-[0.35em] text-white/60">Idées commerce</p>
                    <h2 className="text-3xl font-semibold">Des cas immédiats pour petits et grands commerces</h2>
                    <p className="text-white/70">Choisis un projet clé en main : nous adaptons les workflows aux volumes, aux canaux et aux équipes en place.</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                    {commerceIdeaSegments.map((segment, index) => (
                        <ScrollReveal
                            key={segment.segment}
                            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7"
                            delayClassName={revealDelays[index % revealDelays.length]}
                        >
                            <div>
                                <p className="text-xs uppercase tracking-[0.35em] text-white/50">{segment.segment}</p>
                                <h3 className="mt-3 text-xl font-semibold text-white">Projets prêts à lancer</h3>
                            </div>
                            <ul className="mt-5 flex flex-1 flex-col gap-4 text-sm text-white/70">
                                {segment.ideas.map((idea) => (
                                    <li key={idea.title} className="rounded-2xl border border-white/10 bg-[#050b1d]/70 p-4">
                                        <p className="text-base font-semibold text-white">{idea.title}</p>
                                        <p className="mt-2">{idea.description}</p>
                                        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#4cc9f0]">{idea.impact}</p>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal as="section" className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-5">
                    <p className="text-sm uppercase tracking-[0.35em] text-white/60">Stack Camerhub</p>
                    <h2 className="text-3xl font-semibold">On assemble les meilleures briques, sans vous enfermer</h2>
                    <p className="text-white/70">
                        Notre philosophie : garder votre stack ouverte et maîtrisée. Nous combinons automatisation, IA générative, data et CRM sans imposer d’outil propriétaire.
                    </p>
                    <p className="text-sm text-white/60">
                        Chaque projet inclut un plan de gouvernance (logs, monitoring, budgets API) et la transmission de la documentation pour vos équipes internes.
                    </p>
                </div>
                <div className="grid gap-5 rounded-2xl border border-white/10 bg-white/5 p-8">
                    {integrationStack.map((stack) => (
                        <div key={stack.category} className="rounded-2xl border border-white/5 bg-[#030b23]/60 p-5">
                            <p className="text-sm uppercase tracking-[0.25em] text-white/50">{stack.category}</p>
                            <p className="mt-3 text-lg font-semibold text-white">{stack.items.join(' · ')}</p>
                        </div>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal as="section" className="mt-20 space-y-8">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-white/60">Questions fréquentes</p>
                    <h2 className="mt-2 text-3xl font-semibold">Tout ce qu’il faut savoir avant de lancer un sprint Camerhub</h2>
                </div>
                <div className="grid gap-4">
                    {serviceFaq.map((item, index) => (
                        <ScrollReveal
                            key={item.question}
                            as="details"
                            className="group rounded-2xl border border-white/10 bg-[#050b1d]/70 p-5"
                            delayClassName={revealDelays[index % revealDelays.length]}
                        >
                            <summary className="cursor-pointer list-none text-left text-lg font-semibold text-white transition group-open:text-[#4cc9f0]">
                                {item.question}
                            </summary>
                            <p className="mt-3 text-sm text-white/70">{item.answer}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal as="section" className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-[#3f37c9]/20 via-[#4cc9f0]/10 to-[#4895ef]/20 p-10 text-center">
                <h2 className="text-3xl font-semibold text-white">Prêt à activer votre copilote IA ?</h2>
                <p className="mt-3 text-white/70">
                    On démarre par un diagnostic rapide pour identifier le flux le plus rentable à automatiser ou augmenter.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#3f37c9] via-[#4cc9f0] to-[#4895ef] px-6 text-sm font-semibold text-white transition hover:scale-[1.01]"
                    >
                        Book un diagnostic
                    </a>
                    <a
                        href="/cases"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white/80 backdrop-blur transition hover:border-white/40 hover:text-white"
                    >
                        Explorer les réalisations
                    </a>
                </div>
            </ScrollReveal>
        </>
    );
};

Services.layout = (page: ReactNode) => <CamerhubLayout>{page}</CamerhubLayout>;

export default Services;
