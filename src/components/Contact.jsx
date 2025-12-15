import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import '../index.css';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 0', background: 'var(--bg-secondary)', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                    <a href="tel:7981215685" className="contact-link">
                        <div className="icon-box"><Phone size={28} /></div>
                        <span style={{ whiteSpace: 'nowrap' }}>+91 7981215685</span>
                    </a>
                    <a href="mailto:pranayalla2@gmail.com" className="contact-link">
                        <div className="icon-box"><Mail size={28} /></div>
                        <span>Email</span>
                    </a>
                    <a href="https://linkedin.com/in/pranayalla" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <div className="icon-box"><Linkedin size={28} /></div>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/pranayalla" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <div className="icon-box"><Github size={28} /></div>
                        <span>GitHub</span>
                    </a>
                </div>

                <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p>© {new Date().getFullYear()} Alla Pranay. Built with React & Vite.</p>
                </footer>
            </div>

            <style>{`
        .contact-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-primary);
          transition: transform 0.3s ease;
        }
        .contact-link:hover {
          transform: translateY(-5px);
          color: var(--accent-primary);
        }
        .icon-box {
          width: 60px;
          height: 60px;
          background: var(--bg-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        .contact-link:hover .icon-box {
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
        }
      `}</style>
        </section>
    );
};

export default Contact;
