import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award } from 'lucide-react';


const Home = () => {
    return (
        <div style={{ background: 'var(--color-bg-body)', minHeight: '100vh' }}>


            {/* Hero Section */}
            <section style={{
                padding: '8rem 20px',
                textAlign: 'center',
                background: 'conic-gradient(from 90deg at 50% 50%, #f3f4f6 0%, #ffffff 50%, #f3f4f6 100%)'
            }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1', color: 'var(--color-text-main)' }}
                    >
                        Empowering Your <br />
                        <span className="text-accent">Educational Journey</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}
                    >
                        Master your board exams (10th, 12th) and crack competitive entrance tests (NEET, JEE, CET) with our premium, structured courses.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                    >
                        <Link to="/register" className="btn btn-solid" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                            Get Started
                        </Link>
                        <Link to="/login" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                            Student Login
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '6rem 20px', background: 'transparent' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', display: 'block', borderBottom: 'none' }}>Why Choose EterniEdu?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ color: 'var(--color-gold)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><BookOpen size={48} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Comprehensive Curriculum</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Meticulously crafted courses covering every syllabus detail for State and Central boards.</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ color: 'var(--color-gold)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><Users size={48} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Expert Faculty</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Learn from the best educators with years of experience in producing top rankers.</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ color: 'var(--color-gold)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><Award size={48} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Proven Results</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Our students consistently achieve top scores in board exams and competitive tests.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
