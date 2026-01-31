import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Download, Share2, CheckCircle2, Clock, Star } from 'lucide-react';

const notesData = {
    '10th': {
        'gravitation-full': {
            title: 'Chapter 1: Gravitation - Comprehensive Notes',
            desc: 'Deep dive into Newtonian physics and planetary motion.',
            lastUpdated: 'Jan 31, 2026',
            sections: [
                {
                    heading: '1. Introduction to Gravitation',
                    content: 'Gravitation is a universal force of attraction between all matter. It was discovery by Sir Isaac Newton when he observed an apple falling from a tree. This force keeps the planets in orbit around the Sun and the Moon around the Earth.'
                },
                {
                    heading: "2. Kepler's Laws of Planetary Motion",
                    content: 'Johannes Kepler discovered three laws that describe how planets move:',
                    points: [
                        'First Law (Law of Orbits): Every planet moves in an elliptical orbit with the Sun at one of the two foci.',
                        'Second Law (Law of Areas): A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time.',
                        'Third Law (Law of Periods): The square of the orbital period (T) of a planet is directly proportional to the cube of the semi-major axis (r) of its orbit. (T² ∝ r³)'
                    ]
                },
                {
                    heading: "3. Newton's Universal Law of Gravitation",
                    content: 'Newton stated that every object in the universe attracts every other object with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.',
                    formula: 'F = G × (m₁ × m₂) / r²',
                    info: 'Where G is the Universal Gravitational Constant: 6.67 × 10⁻¹¹ Nm²/kg².'
                },
                {
                    heading: '4. Acceleration due to Gravity (g)',
                    content: 'The Earth exerts a gravitational force on objects near it. This force causes acceleration, known as acceleration due to gravity.',
                    points: [
                        'Formula: g = GM / R²',
                        'Average value on Earth surface: 9.8 m/s²',
                        'Variation with Latitude: g is highest at the poles and lowest at the equator.',
                        'Variation with Altitude: g decreases as we go higher above Earth surface.',
                        'Variation with Depth: g decreases as we go deeper into the Earth, becoming zero at the center.'
                    ]
                },
                {
                    heading: '5. Free Fall',
                    content: 'When an object moves under the influence of the force of gravity alone, it is said to be in free fall.',
                    points: [
                        'Initial velocity (u) is zero.',
                        'Acceleration (a) is equal to g.',
                        'Equations of motion apply: v = gt, s = ½gt², v² = 2gs.'
                    ]
                },
                {
                    heading: '6. Escape Velocity',
                    content: 'The minimum velocity required for an object to break free from Earth’s gravitational pull and never return.',
                    formula: 'vₑₛ꜀ = √(2GM / R) = √(2gR)',
                    info: 'For Earth, escape velocity is approximately 11.2 km/s.'
                }
            ]
        },
        'gravitation-short': {
            title: 'Chapter 1: Gravitation - Quick Revision',
            desc: 'Essential formulas and laws for last-minute preparation.',
            lastUpdated: 'Jan 31, 2026',
            sections: [
                {
                    heading: 'Key Formulas',
                    points: [
                        'Gravitational Force: F = G m₁m₂ / r²',
                        'Acceleration due to Gravity: g = GM / R²',
                        'Kepler’s 3rd Law: T² / r³ = Constant',
                        'Escape Velocity: v = 11.2 km/s (Earth)',
                        'Weight: W = mg'
                    ]
                },
                {
                    heading: 'Critical Concepts',
                    points: [
                        'g values: Poles (max), Equator (min), Center (zero).',
                        'Mass: Constant everywhere (Scalar).',
                        'Weight: Changes with location (Vector).',
                        'Free Fall: Only gravity acts, air resistance is ignored.'
                    ]
                }
            ]
        }
    }
};

const LiveNotes = () => {
    const { grade, topic } = useParams();
    const note = notesData[grade]?.[topic];

    if (!note) {
        return (
            <div style={{ padding: '150px 20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <h1>Note Not Found</h1>
                <p>We are currently uploading this module.</p>
                <Link to="/dashboard" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Dashboard</Link>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '120px', paddingBottom: '5rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <Link to={`/section/${grade}`} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    fontSize: '0.9rem'
                }}>
                    <ArrowLeft size={16} /> Back to Course
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <header style={{ marginBottom: '4rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                            <BookOpen size={20} />
                            <span style={{ fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>EterniEdu Certified Resource</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>{note.title}</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>{note.desc}</p>

                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                <Clock size={16} /> Updated: {note.lastUpdated}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} /> Authors: EterniEdu Academic Team
                            </div>
                        </div>
                    </header>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {note.sections.map((section, idx) => (
                            <section key={idx} className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>{section.heading}</h2>
                                {section.content && <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>{section.content}</p>}

                                {section.points && (
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {section.points.map((point, pIdx) => (
                                            <li key={pIdx} style={{ display: 'flex', gap: '12px', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                                                <Star size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '4px' }} />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.formula && (
                                    <div style={{
                                        margin: '2rem 0',
                                        padding: '2rem',
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: 'var(--radius-md)',
                                        textAlign: 'center',
                                        border: '1px solid var(--accent-gold)',
                                        fontFamily: 'monospace',
                                        fontSize: '1.5rem',
                                        color: 'var(--accent-gold)'
                                    }}>
                                        {section.formula}
                                    </div>
                                )}

                                {section.info && <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{section.info}</p>}
                            </section>
                        ))}
                    </div>

                    <div className="glass-morphism" style={{ marginTop: '5rem', padding: '3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Take these notes with you</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>You can print this page to PDF for offline study, or share it with your study group.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button className="btn btn-primary" onClick={() => window.print()} style={{ gap: '8px' }}>
                                <Download size={18} /> Print to PDF
                            </button>
                            <button className="btn btn-outline" style={{ gap: '8px' }}>
                                <Share2 size={18} /> Share Resource
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LiveNotes;
