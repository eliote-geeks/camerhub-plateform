import type { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import ScrollReveal from '../components/ScrollReveal';
import CamerhubLayout from '../Layouts/CamerhubLayout';
import {
    accelerators,
    processSteps,
    revealDelays,
} from '../data/camerhub';

const Method = () => {
    return (
        <>
            <Head title="Méthode Camerhub">
                <meta
                    name="description"
                    content="Découvrez la méthode Camerhub : immersion, prototype augmenté et industrialisation pour vos projets IA."
                />
            </Head>

            <ScrollReveal as="section" className="space-y-10">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-white/60">Méthode</p>
                    <h1 className="mt-2 text-3xl font-semibold">Un cycle court, mesurable, répétable</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-white/70">
                        Nous co-construisons avec vos équipes, puis industrialisons ce qui fonctionne. L’objectif : livrer rapidement de la valeur tout en consolidant la stack IA dans la durée.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {processSteps.map((step, index) => (
                        <ScrollReveal
                            key={step.title}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 animate-float-soft"
                            delayClassName={revealDelays[index % revealDelays.length]}
                        >
                            <span className="absolute right-6 top-6 text-6xl font-semibold text-white/5">0{index + 1}</span>
                            <step.icon className="h-7 w-7 text-[#4cc9f0]" />
                            <h2 className="mt-5 text-xl font-semibold">{step.title}</h2>
                            <p className="mt-3 text-sm text-white/70">{step.description}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal as="section" className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-[#050b1d] via-[#030712] to-[#050b1d] p-10">
                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="lg:w-1/3">
                        <p className="text-sm uppercase tracking-[0.35em] text-white/60">Accélérateurs</p>
                        <h2 className="mt-2 text-3xl font-semibold">Vous n’êtes pas seul : on arrive avec nos assets</h2>
                        <p className="mt-4 text-sm text-white/70">Des ressources éprouvées pour aller plus loin que le simple prototype.</p>
                    </div>
                    <div className="grid flex-1 gap-6 sm:grid-cols-3">
                        {accelerators.map((item, index) => (
                            <ScrollReveal
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6 animate-float-soft"
                                delayClassName={revealDelays[index % revealDelays.length]}
                            >
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-3 text-sm text-white/70">{item.description}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </>
    );
};

Method.layout = (page: ReactNode) => <CamerhubLayout>{page}</CamerhubLayout>;

export default Method;

