import { useEffect, useRef } from 'react';
import CardGroups from './components/CardGroups';
import ProjectsShowcase from './components/ProjectsShowcase';
import Skills from './components/Skills';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useTypewriter from './hooks/useTypewriter';
import useScrollAnimation from './hooks/useScrollAnimation';

import './styles/CardGroups.css';
import './styles/Card.css';
import './styles/ProjectsShowcase.css';

const roles = [
    'Brand Identity Designer',
    'UI/UX Specialist',
    'Visual Storyteller',
    'Digital Experience Creator',
];

function App() {
    const typed = useTypewriter(roles, 75, 2000);
    useScrollAnimation();

    // Cursor glow — update CSS variables on mousemove
    const glowRef = useRef(null);
    useEffect(() => {
        const move = (e) => {
            if (glowRef.current) {
                glowRef.current.style.left = `${e.clientX}px`;
                glowRef.current.style.top  = `${e.clientY}px`;
            }
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div className="app">
            {/* Cursor glow overlay */}
            <div ref={glowRef} className="cursor-glow" />

            {/* ── Hero Header ── */}
            <div className="portfolio-header" style={{
                textAlign: 'center',
                padding: '1.5rem 2rem 0.5rem',
                pointerEvents: 'none',
            }}>
                <h1 style={{ marginBottom: '0.4rem', color: '#fff', textShadow: '0 0 10px rgba(0,0,0,0.8)' }}>
                    Billion{' '}
                    <span style={{ fontWeight: 300, fontSize: '0.55em', color: '#ccc' }}>(Olatunji Charles)</span>
                </h1>

                {/* Typewriter subtitle */}
                <p style={{
                    fontSize: '1.2rem',
                    color: '#00FFFF',
                    fontWeight: 'bold',
                    minHeight: '1.8em',
                    textShadow: '0 0 5px rgba(0,0,0,0.8)',
                }}>
                    {typed}<span style={{ borderRight: '2px solid #00FFFF', marginLeft: '2px', animation: 'blink 1s step-end infinite' }} />
                </p>

                {/* Available badge */}
                <div style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'auto' }}>
                    <span className="available-badge">
                        <span className="available-dot" />
                        Available for freelance work
                    </span>
                </div>
            </div>

            {/* ── Card Fan (original design) ── */}
            <CardGroups />

            {/* ── Skills Strip ── */}
            <div data-animate><Skills /></div>

            {/* ── My Process ── */}
            <Process />

            {/* ── Portfolio Grid ── */}
            <ProjectsShowcase />

            {/* ── Testimonials ── */}
            <Testimonials />

            {/* ── Blog ── */}
            <Blog />

            {/* ── Contact ── */}
            <Contact />

            {/* ── Footer ── */}
            <Footer />
        </div>
    );
}

export default App;
