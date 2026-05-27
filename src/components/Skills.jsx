import '../styles/Skills.css';

const tools = [
    { name: 'Figma', icon: '🎛️' },
    { name: 'Adobe Illustrator', icon: '✒️' },
    { name: 'Photoshop', icon: '🖼️' },
    { name: 'Canva', icon: '🎨' },
    { name: 'Procreate', icon: '✏️' },
    { name: 'CorelDRAW', icon: '🖌️' },
    { name: 'InDesign', icon: '📄' },
    { name: 'After Effects', icon: '🎬' },
    // Duplicate for seamless loop
    { name: 'Figma', icon: '🎛️' },
    { name: 'Adobe Illustrator', icon: '✒️' },
    { name: 'Photoshop', icon: '🖼️' },
    { name: 'Canva', icon: '🎨' },
    { name: 'Procreate', icon: '✏️' },
    { name: 'CorelDRAW', icon: '🖌️' },
    { name: 'InDesign', icon: '📄' },
    { name: 'After Effects', icon: '🎬' },
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2 className="section-title">Tools & Skills</h2>
            <div className="skills-track-wrapper">
                <div className="skills-track">
                    {tools.map((tool, i) => (
                        <div key={i} className="skill-pill">
                            <span className="skill-icon">{tool.icon}</span>
                            <span>{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
