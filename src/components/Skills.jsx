import React from 'react';
import { Code2, Database, Layout, Terminal, Cpu } from 'lucide-react';
import '../index.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 className="text-accent" />,
            skills: ["Python", "JavaScript", "Kotlin", "C", "SQL", "HTML/CSS"]
        },
        {
            title: "Frameworks & Libraries",
            icon: <Layout className="text-accent" />,
            skills: ["React.js", "Node.js", "Express.js", "Material UI", "RESTful APIs"]
        },
        {
            title: "Databases & Cloud",
            icon: <Database className="text-accent" />,
            skills: ["MySQL", "Firebase", "Firestore", "Cloud Functions", "Authentication"]
        },
        {
            title: "AI & ML Technologies",
            icon: <Cpu className="text-accent" />,
            skills: ["NLP", "Computer Vision", "Gemini API", "OpenAI APIs", "Prompt Engineering"]
        },
        {
            title: "Developer Tools",
            icon: <Terminal className="text-accent" />,
            skills: ["Git", "GitHub", "Android Studio", "VS Code"]
        }
    ];

    return (
        <section id="skills" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card fade-in" style={{
                            background: 'var(--bg-primary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            animationDelay: `${index * 0.1}s`
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    padding: '10px',
                                    borderRadius: '8px',
                                    background: 'rgba(56, 189, 248, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {category.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{category.title}</h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {category.skills.map((skill, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.9rem',
                                        padding: '0.4rem 0.8rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '20px',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
          border-color: var(--accent-primary);
        }
      `}</style>
        </section>
    );
};

export default Skills;
