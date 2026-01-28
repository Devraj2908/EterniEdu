import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, FileText, Layout, ArrowLeft, Clock, BookOpen, Lock } from 'lucide-react';

const SectionPage = () => {
    const { id } = useParams();

    const sectionData = {
        '10th': { title: 'Class 10th Mastery', desc: 'Comprehensive board exam preparation covering Science, Maths, and Social Studies.' },
        '11th': { title: 'Class 11th Foundation', desc: 'Building strong foundations for competitive exams in Physics, Chemistry, and Mathematics.' },
        '12th': { title: 'Class 12th Advanced', desc: 'Mastering advanced concepts for final board exams and future academic pursuits.' },
        'neet': { title: 'NEET Excellence', desc: 'Specialized medical entrance coaching with deep focus on Biology, Physics, and Chemistry.' },
        'jee': { title: 'JEE Advanced Prep', desc: 'Intensive engineering entrance training for top-tier technical institutions.' },
        'cet': { title: 'CET Success Path', desc: 'Focused preparation for state-level common entrance tests and public service bases.' },
    };

    const data = sectionData[id] || { title: 'Course Track', desc: 'Your personalized learning path.' };

    const modules = [
        { title: "Video Lectures", icon: <Play size={24} />, count: "45+ Videos", status: "Coming Soon" },
        { title: "Study Material", icon: <FileText size={24} />, count: "120+ PDFs", status: "Coming Soon" },
        { title: "Mock Tests", icon: <Layout size={24} />, count: "15 Tests", status: "Coming Soon" }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '120px', paddingBottom: '5rem' }}>
            <div className="container">
                <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Back to Dashboard
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div style={{ marginBottom: '4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                            <BookOpen size={20} />
                            <span style={{ fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Enrolled Track</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>{data.title}</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.8' }}>
                            {data.desc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md-grid-cols-3" style={{ gap: '2rem' }}>
                        {modules.map((module, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-morphism"
                                style={{
                                    padding: '2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: 'var(--radius-md)',
                                    background: 'var(--bg-tertiary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-gold)',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    {module.icon}
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{module.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                        <Clock size={14} /> {module.count}
                                    </div>
                                </div>

                                <div style={{
                                    marginTop: 'auto',
                                    padding: '0.75rem',
                                    background: 'var(--glass-bg)',
                                    borderRadius: 'var(--radius-sm)',
                                    textAlign: 'center',
                                    color: 'var(--text-muted)',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    <Lock size={14} /> {module.status}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="glass" style={{ marginTop: '5rem', padding: '3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Continuously Updating</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                            We are currently uploading new batches of high-quality lectures and study materials.
                            Check back soon for the full experience.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionPage;
