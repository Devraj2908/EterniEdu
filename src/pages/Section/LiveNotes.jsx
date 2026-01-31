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
            heading: 'Chapter 1: Gravitation - Solved Numericals (Detailed)',
            title: 'Gravitation: Step-by-Step Problem Solving',
            desc: 'A vast collection of numericals solved with the "Given-Formula-Solution" approach to ensure maximum marks.',
            lastUpdated: 'Jan 31, 2026',
            sections: [
                {
                    heading: '1. Newton’s Universal Law of Gravitation',
                    content: 'Focus: F = G m₁m₂ / r²',
                    points: [
                        'Problem: Calculate the gravitational force between Earth (M = 6 × 10²⁴ kg) and the Moon (m = 7.4 × 10²² kg). Distance between them is r = 3.84 × 10⁵ km.',
                        'Step 1 (Given): m₁ = 6 × 10²⁴ kg, m₂ = 7.4 × 10²² kg, r = 3.84 × 10⁸ m (converted from km), G = 6.67 × 10⁻¹¹ Nm²/kg².',
                        'Step 2 (Formula): F = G m₁m₂ / r²',
                        'Step 3 (Calculation): F = (6.67 × 10⁻¹¹ × 6 × 10²⁴ × 7.4 × 10²²) / (3.84 × 10⁸)²',
                        'Step 4 (Simplification): F = (296.148 × 10³⁵) / (14.7456 × 10¹⁶) = 20.08 × 10¹⁹ N.',
                        'Final Answer: F ≈ 2 × 10²⁰ N.'
                    ]
                },
                {
                    heading: '2. Acceleration due to Gravity on Different Planets',
                    content: 'Focus: g = GM / R²',
                    points: [
                        'Problem: A planet has mass twice that of Earth and radius thrice that of Earth. If g on Earth is 9.8 m/s², find g on the planet.',
                        'Step 1 (Given): M_p = 2M_e, R_p = 3R_e, g_e = 9.8 m/s².',
                        'Step 2 (Formula): g = GM / R²',
                        'Step 3 (Derivation): g_p / g_e = (G M_p / R_p²) / (G M_e / R_e²) = (M_p / M_e) × (R_e / R_p)²',
                        'Step 4 (Substitution): g_p / g_e = (2M_e / M_e) × (R_e / 3R_e)² = 2 × (1/9) = 2/9.',
                        'Step 5 (Calculation): g_p = (2/9) × 9.8 = 19.6 / 9 = 2.17 m/s².',
                        'Final Answer: g_planet = 2.17 m/s².'
                    ]
                },
                {
                    heading: '3. Variation of g with Height',
                    content: 'Focus: g_h = GM / (R+h)²',
                    points: [
                        'Problem: At what height above the Earth’s surface does the value of g become 1/4th of its value on the surface? (Radius of Earth R = 6400 km)',
                        'Step 1 (Given): g_h = g/4, R = 6400 km.',
                        'Step 2 (Formula): g ∝ 1/r², so g_h / g = R² / (R+h)²',
                        'Step 3 (Calculation): 1/4 = R² / (R+h)²',
                        'Step 4 (Square Root): 1/2 = R / (R+h)',
                        'Step 5 (Cross Multiplication): R+h = 2R => h = R.',
                        'Final Answer: Height h = 6400 km.'
                    ]
                },
                {
                    heading: '4. Motion Under Gravity (Free Fall)',
                    content: 'Focus: s = ½gt², v = gt, v² = 2gs',
                    points: [
                        'Problem: An iron ball of mass 3 kg is released from a height of 125 m and falls freely to the ground. Find the time taken and velocity on reaching the ground (take g = 10 m/s²).',
                        'Step 1 (Given): u = 0, s = 125 m, g = 10 m/s².',
                        'Step 2 (Finding Time): s = ut + ½gt² => 125 = 0 + ½(10)t² => 125 = 5t² => t² = 25.',
                        'Step 3 (Result t): t = 5 seconds.',
                        'Step 4 (Finding Velocity): v = u + gt => v = 0 + 10(5) = 50 m/s.',
                        'Final Answer: Time = 5s, Final Velocity = 50 m/s.'
                    ]
                },
                {
                    heading: '5. Escape Velocity Calculation',
                    content: 'Focus: v_esc = √(2GM/R)',
                    points: [
                        'Problem: Calculate the escape velocity on the Moon. (Mass of Moon = 7.34 × 10²² kg, Radius = 1.74 × 10⁶ m)',
                        'Step 1 (Given): M = 7.34 × 10²² kg, R = 1.74 × 10⁶ m, G = 6.67 × 10⁻¹¹ Nm²/kg².',
                        'Step 2 (Formula): v_esc = √(2GM/R)',
                        'Step 3 (Calculation): v_esc = √[(2 × 6.67 × 10⁻¹¹ × 7.34 × 10²²) / (1.74 × 10⁶)]',
                        'Step 4 (Simplification): v_esc = √[97.935 × 10¹¹ / 1.74 × 10⁶] = √[5.628 × 10⁶] = 2.37 × 10³ m/s.',
                        'Final Answer: Escape Velocity ≈ 2.37 km/s.'
                    ]
                }
            ]
        },
        'gravitation-subjective': {
            title: 'Chapter 1: Gravitation - Subjective Question Bank',
            desc: 'A curated list of 2-mark, 3-mark, and 4-mark questions essential for board examinations.',
            lastUpdated: 'Jan 31, 2026',
            sections: [
                {
                    heading: 'Section 1: 2-Mark Short Answer Questions',
                    points: [
                        'Q1: Define Centripetal Force. Give one example.\nAnswer: The force which acts on any body moving in a circle and is directed towards the center of the circle is called centripetal force. Example: The gravitational force of the Earth acting on the Moon.',
                        'Q2: Why is the value of g zero at the center of the Earth?\nAnswer: As we go towards the center of the Earth, the mass of the Earth that attracts the object effectively decreases. Exactly at the center, the surrounding mass pulls in all directions equally, cancelling the net force, hence g = 0.',
                        'Q3: State the difference between Mass and Weight.\nAnswer: Mass is the quantity of matter in an object (constant everywhere), whereas Weight is the force with which Earth attracts the object (changes with location).',
                        'Q4: What is Free Fall?\nAnswer: When an object moves towards the Earth under the influence of Earth\'s gravitational force alone, with no other forces acting on it, it is said to be in free fall.',
                        'Q5: Write the SI unit and value of Universal Gravitational Constant (G).\nAnswer: SI unit: Nm²/kg². Value: 6.67 × 10⁻¹¹ Nm²/kg².'
                    ]
                },
                {
                    heading: 'Section 2: 3-Mark Brief Answer Questions',
                    points: [
                        'Q1: State Kepler’s three laws of planetary motion.\nAnswer: 1. Law of Orbits: Planetary orbits are ellipses with the Sun at one focus. 2. Law of Areas: Line joining planet and Sun sweeps equal areas in equal intervals of time. 3. Law of Periods: T² ∝ r³.',
                        'Q2: Explain how the value of g changes with altitude and depth.\nAnswer: Altitude: As we go higher, the distance from Earth\'s center increases, so g decreases (g ∝ 1/R²). Depth: As we go deeper, the mass of Earth responsible for gravity decreases faster than the radius decrease, resulting in an overall decrease in g.',
                        'Q3: Prove that the weight of an object on the Moon is 1/6th of its weight on the Earth.\nAnswer: By using the formula W = GMm/R² and substituting Moon\'s mass (~1/100 of Earth) and radius (~1/4 of Earth), we find that Moon\'s gravity is approx 1/6th of Earth\'s, thus W_moon = 1/6 W_earth.',
                        'Q4: What is Gravitational Potential Energy? Write its formula for an object at height h.\nAnswer: It is the energy stored in an object due to its position in a gravitational field. Formula: P.E. = -GMm / (R+h). It is measured relative to infinity where it is zero.'
                    ]
                },
                {
                    heading: 'Section 3: 4-Mark Long Answer Questions',
                    points: [
                        'Q1: Derive the formula for Escape Velocity on Earth.\nAnswer: At surface, Total Energy = K.E + P.E = ½mv² - GMm/R. To escape to infinity (where E=0), initial energy must be ≥ 0. Thus, ½mv² = GMm/R. Solving for v gives v_esc = √(2GM/R). Substituting g = GM/R², we get v_esc = √(2gR).',
                        'Q2: Explain Newton’s Universal Law of Gravitation in detail and explain its importance.\nAnswer: Law: F = Gm₁m₂/r². Every particle attracts every other particle. Importance: 1. It explains the force that binds us to Earth. 2. It explains the motion of planets around the Sun. 3. It explains the cause of tides due to the Moon and Sun.',
                        'Q3: Elaborate on the experimental verification of Newton’s Law by Henry Cavendish.\nAnswer: Cavendish used a torsion balance with small and large lead spheres. By measuring the extremely small twisting force between them, he was able to calculate the value of G, which then allowed for the calculation of the Earth\'s mass and density.'
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
