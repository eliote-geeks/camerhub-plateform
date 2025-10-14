import { useEffect, useRef } from 'react';

const CURSOR_SIZE = 44; // Keep in sync with CSS dimensions (2.75rem)

const AnimatedCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQuery = window.matchMedia('(pointer: fine)');
        if (!mediaQuery.matches) {
            return;
        }

        const cursor = cursorRef.current;
        if (!cursor) {
            return;
        }

        document.body.classList.add('has-ai-cursor');

        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 2;
        let targetX = currentX;
        let targetY = currentY;
        let frameId: number | null = null;

        const render = () => {
            currentX += (targetX - currentX) * 0.18;
            currentY += (targetY - currentY) * 0.18;

            cursor.style.transform = `translate3d(${currentX - CURSOR_SIZE / 2}px, ${currentY - CURSOR_SIZE / 2}px, 0)`;
            frameId = window.requestAnimationFrame(render);
        };

        frameId = window.requestAnimationFrame(render);

        const handleMove = (event: PointerEvent) => {
            targetX = event.clientX;
            targetY = event.clientY;
        };

        const handleDown = () => {
            cursor.classList.add('is-pressed');
        };

        const handleUp = () => {
            cursor.classList.remove('is-pressed');
        };

        const handleVisibility = () => {
            targetX = window.innerWidth / 2;
            targetY = window.innerHeight / 2;
        };

        window.addEventListener('pointermove', handleMove, { passive: true });
        window.addEventListener('pointerdown', handleDown, { passive: true });
        window.addEventListener('pointerup', handleUp, { passive: true });
        window.addEventListener('blur', handleUp);
        window.addEventListener('resize', handleVisibility);

        return () => {
            document.body.classList.remove('has-ai-cursor');
            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('pointerdown', handleDown);
            window.removeEventListener('pointerup', handleUp);
            window.removeEventListener('blur', handleUp);
            window.removeEventListener('resize', handleVisibility);

            if (frameId) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return <div ref={cursorRef} className="ai-cursor" aria-hidden="true" />;
};

export default AnimatedCursor;

