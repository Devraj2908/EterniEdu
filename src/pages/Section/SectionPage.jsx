import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, FileText, Layout, ArrowLeft, Clock,
    BookOpen, Lock, Download, ChevronRight,
    CheckCircle2, Info, Book as BookIcon
} from 'lucide-react';
import { gradesData } from '../../data/gradesData';

const SectionPage = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('notes');
    const [previewPdf, setPreviewPdf] = useState(null);

    const data = gradesData[id] || {
        title: 'Course Track',
        desc: 'Your personalized learning path.',
        resources: { notes: [], books: [], videos: [] }
    };

    const tabs = [
        { id: 'notes', label: 'Study Notes', icon: <FileText size={18} /> },
        { id: 'books', label: 'Recommended Books', icon: <BookIcon size={18} /> },
        { id: 'videos', label: 'Video Lectures', icon: <Play size={18} /> },
        { id: 'tests', label: 'Mock Tests', icon: <Layout size={18} /> }
    ];

    const renderEmptyState = (type) => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'var(--glass-bg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px dashed var(--glass-border)'
            }}
        >
            <Info size={48} style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No {type} available yet</h3>
            <p style={{ color: 'var(--text-muted)' }}>We are currently uploading fresh, copyrighted content for this section.</p>
        </motion.div>
    );

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '120px', paddingBottom: '5rem' }}>
            <div className="container">
                <Link to="/dashboard" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    fontSize: '0.9rem',
                    transition: 'var(--transition)'
                }} className="hover:text-gold">
                    <ArrowLeft size={16} /> Back to Dashboard
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <header style={{ marginBottom: '4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                            <BookOpen size={20} />
                            <span style={{ fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Academic Resource Hub</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', fontWeight: '800' }}>{data.title}</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.8' }}>
                            {data.desc}
                        </p>
                    </header>

                    {/* Tabs Navigation */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '3rem',
                        overflowX: 'auto',
                        paddingBottom: '0.5rem',
                        scrollbarWidth: 'none'
                    }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '1rem 1.5rem',
                                    borderRadius: 'var(--radius-md)',
                                    background: activeTab === tab.id ? 'var(--accent-gold)' : 'var(--glass-bg)',
                                    color: activeTab === tab.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
                                    border: '1px solid',
                                    borderColor: activeTab === tab.id ? 'var(--accent-gold)' : 'var(--glass-border)',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div style={{ position: 'relative' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeTab === 'notes' && (
                                    <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3" style={{ gap: '1.5rem' }}>
                                        {data.resources.notes.length > 0 ? data.resources.notes.map((note) => (
                                            <div key={note.id} className="glass" style={{
                                                padding: '2rem',
                                                borderRadius: 'var(--radius-lg)',
                                                border: '1px solid var(--glass-border)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '1.5rem'
                                            }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                    <div style={{
                                                        width: '48px',
                                                        height: '48px',
                                                        background: 'var(--bg-tertiary)',
                                                        borderRadius: 'var(--radius-sm)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'var(--accent-gold)'
                                                    }}>
                                                        <FileText size={24} />
                                                    </div>
                                                    <span style={{
                                                        fontSize: '0.7rem',
                                                        color: 'var(--accent-gold)',
                                                        background: 'rgba(212, 175, 55, 0.1)',
                                                        padding: '4px 8px',
                                                        borderRadius: 'var(--radius-sm)',
                                                        fontWeight: '700'
                                                    }}>
                                                        PREMIUM
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{note.title}</h3>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                                        <CheckCircle2 size={14} /> {note.copyright}
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', gap: '10px' }}>
                                                    <button
                                                        className="btn btn-outline"
                                                        style={{ flex: 1, justifyContent: 'center', gap: '8px' }}
                                                        onClick={() => {
                                                            if (note.pdfUrl && note.pdfUrl !== '#') {
                                                                setPreviewPdf(note);
                                                            } else {
                                                                alert('This specialized note is currently being finalized. Stay tuned!');
                                                            }
                                                        }}
                                                    >
                                                        Preview
                                                    </button>
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ flex: 1, justifyContent: 'center', gap: '8px' }}
                                                        onClick={() => {
                                                            if (note.pdfUrl && note.pdfUrl !== '#') {
                                                                window.open(note.pdfUrl, '_blank');
                                                            } else {
                                                                alert('This specialized note is currently being finalized. It will be available for download very soon!');
                                                            }
                                                        }}
                                                    >
                                                        <Download size={18} /> PDF
                                                    </button>
                                                </div>
                                            </div>
                                        )) : renderEmptyState('notes')}
                                    </div>
                                )}

                                {activeTab === 'books' && (
                                    <div className="grid grid-cols-1" style={{ gap: '1rem' }}>
                                        {data.resources.books.length > 0 ? data.resources.books.map((book) => (
                                            <div key={book.id} className="glass" style={{
                                                padding: '1.5rem 2rem',
                                                borderRadius: 'var(--radius-md)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '2rem',
                                                justifyContent: 'space-between'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                                    <div style={{ color: 'var(--accent-gold)', opacity: 0.7 }}>
                                                        <BookIcon size={32} />
                                                    </div>
                                                    <div>
                                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{book.title}</h4>
                                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{book.category} Recommendation</span>
                                                    </div>
                                                </div>
                                                <button style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    color: 'var(--accent-gold)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    cursor: 'pointer',
                                                    fontWeight: '600'
                                                }}>
                                                    View Details <ChevronRight size={18} />
                                                </button>
                                            </div>
                                        )) : renderEmptyState('books')}
                                    </div>
                                )}

                                {activeTab === 'videos' && (
                                    <div className="grid grid-cols-1 md-grid-cols-2" style={{ gap: '2rem' }}>
                                        {data.resources.videos.length > 0 ? data.resources.videos.map((video) => (
                                            <div key={video.id} className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                                                <div style={{ height: '200px', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg-primary)', cursor: 'pointer' }}>
                                                        <Play size={24} fill="currentColor" />
                                                    </div>
                                                </div>
                                                <div style={{ padding: '1.5rem' }}>
                                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{video.title}</h4>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {video.duration}</div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Lock size={14} /> Locked by Grade</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )) : renderEmptyState('video lectures')}
                                    </div>
                                )}

                                {(activeTab === 'tests') && renderEmptyState('mock tests')}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Educational Commitment Note */}
                    <div className="glass-morphism" style={{ marginTop: '5rem', padding: '3rem', borderRadius: 'var(--radius-lg)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'var(--accent-gold-glow)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <CheckCircle2 size={40} style={{ color: 'var(--accent-gold)' }} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Our Copyright Guarantee</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Every note provided in the study material section is an original creation of the EterniEdu academic team.
                                We maintain strict copyright standards to ensure you receive unique, high-quality, and legally protected learning content.
                                No duplication, just pure expertise.
                            </p>
                        </div>
                    </div>

                    {/* PDF Preview Modal */}
                    <AnimatePresence>
                        {previewPdf && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'rgba(0,0,0,0.9)',
                                    zIndex: 2000,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2rem'
                                }}
                                onClick={() => setPreviewPdf(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    style={{
                                        width: '100%',
                                        maxWidth: '1000px',
                                        height: '90vh',
                                        background: 'var(--bg-secondary)',
                                        borderRadius: 'var(--radius-lg)',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        border: '1px solid var(--accent-gold)'
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <h3 style={{ margin: 0 }}>{previewPdf.title}</h3>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{previewPdf.copyright}</span>
                                        </div>
                                        <button
                                            onClick={() => setPreviewPdf(null)}
                                            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                                        >
                                            <ArrowLeft size={24} style={{ transform: 'rotate(90deg)' }} />
                                        </button>
                                    </div>
                                    <div style={{ flex: 1, background: '#fff' }}>
                                        <iframe
                                            src={`${previewPdf.pdfUrl}#toolbar=0`}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 'none' }}
                                            title="PDF Preview"
                                        />
                                    </div>
                                    <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                                        Preview Mode - Download for full offline access.
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionPage;

