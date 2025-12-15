import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import '../index.css';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '6rem 0' }}>
            <div className="container">
                <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="experience-card fade-in" style={{
                        position: 'relative',
                        paddingLeft: '2rem',
                        borderLeft: '2px solid var(--accent-secondary)'
                    }}>
                        {/* Timeline dot */}
                        <div style={{
                            position: 'absolute',
                            left: '-9px',
                            top: '0',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'var(--accent-gradient)'
                        }}></div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Android Development Intern</h3>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1.5rem',
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                marginBottom: '1rem'
                            }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Briefcase size={16} className="text-accent" /> Bharat Heavy Electricals Limited (BHEL)
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <MapPin size={16} className="text-accent" /> Visakhapatnam, India
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Calendar size={16} className="text-accent" /> Jun 2024 – Jul 2024
                                </span>
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.8rem',
                                color: 'var(--text-secondary)'
                            }}>
                                <li style={{ display: 'flex', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-primary)', marginTop: '5px' }}>▹</span>
                                    Engineered a production-grade Pin Code Validator Android app using Kotlin and Jetpack Compose,
                                    validating 6,000+ Indian pin codes with 100% accuracy.
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-primary)', marginTop: '5px' }}>▹</span>
                                    Optimized app performance by reducing load time by 35% and API response latency by 25%
                                    through efficient data caching and asynchronous processing.
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-primary)', marginTop: '5px' }}>▹</span>
                                    Implemented Firebase real-time database integration for secure data validation and storage,
                                    handling 1,000+ daily validation requests.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
