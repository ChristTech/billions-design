import '../styles/Process.css';

const steps = [
    {
        number: '01',
        title: 'Discover',
        description: 'Deep dive into your brand, audience, and goals. Understanding the "why" before touching any tool.',
        icon: '🔍'
    },
    {
        number: '02',
        title: 'Define',
        description: 'Establish the visual direction, tone, and strategy. Building the blueprint before the execution.',
        icon: '📐'
    },
    {
        number: '03',
        title: 'Design',
        description: 'Crafting intentional visuals — logos, systems, interfaces — that speak to your audience clearly.',
        icon: '🎨'
    },
    {
        number: '04',
        title: 'Deliver',
        description: 'Final assets handed off clean and ready to use, with guidelines for consistent application.',
        icon: '🚀'
    }
];

const Process = () => {
    return (
        <section id="process" className="process">
            <h2 className="section-title">My Process</h2>
            <p className="process-subtitle">How I turn ideas into impactful brands</p>
            <div className="process-grid">
                {steps.map((step, i) => (
                    <div key={i} className="process-card">
                        <div className="process-number">{step.number}</div>
                        <div className="process-icon">{step.icon}</div>
                        <h3 className="process-title">{step.title}</h3>
                        <p className="process-description">{step.description}</p>
                        {i < steps.length - 1 && <div className="process-arrow">→</div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
