import { useEffect, useRef } from 'react';

/**
 * Attaches an 'is-visible' class to elements with [data-animate] as they
 * enter the viewport, triggering CSS transitions defined in index.css.
 */
const useScrollAnimation = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);
};

export default useScrollAnimation;
