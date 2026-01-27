import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Globe } from 'lucide-react';


const Programming = () => {
    const courses = [
        { name: 'Python for Beginners', icon: <Terminal size={24} />, level: 'Beginner' },
        { name: 'Web Development (MERN)', icon: <Globe size={24} />, level: 'Intermediate' },
        { name: 'Data Structures & Algo', icon: <Code size={24} />, level: 'Advanced' },
        { name: 'Machine Learning', icon: <Cpu size={24} />, level: 'Advanced' },
    ];

    return (
        <div className="container" style={{ padding: '4rem 20px' }}>


            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="section-title">Programming School</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    {courses.map((course) => (
                        <div key={course.name} style={{ background: 'var(--color-primary-light)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(100, 255, 218, 0.2)' }}>
                            <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{course.icon}</div>
                            <h3 style={{ marginBottom: '0.5rem' }}>{course.name}</h3>
                            <span style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>{course.level}</span>
                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>Start Coding</button>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Programming;
