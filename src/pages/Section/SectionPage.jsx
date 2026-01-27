import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/Shared/SEO';

const SectionPage = () => {
    const { id } = useParams();

    const sectionData = {
        '10th': { title: 'Class 10th', desc: 'Board exam preparation, Science, Maths, and English.' },
        '11th': { title: 'Class 11th', desc: 'Foundation for competitive exams. Physics, Chemistry, Biology/Maths.' },
        '12th': { title: 'Class 12th', desc: 'Advanced concepts and final school year preparation.' },
        'neet': { title: 'NEET Preparation', desc: 'Medical entrance exam specialized coaching.' },
        'jee': { title: 'JEE Preparation', desc: 'Engineering entrance exam specialized coaching.' },
        'cet': { title: 'CET Preparation', desc: 'State level common entrance test preparation.' },
    };

    const data = sectionData[id] || { title: 'Course', desc: 'Course material' };

    return (
        <div className="container" style={{ padding: '4rem 20px' }}>
            <SEO title={data.title} description={data.desc} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="section-title">{data.title}</h1>
                <p className="text-xl text-gray-400 mb-8">{data.desc}</p>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div style={{ background: 'var(--color-primary-light)', padding: '2rem', borderRadius: '8px' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Video Lectures</h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>High-quality video content coming soon.</p>
                    </div>
                    <div style={{ background: 'var(--color-primary-light)', padding: '2rem', borderRadius: '8px' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Study Material</h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>Downloadable PDF notes and assignments.</p>
                    </div>
                    <div style={{ background: 'var(--color-primary-light)', padding: '2rem', borderRadius: '8px' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Mock Tests</h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>Practice with real exam-like questions.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionPage;
