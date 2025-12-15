import React from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import '../index.css';

const Hero = () => {
    return (
        <section id="about" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 'var(--nav-height)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                opacity: 0.15,
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '5%',
                width: '250px',
                height: '250px',
                background: 'var(--accent-secondary)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                opacity: 0.15,
                zIndex: -1
            }} />

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'rgba(56, 189, 248, 0.1)',
                        color: 'var(--accent-primary)',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem',
                        fontWeight: '600'
                    }}>
                        Hello, I'm
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', fontWeight: '700' }}>
                        Alla <span className="text-gradient">Pranay</span>
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: '500' }}>
                        Full Stack Developer <span style={{ color: 'var(--accent-primary)' }}>|</span> AI/ML Engineer
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '500px' }}>
                        Building intelligent full-stack applications with React, Python, and AI integration.
                        Passionate about transforming data into actionable insights.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" style={{
                            padding: '0.8rem 1.5rem',
                            background: 'var(--accent-gradient)',
                            color: 'white',
                            borderRadius: '8px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a href="#contact" style={{
                            padding: '0.8rem 1.5rem',
                            border: '1px solid var(--text-secondary)',
                            color: 'var(--text-primary)',
                            borderRadius: '8px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }} className="hover:border-accent">
                            Contact Me
                        </a>
                    </div>

                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem' }}>
                        {/* Socials repeated here for prominence */}
                        <a href="https://github.com/pranayalla" className="hover-accent"><Github size={24} /></a>
                        <a href="https://linkedin.com/in/pranayalla" className="hover-accent"><Linkedin size={24} /></a>
                    </div>
                </div>

                <div className="fade-in" style={{ animationDelay: '0.4s', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        position: 'relative',
                        width: '320px',
                        height: '320px',
                        borderRadius: '50%',
                        padding: '10px',
                        background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.2))',
                    }}>
                        <img
                            src={profileImg}
                            alt="Alla Pranay"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                border: '4px solid var(--bg-secondary)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
