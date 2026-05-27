import { useState, useEffect, useCallback } from 'react';

const brandProjects = [
    {
        title: 'TShopify',
        client: 'Brand Identity · UI/UX',
        description: 'A complete brand design system for an e-commerce platform — from logo identity and colour palette to UI components and social media assets.',
        category: 'Branding',
        year: '2024',
        main: '/images/portfolio/Tshopify/main.jpg',
        images: [
            '/images/portfolio/Tshopify/main.jpg',
            '/images/portfolio/Tshopify/one.jpg',
            '/images/portfolio/Tshopify/two.jpg',
            '/images/portfolio/Tshopify/three.jpg',
            '/images/portfolio/Tshopify/four.jpg',
            '/images/portfolio/Tshopify/five.jpg',
            '/images/portfolio/Tshopify/six.jpg',
        ],
    },
    {
        title: 'Konto Money',
        client: 'Fintech · Brand Design',
        description: 'A sleek fintech brand identity built around trust and modernity — encompassing logo design, app UI concepts, and a full visual language for digital banking.',
        category: 'UI/UX',
        year: '2024',
        main: '/images/portfolio/kontoMoney/main.jpg',
        images: [
            '/images/portfolio/kontoMoney/main.jpg',
            '/images/portfolio/kontoMoney/one.jpg',
            '/images/portfolio/kontoMoney/two.jpg',
            '/images/portfolio/kontoMoney/three.jpg',
            '/images/portfolio/kontoMoney/four.jpg',
            '/images/portfolio/kontoMoney/five.jpg',
            '/images/portfolio/kontoMoney/six.jpg',
        ],
    },
];

const otherProjects = [
    { title: 'Brand Identity', client: 'Client Work', image: '/images/portfolio/job1.jpeg', category: 'Branding', year: '2024' },
    { title: 'Print Design', client: 'Client Work', image: '/images/portfolio/Job 3.jpeg', category: 'Print', year: '2024' },
    { title: 'Social Media Kit', client: 'Client Work', image: '/images/portfolio/Job 5.jpeg', category: 'Social Media', year: '2024' },
    { title: 'Brand Guidelines', client: 'Client Work', image: '/images/portfolio/Job 7.jpeg', category: 'Branding', year: '2024' },
    { title: 'Poster Design', client: 'Client Work', image: '/images/portfolio/Job 8.jpeg', category: 'Print', year: '2024' },
    { title: 'Dashboard UI', client: 'Client Work', image: '/images/portfolio/Job 10.jpeg', category: 'UI/UX', year: '2024' },
    { title: 'Product Branding', client: 'Client Work', image: '/images/portfolio/Job 11.jpeg', category: 'Branding', year: '2024' },
    { title: 'Visual Identity', client: 'Client Work', image: '/images/portfolio/Job 13.jpeg', category: 'Branding', year: '2024' },
];

