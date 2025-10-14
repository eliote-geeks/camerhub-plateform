import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { useEffect, useRef, useState } from 'react';

type DelayClass = 'reveal-delay-200' | 'reveal-delay-400' | 'reveal-delay-600';

type ScrollRevealProps<T extends ElementType> = PropsWithChildren<{
    className?: string;
    delayClassName?: DelayClass;
    once?: boolean;
    as?: T;
}> &
    Omit<ComponentPropsWithoutRef<T>, 'children' | 'className'>;

const ScrollReveal = <T extends ElementType = 'div'>({
    children,
    className,
    delayClassName,
    once = true,
    as,
    ...rest
}: ScrollRevealProps<T>) => {
    const Tag = (as ?? 'div') as ElementType;
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            setIsVisible(true);
            return;
        }

        const element = ref.current;
        if (!element) {
            return;
        }

        if (!('IntersectionObserver' in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) {
                            observer.disconnect();
                        }
                    } else if (!once) {
                        setIsVisible(false);
                    }
                });
            },
            {
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.2,
            },
        );

        observer.observe(element);

        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0) {
            setIsVisible(true);
            if (once) {
                observer.disconnect();
            }
        }

        return () => {
            observer.disconnect();
        };
    }, [once]);

    const classes = ['reveal'];
    if (delayClassName) {
        classes.push(delayClassName);
    }
    if (className) {
        classes.push(className);
    }
    if (isVisible) {
        classes.push('is-visible');
    }

    return (
        <Tag ref={ref as never} className={classes.join(' ')} {...(rest as ComponentPropsWithoutRef<T>)}>
            {children}
        </Tag>
    );
};

export default ScrollReveal;
