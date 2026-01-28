import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ArrowRight, Sparkles, Zap } from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: <BookOpen size={32} />,
            title: "Expert Curriculum",
            desc: "Courses designed by subject matter experts to align with latest board patterns."
        },
        {
            icon: <Users size={32} />,
            title: "Mentorship",
            desc: "Personalized guidance from educators who have helped thousands succeed."
        },
        {
            icon: <Award size={32} />,
            title: "Proven Metrics",
            desc: "Consistently delivering 95%+ success rate in board and entrance exams."
        }
    ];

    const courses = [
        { name: "Class 10th", tag: "Board Foundation" },
        { name: "Class 12th", tag: "Advanced Board" },
        { name: "NEET / JEE", tag: "Entrance Prep" },
        { name: "Programming", tag: "Skill Development" }
    ];

    return (
        <div style={{ background: 'var(--bg-primary)', overflow: 'hidden' }}>

            {/* Hero Section */}
            <section className="section" style={{ paddingTop: '10rem', position: 'relative' }}>
                {/* Background Glows */}
                <div style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-50px',
                    width: '400px',
                    height: '400px',
                    background: 'var(--accent-gold-glow)',
                    filter: 'blur(120px)',
                    borderRadius: 'var(--radius-full)',
                    zIndex: 0
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                borderRadius: 'var(--radius-full)',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--accent-gold)',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                marginBottom: '2rem'
                            }}
                        >
                            <Sparkles size={16} />
                            <span>The Future of Learning is Here</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.02em',
                                marginBottom: '1.5rem'
                            }}
                        >
                            Elevate Your <span className="text-gradient-gold">Academic</span> <br />
                            Potential with EterniEdu
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontSize: 'clamp(1rem, 4vw, 1.25rem)',
                                color: 'var(--text-secondary)',
                                marginBottom: '3rem',
                                maxWidth: '700px',
                                margin: '0 auto 3rem'
                            }}
                        >
                            Master 10th, 12th, NEET, JEE, and Programming with the most
                            comprehensive and structured digital learning platform.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Link to="/register" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Start Free Trial <ArrowRight size={20} />
                            </Link>
                            <Link to="/login" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Student Login
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Courses Marquee/Grid */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4" style={{ gap: '1rem' }}>
                        {courses.map((course, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass"
                                style={{
                                    padding: '1.5rem',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    textAlign: 'center'
                                }}
                            >
                                <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>{course.tag}</span>
                                <h4 style={{ fontSize: '1.25rem' }}>{course.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>Engineered for <span className="text-gradient-gold">Excellence</span></h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Everything you need to stay ahead of the curve.</p>
                    </div>

                    <div className="grid grid-cols-1 lg-grid-cols-3" style={{ gap: '2rem' }}>
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-morphism"
                                style={{
                                    padding: '3rem 2rem',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    transition: 'var(--transition)',
                                    cursor: 'default'
                                }}
                                whileHover={{ y: -10, borderColor: 'var(--accent-gold)' }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'var(--glass-bg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-gold)',
                                    boxShadow: '0 0 20px var(--accent-gold-glow)'
                                }}>
                                    {f.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem' }}>{f.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    left: '-50px',
                    width: '300px',
                    height: '300px',
                    background: 'var(--accent-gold-glow)',
                    filter: 'blur(100px)',
                    zIndex: 0
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="glass" style={{
                        padding: '4rem 2rem',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center',
                        border: '1px solid var(--accent-gold)'
                    }}>
                        <Zap size={48} style={{ color: 'var(--accent-gold)', marginBottom: '2rem' }} />
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Transform Your <br /><span className="text-gradient-gold">Academic Future?</span></h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                            Join 10,000+ students who are already using EterniEdu to achieve their goals.
                        </p>
                        <Link to="/register" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                            Join EterniEdu Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Simple Footer Text */}
            <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
                <div className="container">
                    <p style={{ color: 'var(--text-muted)' }}>&copy; 2026 EterniEdu. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
