import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Code, Cpu, Globe, ArrowLeft, Star, ChevronRight } from 'lucide-react';

const Programming = () => {
    const courses = [
        { name: 'Python for Beginners', icon: <Terminal size={24} />, level: 'Beginner', duration: '20 Hrs' },
        { name: 'Fullstack Web (MERN)', icon: <Globe size={24} />, level: 'Intermediate', duration: '45 Hrs' },
        { name: 'Data Structures & Algo', icon: <Code size={24} />, level: 'Advanced', duration: '30 Hrs' },
        { name: 'Machine Learning', icon: <Cpu size={24} />, level: 'Expert', duration: '40 Hrs' },
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                            <Code size={24} />
                            <span style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem' }}>Professional School</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>Master <span className="text-gradient-gold">Modern</span> Code</h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                            Go beyond board exams. Build real-world skills with our industry-led programming curriculum.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-2" style={{ gap: '2rem' }}>
                        {courses.map((course, i) => (
                            <motion.div
                                key={course.name}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass"
                                style={{
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    display: 'flex',
                                    gap: '2rem',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    border: '1px solid var(--glass-border)'
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: 'var(--radius-md)',
                                    background: 'var(--bg-tertiary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-gold)',
                                    flexShrink: 0
                                }}>
                                    {course.icon}
                                </div>
                                <div style={{ flex: 1, minWidth: '200px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-gold)', background: 'var(--accent-gold-glow)', padding: '2px 8px', borderRadius: '4px' }}>
                                            {course.level}
                                        </span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{course.duration}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{course.name}</h3>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button
                                            className="btn btn-outline"
                                            style={{ flex: 1, fontSize: '0.85rem' }}
                                            onClick={() => alert('The specific curriculum for ' + course.name + ' is being generated. Check back in 24 hours!')}
                                        >
                                            Curriculum
                                        </button>
                                        <button className="btn btn-primary" style={{ flex: 1.5, fontSize: '0.85rem' }}>
                                            Start Learning
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div
                        className="glass-morphism"
                        style={{
                            marginTop: '5rem',
                            padding: '3rem',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '2rem'
                        }}
                    >
                        <div style={{ maxWidth: '500px' }}>
                            <h2 style={{ marginBottom: '1rem' }}>Developer Certification</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Earn industry-recognized certificates for every module you complete.
                                Build your portfolio while you study.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Star style={{ color: 'var(--accent-gold)' }} size={32} />
                            <Star style={{ color: 'var(--accent-gold)' }} size={32} />
                            <Star style={{ color: 'var(--accent-gold)' }} size={32} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Programming;
