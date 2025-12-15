import React, { useState, useEffect } from 'react';
import { X, Copy, Check, FileCode } from 'lucide-react';
import '../index.css';

const CodeModal = ({ isOpen, onClose, title, files }) => {
    // files should be an array of { name: string, language: string, code: string }
    // or backward compatible with single code string if needed, but we'll migrate

    const [activeFileIndex, setActiveFileIndex] = useState(0);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isOpen) setActiveFileIndex(0);
    }, [isOpen]);

    if (!isOpen) return null;

    const activeFile = files?.[activeFileIndex];

    const handleCopy = () => {
        if (!activeFile) return;
        navigator.clipboard.writeText(activeFile.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }} onClick={onClose}>
            <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                width: '100%',
                maxWidth: '900px',
                height: '85vh',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div style={{
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'var(--bg-primary)'
                }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{title} - Source Preview</h3>
                    <button onClick={onClose} style={{ color: 'var(--text-secondary)', padding: '5px' }}>
                        <X size={20} />
                    </button>
                </div>

                {/* Content Area */}
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

                    {/* Sidebar / Tabs */}
                    <div style={{
                        width: '200px',
                        background: 'rgba(15, 23, 42, 0.5)',
                        borderRight: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto'
                    }}>
                        {files.map((file, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFileIndex(index)}
                                style={{
                                    padding: '0.75rem 1rem',
                                    textAlign: 'left',
                                    background: activeFileIndex === index ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                                    color: activeFileIndex === index ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                    border: 'none',
                                    borderLeft: activeFileIndex === index ? '3px solid var(--accent-primary)' : '3px solid transparent',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <FileCode size={16} />
                                {file.name}
                            </button>
                        ))}
                    </div>

                    {/* Code View */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#0d1117' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            padding: '0.5rem',
                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <button
                                onClick={handleCopy}
                                style={{
                                    padding: '0.4rem 0.8rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '6px',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.8rem'
                                }}
                            >
                                {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy Content</>}
                            </button>
                        </div>

                        <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem' }}>
                            <pre style={{
                                margin: 0,
                                fontFamily: "'Fira Code', 'Consolas', monospace",
                                fontSize: '0.9rem',
                                color: '#e6edf3',
                                lineHeight: '1.5'
                            }}>
                                <code>{activeFile?.code}</code>
                            </pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CodeModal;
