import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Download, Share2, CheckCircle2, Clock, Star } from 'lucide-react';

const notesData = {
    '10th': {
        'gravitation-full': {
            title: 'Chapter 1: Gravitation - Comprehensive Notes',
            desc: 'A complete guide to Gravitation, Circular Motion, Kepler’s Laws, and Escape Velocity as per the 10th Board Syllabus.',
            lastUpdated: 'Jan 31, 2026',
            sections: [
                {
                    heading: '1. Gravitation and Circular Motion',
                    content: 'Gravitation is a universal force that acts between any two objects in the universe. Isaac Newton discovered it when he realized that the same force keeps the moon in orbit and makes objects fall to the ground.',
                    points: [
                        'Centripetal Force: A force that acts on any body moving in a circle and is directed toward the center around which the body is moving.',
                        'The moon goes around the earth because of the centripetal force provided by the gravitational attraction of the earth.'
                    ]
                },
                {
                    heading: "2. Kepler's Laws of Planetary Motion",
                    content: 'Johannes Kepler analyzed planetary positions and established three critical laws:',
                    points: [
                        'Law of Orbits: The orbit of a planet is an ellipse with the Sun at one of the foci.',
                        'Law of Areas: The line joining the planet and the Sun sweeps equal areas in equal intervals of time. (Planet moves faster near the Sun).',
                        'Law of Periods: The square of its period of revolution around the Sun (T) is directly proportional to the cube of the mean distance of a planet from the Sun (r). (T² ∝ r³ or T²/r³ = Constant K)'
                    ]
                },
                {
                    heading: "3. Newton's Universal Law of Gravitation",
                    content: 'According to this law, every object in the universe attracts every other object with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.',
                    formula: 'F = G × (m₁ × m₂) / d²',
                    info: 'G is the Universal Gravitational Constant. G = 6.67 × 10⁻¹¹ Nm²/kg². Its value was first measured by Henry Cavendish.'
                },
                {
                    heading: "4. Earth's Gravitational Force and Acceleration (g)",
                    content: 'The earth attracts every object near it towards its center. The acceleration produced by this force is called acceleration due to gravity.',
                    points: [
                        'Formula: g = GM / R²',
                        'Average value: 9.77 m/s² (usually taken as 9.8 m/s²).',
                        'Variation along Surface: Highest at Poles (9.83 m/s²) and lowest at Equator (9.78 m/s²) because Earth is not a perfect sphere.',
                        'Variation with Height: As distance from Earth center increases, g decreases.',
                        'Variation with Depth: Inside the earth, g decreases and becomes zero at the center.'
                    ]
                },
                {
                    heading: '5. Mass and Weight',
                    content: 'There is a fundamental difference between an object’s mass and its weight.',
                    points: [
                        'Mass: Amount of matter present in the object. It is a scalar quantity and remains constant everywhere in the universe.',
                        'Weight: The force with which the earth attracts the object (W = mg). It is a vector quantity and changes depending on the value of g at that location.',
                        'Relation: Weight on Moon = 1/6 × Weight on Earth.'
                    ]
                },
                {
                    heading: '6. Free Fall and Motion',
                    content: 'An object falling solely under the influence of the Earth’s gravity is in free fall.',
                    points: [
                        'During free fall, initial velocity (u) = 0.',
                        'Acceleration (a) = g (9.8 m/s²).',
                        'Equations for vertical motion: v = gt, s = ½gt², v² = 2gs.',
                        'For objects thrown upwards: a = -g (retardation).'
                    ]
                },
                {
                    heading: '7. Gravitational Potential Energy (G.P.E)',
                    content: 'The energy stored in an object because of its position relative to the Earth.',
                    points: [
                        'For small heights: P.E = mgh.',
                        'At large distances (r): P.E = -GMm / R+h.',
                        'At infinity, G.P.E is zero. This is why it is negative at distances closer than infinity.'
                    ]
                },
                {
                    heading: '8. Escape Velocity',
                    content: 'The minimum velocity with which a body must be projected from the Earth’s surface so that it escapes the Earth’s gravitational pull.',
                    formula: 'v_esc = √(2GM / R) = √(2gR)',
                    info: 'For Earth, v_esc = 11.2 km/s. Spacecraft like the Moon missions or Mars missions must exceed this speed to leave Earth.'
                }
            ]
        },
        'gravitation-numericals': {
            heading: 'Chapter 1: Gravitation - Solved Numericals',
            title: 'Gravitation: Numerical Problem Set',
            desc: 'Step-by-step solutions to board-level and competitive numerical problems.',
            lastUpdated: 'Jan 31, 2026',
            sections: [
                {
                    heading: 'Section 1: Force and G Calculation',
                    content: 'Using Newton’s Law of Gravitation: F = Gm₁m₂/r²',
                    points: [
                        'Problem 1: Calculate the force between two bodies of 50kg and 100kg kept 2m apart.',
                        'Solution: F = (6.67e-11 * 50 * 100) / 2² = (3.335e-7) / 4 = 8.33 × 10⁻⁸ N.'
                    ]
                },
                {
                    heading: 'Section 2: Acceleration due to Gravity (g)',
                    content: 'Using g = GM/R²',
                    points: [
                        'Problem: If mass of a planet is 2 times Earth and radius is 3 times, find g on that planet.',
                        'Solution: g_p = G(2M)/(3R)² = 2/9 * (GM/R²) = 2/9 * 9.8 = 2.17 m/s².'
                    ]
                },
                {
                    heading: 'Section 3: Free Fall Equations',
                    content: 'Using v=gt, s=½gt², v²=2gs',
                    points: [
                        'Problem: A ball is dropped from a height of 125m. Find the time taken to reach the ground.',
                        'Solution: s = ½gt² => 125 = ½ * 10 * t² => 125 = 5t² => t² = 25 => t = 5 seconds.'
                    ]
                },
                {
                    heading: 'Section 4: Escape Velocity & Energy',
                    content: 'Using v = √(2gR)',
                    points: [
                        'Problem: Calculate escape velocity for a planet with g=20m/s² and R=5000km.',
                        'Solution: v = √(2 * 20 * 5,000,000) = √(200,000,000) = 14,142 m/s = 14.1 km/s.'
                    ]
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
