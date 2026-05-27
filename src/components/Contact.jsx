import { useState } from 'react';
import '../styles/Contact.css';

const EMAIL = 'adebisivictor39@gmail.com';
const WA_NUMBER = '2349018114203'; // 0901… → +234901…

// ── SVG Icons ──────────────────────────────────────────────────────────────
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="contact-svg-icon" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        className="contact-svg-icon" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94
            1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297
            -.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52
            -.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074
            -.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077
            4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413
            .248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.845L.057 23.486a.5.5 0 0 0 .608.63
            l5.857-1.535A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.887 9.887
            0 0 1-5.032-1.376l-.361-.214-3.734.979.997-3.638-.235-.374A9.861 9.861 0 0 1 2.1 12C2.1 6.533
            6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
    </svg>
);

// ── Component ──────────────────────────────────────────────────────────────
const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
        const body = encodeURIComponent(
            `Hi, my name is ${form.name}.\nMy email: ${form.email}\n\n${form.message}`
        );
        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(EMAIL)}&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    const waMessage = encodeURIComponent(
        "Hi! I came across your portfolio and I'd love to discuss a project with you."
    );
    const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-container">
                {/* ── Left info panel ── */}
                <div className="contact-info">
                    <h3>Let's Work Together</h3>
                    <p>Have a project in mind? Reach out and let's create something amazing.</p>
                    <div className="contact-links">
                        <a href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(EMAIL)}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span className="contact-icon-wrap email-icon">
                                <MailIcon />
                            </span>
                            <span>{EMAIL}</span>
                        </a>

                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span className="contact-icon-wrap whatsapp-icon">
                                <WhatsAppIcon />
                            </span>
                            <span>WhatsApp Chat</span>
                        </a>
                    </div>
                </div>

                {/* ── Right form ── */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={`btn-primary${sent ? ' btn-sent' : ''}`}>
                        {sent ? '✓ Opening Mail…' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
