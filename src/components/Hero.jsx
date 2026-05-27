import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Hi, I'm <span className="highlight">Billion</span>
                </h1>
                <h2 className="hero-subtitle">Brand Identity Designer & UI/UX Specialist</h2>
                <p className="hero-description">
                    I create brand identities that don’t just look good on paper but also translate seamlessly into digital experiences.
                    Blending brand strategy with UI/UX thinking to ensure your brand feels alive, everywhere it shows up.
                </p>
                <div className="hero-buttons">
                    <a href="#contact"><button className="btn-primary">Hire Me</button></a>
                    <a href="#portfolio"><button className="btn-secondary">View My Work</button></a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
