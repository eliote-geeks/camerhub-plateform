import type { ReactNode } from 'react';
import { Head, Link } from '@inertiajs/react';
import ScrollReveal from '../../components/ScrollReveal';
import CamerhubLayout from '../../Layouts/CamerhubLayout';
import { revealDelays, type CaseStudy } from '../../data/camerhub';

type CaseShowProps = {
    caseStudy: CaseStudy;
    related: CaseStudy[];
};

const CaseShow = ({ caseStudy, related }: CaseShowProps) => {
    const { title, metric, description, industry, stack, challenge, solution, results, timeline } = caseStudy;

    return (
        <>
            <Head title={`${title} · Réalisations Camerhub`}>
                <meta name="description" content={description} />
            </Head>

            <section className="space-y-16">
                <ScrollReveal as="header" className="rounded-3xl border border-white/10 bg-white/5 p-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="space-y-5">
                            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
                                {industry}
                            </p>
                            <h1 className="text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
                            <p className="max-w-2xl text-lg text-white/70">{description}</p>
                            <div className="flex flex-wrap gap-2 text-xs text-white/60">
                                {stack.map((tool) => (
                                    <span key={tool} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                            <figure className="hidden max-w-md md:block">
                                <img
                                    src="/images/workflow-sphere.svg"
                                    alt="Sphère d’automatisation de la solution"
                                    loading="lazy"
                                    className="w-full rounded-3xl border border-white/10 shadow-lg shadow-[#3f37c9]/20"
                                />
                            </figure>
                        </div>
                        <div className="flex flex-col items-start gap-4 rounded-2xl border border-[#4cc9f0]/30 bg-[#050b1d]/70 p-6 text-white/80">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Impact mesuré</p>
                                <p className="mt-2 text-2xl font-semibold text-white">{metric}</p>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f37c9] to-[#4cc9f0] px-5 py-2 text-sm font-semibold text-white transition hover:scale-[1.01]"
                            >
                                Lancer un diagnostic
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <ScrollReveal as="section" className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Défi</p>
                            <p className="mt-3 text-sm text-white/70">{challenge}</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Solution Camerhub</p>
                            <ul className="mt-4 space-y-3 text-sm text-white/75">
                                {solution.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[#4cc9f0]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal as="section" className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#050b1d]/70 p-8 animate-float-soft">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Résultats & KPIs</p>
                            <ul className="mt-4 space-y-3 text-sm text-white/75">
                                {results.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Timeline</p>
                            <ul className="mt-4 space-y-3 text-sm text-white/70">
                                {timeline.map((step) => (
                                    <li key={step} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-[#4cc9f0]" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal as="section" className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#3f37c9]/20 via-[#4cc9f0]/10 to-[#4895ef]/20 p-10 text-center">
                    <h2 className="text-3xl font-semibold text-white">Envie de reproduire ce cas ?</h2>
                    <p className="mt-3 text-white/70">
                        Partage ton contexte, on te bâtit un plan d’action chiffré et la stack IA adaptée.
                    </p>
                    <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#030712] transition hover:bg-white/90"
                        >
                            Contacter Camerhub
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white/80 backdrop-blur transition hover:border-white/50 hover:text-white"
                        >
                            Voir nos packs
                        </Link>
                    </div>
                </ScrollReveal>

                {related.length > 0 && (
                    <ScrollReveal as="section" className="space-y-6">
                        <div className="text-center">
                            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Autres succès Camerhub</p>
                            <h2 className="mt-2 text-2xl font-semibold text-white">Continue l’exploration</h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {related.map((item, index) => (
                                <ScrollReveal
                                    key={item.slug}
                                    className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#050b1d]/70 p-6"
                                    delayClassName={revealDelays[index % revealDelays.length]}
                                >
                                    <div className="space-y-3">
                                        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                                            {item.industry}
                                        </span>
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                        <p className="text-sm text-white/70">{item.description}</p>
                                        <span className="inline-flex w-fit rounded-full bg-[#4cc9f0]/10 px-3 py-1 text-xs font-semibold text-[#4cc9f0]">
                                            {item.metric}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/cases/${item.slug}`}
                                        className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                                    >
                                        Découvrir le cas
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                )}
            </section>
        </>
    );
};

CaseShow.layout = (page: ReactNode) => <CamerhubLayout>{page}</CamerhubLayout>;

export default CaseShow;
