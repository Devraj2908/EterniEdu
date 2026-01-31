import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Book, Code, Award, Zap, ArrowRight, Clock, Star, Play, FileText, Download } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { gradesData } from '../../data/gradesData';

const Dashboard = () => {
    const { currentUser, userGrade } = useAuth();

    const allCards = [
        { title: 'Class 10th', icon: <Book size={32} />, path: '/section/10th', grade: '10th', desc: 'Board Exam Preparation' },
        { title: 'Class 11th', icon: <Book size={32} />, path: '/section/11th', grade: '11th', desc: 'Higher Secondary Foundation' },
        { title: 'Class 12th', icon: <Book size={32} />, path: '/section/12th', grade: '12th', desc: 'Board Exam & Entrance Base' },
        { title: 'NEET Prep', icon: <Award size={32} />, path: '/section/neet', grade: 'neet', desc: 'Medical Entrance Training' },
        { title: 'JEE Prep', icon: <Zap size={32} />, path: '/section/jee', grade: 'jee', desc: 'Engineering Entrance Excellence' },
        { title: 'CET Prep', icon: <Zap size={32} />, path: '/section/cet', grade: 'cet', desc: 'State Entrance Mastery' },
        { title: 'Programming', icon: <Code size={32} />, path: '/programming', grade: 'programming', desc: 'Modern Software Skills' },
    ];

    const cards = allCards.filter(card => card.grade === userGrade);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '100px', paddingBottom: '4rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div style={{ marginBottom: '4rem' }}>
                        <div style={{ color: 'var(--accent-gold)', fontWeight: '600', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
                            Student Hub
                        </div>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
                            Welcome back, <span className="text-gradient-gold">{currentUser?.name || 'Student'}</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                            Ready to continue your journey? You are currently enrolled in <strong>{userGrade?.toUpperCase()}</strong>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3" style={{ gap: '2rem' }}>
                        {/* Quick Action Card (Main Course) */}
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass"
                                style={{
                                    borderRadius: 'var(--radius-lg)',
                                    padding: '2.5rem',
                                    border: '1px solid var(--accent-gold)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '100px', height: '100px', background: 'var(--accent-gold-glow)', filter: 'blur(40px)', opacity: 0.4 }} />

                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: 'var(--radius-md)',
                                    background: 'var(--bg-tertiary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2rem',
                                    color: 'var(--accent-gold)',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    {card.icon}
                                </div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{card.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                    {card.desc}
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        <Clock size={14} /> 120+ Hrs
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        <Play size={14} /> 45 Videos
                                    </div>
                                </div>

                                <Link to={card.path} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Launch Classroom <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        ))}

                        {/* Stats / info card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="glass-morphism"
                            style={{
                                borderRadius: 'var(--radius-lg)',
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <Star style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Premium Status</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    You have full access to all lectures and study materials for your grade.
                                </p>
                            </div>
                            <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                                    <span>Course Progress</span>
                                    <span>0%</span>
                                </div>
                                <div style={{ height: '6px', background: 'var(--bg-primary)', borderRadius: '3px' }}>
                                    <div style={{ width: '0%', height: '100%', background: 'var(--accent-gold)', borderRadius: '3px' }} />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Recently Viewed / Recommended */}
                    <div style={{ marginTop: '5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Your Study Materials</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tailored for your current curriculum</p>
                            </div>
                            <Link to={`/section/${userGrade}`} style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                View All <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4" style={{ gap: '1.5rem' }}>
                            {gradesData[userGrade]?.resources.notes.slice(0, 4).map((note) => (
                                <motion.div
                                    key={note.id}
                                    whileHover={{ y: -5, borderColor: 'var(--accent-gold)' }}
                                    className="glass"
                                    style={{
                                        padding: '1.5rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--glass-border)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem'
                                    }}
                                >
                                    <div style={{
                                        height: '60px',
                                        width: '60px',
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: 'var(--radius-sm)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent-gold)'
                                    }}>
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{note.title}</h4>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Premium Copyrighted Note</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                                        <Link to={`/section/${userGrade}`} className="btn btn-outline" style={{ flex: 1, fontSize: '0.8rem', padding: '0.5rem', justifyContent: 'center' }}>
                                            View
                                        </Link>
                                        <button
                                            className="btn btn-primary"
                                            style={{ padding: '8px', minWidth: '40px', justifyContent: 'center' }}
                                            onClick={() => {
                                                if (note.pdfUrl && note.pdfUrl !== '#') {
                                                    window.open(note.pdfUrl, '_blank');
                                                } else {
                                                    alert('This specialized note is currently being finalized. It will be available for download very soon!');
                                                }
                                            }}
                                        >
                                            <Download size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            )) || (
                                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)' }}>
                                        No specific recommendations for your grade yet.
                                    </div>
                                )}
                        </div>
                    </div>

                    {/* Explore All Grades Section */}
                    <div style={{ marginTop: '6rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Explore <span className="text-gradient-gold">Academic Catalog</span></h2>
                            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                                Browse through our extensive library of copyrighted notes and expert-recommended books across all levels.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3" style={{ gap: '2rem' }}>
                            {Object.entries(gradesData).map(([key, grade], index) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="glass-morphism"
                                    style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}
                                >
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>{grade.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '3rem' }}>{grade.desc}</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                                                <span style={{ color: 'var(--text-muted)' }}>Copyrighted Notes</span>
                                                <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{grade.resources.notes.length} Files</span>
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                                {grade.resources.notes.slice(0, 3).map(note => (
                                                    <span key={note.id} style={{
                                                        fontSize: '0.7rem',
                                                        background: 'var(--bg-tertiary)',
                                                        padding: '2px 8px',
                                                        borderRadius: '4px',
                                                        color: 'var(--text-secondary)',
                                                        border: '1px solid var(--glass-border)'
                                                    }}>
                                                        {note.title.includes(': ') ? note.title.split(': ')[1] : note.title}
                                                    </span>
                                                ))}
                                                {grade.resources.notes.length > 3 && (
                                                    <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)' }}>+{grade.resources.notes.length - 3} more</span>
                                                )}
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                            <span style={{ color: 'var(--text-muted)' }}>Reference Books</span>
                                            <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{grade.resources.books.length} Suggested</span>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                                        <Link
                                            to={`/section/${key}`}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                color: userGrade === key ? 'var(--accent-gold)' : 'var(--text-muted)',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                cursor: userGrade === key ? 'pointer' : 'default',
                                                opacity: userGrade === key ? 1 : 0.5
                                            }}
                                            onClick={(e) => {
                                                if (userGrade !== key) e.preventDefault();
                                            }}
                                        >
                                            {userGrade === key ? 'Access My Content' : 'Locked (Grade Restriction)'} <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
