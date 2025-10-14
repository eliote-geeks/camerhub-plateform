import type { ReactNode } from 'react';
import { Head, Link } from '@inertiajs/react';
import ScrollReveal from '../components/ScrollReveal';
import CamerhubLayout from '../Layouts/CamerhubLayout';
import { caseStudies, revealDelays, type CaseStudy } from '../data/camerhub';

type CasesProps = {
    cases?: CaseStudy[];
};

const Cases = ({ cases = [] }: CasesProps) => {
    const dataset = cases.length > 0 ? cases : caseStudies;
    return (
        <>
            <Head title="Réalisations Camerhub">
                <meta
                    name="description"
                    content="Études de cas Camerhub : assistants WhatsApp, nurturing automatisé et copilotes internes en production."
                />
            </Head>

            <ScrollReveal as="section" className="space-y-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-white/60">Réalisations</p>
                        <h1 className="mt-2 text-3xl font-semibold">Des cas d’usage IA déjà en production</h1>
                    </div>
                    <p className="max-w-xl text-white/70">
                        Commerce, finance, support, RH… Camerhub assemble la stack IA adaptée au métier pour livrer des gains mesurables en quelques semaines.
                    </p>
                </div>
                <figure className="hidden justify-center md:flex">
                    <img
                        src="/images/support-hologram.svg"
                        alt="Illustration copilote support IA"
                        loading="lazy"
                        className="w-full max-w-3xl rounded-3xl border border-white/10 shadow-2xl shadow-[#3f37c9]/20"
                    />
                </figure>

                <div className="grid gap-7">
                    {dataset.map((item, index) => (
                        <ScrollReveal
                            key={item.slug}
                            className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#050b1d]/70 p-7 animate-float-soft md:flex-row md:items-start md:justify-between"
                            delayClassName={revealDelays[index % revealDelays.length]}
                        >
                            <div className="max-w-2xl space-y-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                                        {item.industry}
                                    </span>
                                    <span className="rounded-full bg-[#4cc9f0]/10 px-3 py-1 text-xs font-semibold text-[#4cc9f0]">
                                        {item.metric}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                                <p className="text-sm text-white/70">{item.description}</p>
                                <div className="flex flex-wrap gap-2 text-xs text-white/60">
                                    {item.stack.map((tool) => (
                                        <span key={tool} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={`/cases/${item.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#4cc9f0] transition hover:text-white"
                                >
                                    Étude de cas complète
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4 text-sm text-white/60 md:items-end">
                                <div className="rounded-2xl border border-white/10 bg-[#030b23]/70 p-4">
                                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">Impact</p>
                                    <p className="mt-2 text-lg font-semibold text-white">{item.metric}</p>
                                </div>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full border border-[#4cc9f0]/40 bg-[#4cc9f0]/10 px-4 py-2 text-xs font-semibold text-[#4cc9f0] transition hover:bg-[#4cc9f0]/20"
                                >
                                    Reproduire ce cas
                                </a>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </ScrollReveal>
        </>
    );
};

Cases.layout = (page: ReactNode) => <CamerhubLayout>{page}</CamerhubLayout>;

export default Cases;
