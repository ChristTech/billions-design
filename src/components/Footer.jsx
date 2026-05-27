const Footer = () => {
    return (
        <footer style={{
            background: '#0a0a0a',
            padding: '2rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '4rem'
        }}>
            <p style={{ color: 'var(--text-muted)' }}>
                &copy; {new Date().getFullYear()} Olatunji Charles Billion. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
