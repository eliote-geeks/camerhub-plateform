const Logo = () => {
    return (
        <div className="relative inline-flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-[#030712] via-[#111c3a] to-[#030712] logo-aurora">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4cc9f0] via-[#3f37c9] to-[#ff6b6b] text-lg font-semibold text-white">
                    CH
                </div>
                <span className="logo-orbit absolute inset-0" aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-tight">
                <span className="bg-gradient-to-r from-[#4cc9f0] via-[#3f37c9] to-[#ff6b6b] bg-clip-text text-lg font-semibold text-transparent">
                    Camerhub
                </span>
                <span className="text-[11px] uppercase tracking-[0.45em] text-white/50">
                    IA Lab
                </span>
            </div>
        </div>
    );
};

export default Logo;

