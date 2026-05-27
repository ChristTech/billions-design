import '../styles/Services.css';

const Services = () => {
    const services = [
        {
            title: "Brand Identity Design",
            description: "Creating unique and memorable visual identities that resonate with your target audience.",
            icon: "🎨"
        },
        {
            title: "UI/UX Design",
            description: "Designing intuitive and engaging user interfaces for websites and mobile applications.",
            icon: "🖥️"
        },
        {
            title: "Digital Experiences",
            description: "Crafting seamless digital interactions that elevate your brand's online presence.",
            icon: "✨"
        }
    ];

    return (
        <section id="services" className="services">
            <h2 className="section-title">Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
