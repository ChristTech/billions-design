import { useState, useEffect } from 'react';

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words  - Texts to cycle through.
 * @param {number}  speed   - Typing speed in ms (default 80).
 * @param {number}  pause   - How long to pause on full word (default 1800).
 */
const useTypewriter = (words, speed = 80, pause = 1800) => {
    const [display, setDisplay] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex % words.length];

        const timeout = setTimeout(() => {
            if (!deleting) {
                setDisplay(current.slice(0, charIndex + 1));
                if (charIndex + 1 === current.length) {
                    setTimeout(() => setDeleting(true), pause);
                } else {
                    setCharIndex((c) => c + 1);
                }
            } else {
                setDisplay(current.slice(0, charIndex - 1));
                if (charIndex === 0) {
                    setDeleting(false);
                    setWordIndex((w) => (w + 1) % words.length);
                } else {
                    setCharIndex((c) => c - 1);
                }
            }
        }, deleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, wordIndex, words, speed, pause]);

    return display;
};

export default useTypewriter;
