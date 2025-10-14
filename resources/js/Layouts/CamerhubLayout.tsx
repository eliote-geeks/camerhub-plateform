import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedCursor from '../components/AnimatedCursor';
import Logo from '../components/Logo';
import FloatingChat from '../components/FloatingChat';

type NavLink = {
    label: string;
    href: string;
};

const navLinks: NavLink[] = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/method', label: 'Méthode' },
    { href: '/cases', label: 'Réalisations' },
    { href: '/contact', label: 'Contact' },
];

const pageVariants = {
    initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] } },
    exit: { opacity: 0, y: -24, filter: 'blur(6px)', transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } },
};

const CamerhubLayout = ({ children }: PropsWithChildren) => {
    const { url } = usePage();

    const activeHref = useMemo(() => {
        if (url === '/') {
            return '/';
        }

        const match = navLinks
            .filter((item) => item.href !== '/')
            .find((item) => url.startsWith(item.href));

        return match?.href ?? '/';
    }, [url]);

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
            <AnimatedCursor />
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#3f37c9]/40 blur-[140px] animate-aurora" />
                <div className="absolute bottom-[-220px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#00b4d8]/30 blur-[160px] animate-aurora-slow animation-delay-2000" />
                <div className="absolute left-[-180px] top-[40%] h-[360px] w-[360px] rounded-full bg-[#ff6b6b]/18 blur-[160px] animate-aurora animation-delay-4000" />
                <div className="absolute left-[14%] top-[24%] h-28 w-28 rounded-full bg-[#4cc9f0]/35 blur-[70px] animate-spark" />
                <div className="absolute right-[18%] top-[60%] h-24 w-24 rounded-full bg-[#4361ee]/25 blur-[50px] animate-spark animation-delay-2000" />
            </div>

            <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-12">
                <header className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-lg shadow-[#3f37c9]/10 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                    <Logo />
                    <nav className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition hover:text-white ${activeHref === item.href ? 'text-white' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#030712] transition hover:bg-white/90"
                            href="https://wa.me/237691754257"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Parler à Paul
                        </a>
                    </nav>
                </header>

                <AnimatePresence mode="wait" initial={false}>
                    <motion.main
                        key={url}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="mt-16 flex flex-1 flex-col"
                    >
                        {children}
                    </motion.main>
                </AnimatePresence>

                <footer className="mt-20 flex flex-col items-center gap-2 pb-6 text-xs text-white/40">
                    <p>© {new Date().getFullYear()} Camerhub — Plateforme d’automatisations IA construite par Paul.</p>
                    <p>Cameroun · France · Remote</p>
                </footer>
            </div>
            <FloatingChat whatsappNumber="237691754257" />
        </div>
    );
};

export default CamerhubLayout;
