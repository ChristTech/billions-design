import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I'm <span className="highlight">Billion</span>, a Brand Identity Designer with growing expertise in UI/UX.
                    </p>
                    <p>
                        I focus on creating brand identities that are more than just logos—they are complete visual systems that translate seamlessly into digital experiences.
                        My goal is to help businesses and startups build visual identities that deeply connect with their audience and maintain consistency across all touchpoints, from websites to apps.
                    </p>
                    <p>
                        By blending strategic brand thinking with modern UI/UX principles, I ensure your brand feels alive, professional, and unique everywhere it appears.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