function ProjectModal({ project, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imgFading, setImgFading] = useState(false);

    const goTo = useCallback((idx) => {
        if (idx === currentIndex) return;
        setImgFading(true);
        setTimeout(() => {
            setCurrentIndex(idx);
            setImgFading(false);
        }, 220);
    }, [currentIndex]);

    const prev = () => goTo((currentIndex - 1 + project.images.length) % project.images.length);
    const next = () => goTo((currentIndex + 1) % project.images.length);

    // Close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>

                {/* Close button */}
                <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

                {/* LEFT — Gallery */}
                <div className="modal-gallery">
                    <div className={`modal-img-wrap ${imgFading ? 'fading' : ''}`}>
                        <img
                            src={project.images[currentIndex]}
                            alt={`${project.title} ${currentIndex + 1}`}
                            className="modal-img"
                        />
                    </div>

                    {/* Prev / Next arrows */}
                    {project.images.length > 1 && (
                        <>
                            <button className="gallery-arrow left" onClick={prev} aria-label="Previous">‹</button>
                            <button className="gallery-arrow right" onClick={next} aria-label="Next">›</button>
                        </>
                    )}

                    {/* Dot indicators */}
                    {project.images.length > 1 && (
                        <div className="gallery-dots">
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    className={`gallery-dot ${i === currentIndex ? 'active' : ''}`}
                                    onClick={() => goTo(i)}
                                    aria-label={`Image ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Counter */}
                    <div className="gallery-counter">{currentIndex + 1} / {project.images.length}</div>
                </div>

                {/* RIGHT — Info */}
                <div className="modal-info">
                    <span className="modal-category">{project.category}</span>
                    <h3 className="modal-title">{project.title}</h3>
                    <p className="modal-client">{project.client}</p>
                    <div className="modal-divider" />
                    <p className="modal-description">{project.description}</p>
                    <div className="modal-year-badge">{project.year}</div>
                </div>
            </div>
        </div>
    );
}

// Simple full-screen lightbox for other work images
function OtherWorkLightbox({ startIndex, onClose }) {
    const images = otherProjects.map(p => p.image);
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [fading, setFading] = useState(false);

    const goTo = useCallback((idx) => {
        if (idx === currentIndex) return;
        setFading(true);
        setTimeout(() => {
            setCurrentIndex((idx + images.length) % images.length);
            setFading(false);
        }, 200);
    }, [currentIndex, images.length]);

    const prev = () => goTo(currentIndex - 1);
    const next = () => goTo(currentIndex + 1);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
            if (e.key === 'ArrowRight') goTo(currentIndex + 1);
        };
        document.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
        };
    }, [onClose, goTo, currentIndex]);

    return (
        <div className="ow-lightbox-backdrop" onClick={onClose}>
            <button className="modal-close ow-close" onClick={onClose} aria-label="Close">✕</button>

            <div className={`ow-lightbox-img-wrap ${fading ? 'fading' : ''}`} onClick={(e) => e.stopPropagation()}>
                <img src={images[currentIndex]} alt={`Work ${currentIndex + 1}`} className="ow-lightbox-img" />
            </div>

            <button className="gallery-arrow ow-arrow left" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
            <button className="gallery-arrow ow-arrow right" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>

            <div className="ow-lightbox-counter">{currentIndex + 1} / {images.length}</div>
        </div>
    );
}

function ProjectsShowcase() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [otherWorkIndex, setOtherWorkIndex] = useState(null); // null = closed

    return (
        <section id="portfolio" className="projects-showcase">
            <div className="projects-container">
                <div className="projects-header" data-animate>
                    <h2>Completed Work</h2>
                    <p>A selection of recent client projects</p>
                </div>

                {/* ── Featured Brand Projects ── */}
                <div className="featured-label" data-animate>Featured Projects</div>
                <div className="featured-grid" data-animate>
                    {brandProjects.map((project) => (
                        <div
                            key={project.title}
                            className="featured-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="featured-img-wrap">
                                <img src={project.main} alt={project.title} className="featured-img" />
                                <div className="featured-overlay">
                                    <span className="featured-open-hint">View Project ↗</span>
                                </div>
                            </div>
                            <div className="featured-meta">
                                <span className="project-category">{project.category}</span>
                                <h3 className="featured-card-title">{project.title}</h3>
                                <p className="project-client">{project.client}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Other Work ── */}
                <div className="featured-label" data-animate style={{ marginTop: '4rem' }}>Other Work</div>

                <div className="other-work-strip" data-animate>
                    {otherProjects.map((project, index) => (
                        <div key={index} className="other-work-card" onClick={() => setOtherWorkIndex(index)}>
                            <div className="other-work-img-wrap">
                                <img src={project.image} alt={project.title} className="other-work-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Lightbox Modal (featured) ── */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            {/* ── Other Work Lightbox ── */}
            {otherWorkIndex !== null && (
                <OtherWorkLightbox
                    startIndex={otherWorkIndex}
                    onClose={() => setOtherWorkIndex(null)}
                />
            )}
        </section>
    );
}

export default ProjectsShowcase;
