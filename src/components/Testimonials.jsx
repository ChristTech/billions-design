import '../styles/Testimonials.css';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, BrightStart Agency',
        quote: 'Billion transformed our brand from a generic logo into a complete identity system. Every client we meet now asks about our branding — that\'s the Billion effect.',
        avatar: '👩🏾'
    },
    {
        name: 'Marcus Okonkwo',
        role: 'Founder, NairaBox',
        quote: 'Working with Billion was seamless. He understood the vision immediately and delivered visuals that felt premium from day one. Highly recommended.',
        avatar: '👨🏿'
    },
    {
        name: 'Ade Fashola',
        role: 'Product Manager, TechHive',
        quote: 'The UI designs Billion created for our app cut our onboarding drop-off in half. He doesn\'t just design — he thinks about the user experience at every step.',
        avatar: '👨🏾'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <h2 className="section-title">What Clients Say</h2>
            <div className="testimonials-grid">
                {testimonials.map((t, i) => (
                    <div key={i} className="testimonial-card">
                        <div className="quote-mark">"</div>
                        <p className="testimonial-quote">{t.quote}</p>
                        <div className="testimonial-author">
                            <span className="testimonial-avatar">{t.avatar}</span>
                            <div>
                                <p className="author-name">{t.name}</p>
                                <p className="author-role">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
