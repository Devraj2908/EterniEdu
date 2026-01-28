import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Book, Code, Award, Zap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';


const Dashboard = () => {
    const { userGrade } = useAuth();

    const allCards = [
        { title: 'Class 10th', icon: <Book size={40} />, path: '/section/10th', color: '#ff6b6b', grade: '10th' },
        { title: 'Class 11th', icon: <Book size={40} />, path: '/section/11th', color: '#4ecdc4', grade: '11th' },
        { title: 'Class 12th', icon: <Book size={40} />, path: '/section/12th', color: '#45b7d1', grade: '12th' },
        { title: 'NEET Prep', icon: <Award size={40} />, path: '/section/neet', color: '#96ceb4', grade: 'neet' },
        { title: 'JEE Prep', icon: <Zap size={40} />, path: '/section/jee', color: '#ffeead', grade: 'jee' },
        { title: 'CET Prep', icon: <Zap size={40} />, path: '/section/cet', color: '#ffcc5c', grade: 'cet' },
        { title: 'Programming', icon: <Code size={40} />, path: '/programming', color: '#ff9a9e', fullWidth: true, grade: 'programming' },
    ];

    // Filter cards: show only the one matching userGrade
    const cards = allCards.filter(card => card.grade === userGrade);

    return (
        <div className="container" style={{ padding: '4rem 20px' }}>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">Your Learning Dashboard</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '800px' }}>
                    Welcome back, Student. Select a course to continue your journey.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                gridColumn: card.fullWidth ? '1 / -1' : 'auto',
                                background: 'var(--color-primary-light)',
                                borderRadius: '12px',
                                padding: '2rem',
                                border: '1px solid rgba(136, 146, 176, 0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <Link to={card.path} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></Link>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: `${card.color}20`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: card.color
                            }}>
                                {card.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{card.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                Comprehensive materials, video lectures, and practice tests.
                            </p>
                            <span className="text-accent" style={{ marginTop: '1.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                Start Learning &rarr;
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Dashboard;
