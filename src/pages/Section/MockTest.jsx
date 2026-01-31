import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock, Award, ChevronRight, ChevronLeft,
    RefreshCcw, Home, CheckCircle2, XCircle,
    HelpCircle, Timer, BarChart3, ShieldCheck
} from 'lucide-react';

const questionsData = {
    '10th': {
        'gravitation': [
            { id: 1, q: "Universal law of gravitation was discovered by:", options: ["Kepler", "Newton", "Galileo", "Einstein"], correct: 1 },
            { id: 2, q: "The value of Universal Gravitational Constant (G) is:", options: ["9.8 m/s²", "6.67 × 10⁻¹¹ Nm²/kg²", "6.67 × 10⁻¹⁰ Nm²/kg²", "1.6 × 10⁻¹⁹"], correct: 1 },
            { id: 3, q: "Kepler's first law states that the orbit of a planet is an:", options: ["Circle", "Ellipse", "Parabola", "Hyperbola"], correct: 1 },
            { id: 4, q: "According to Kepler's second law, a planet moves ______ when it is closer to the Sun.", options: ["Slower", "Faster", "At constant speed", "Backwards"], correct: 1 },
            { id: 5, q: "The relation between T and r in Kepler's third law is:", options: ["T ∝ r", "T² ∝ r²", "T² ∝ r³", "T³ ∝ r²"], correct: 2 },
            { id: 6, q: "If the distance between two objects is doubled, the gravitational force between them becomes:", options: ["Double", "Half", "One-fourth", "Four times"], correct: 2 },
            { id: 7, q: "The value of 'g' at the center of the Earth is:", options: ["9.8 m/s²", "Infinite", "Zero", "Negative"], correct: 2 },
            { id: 8, q: "Weight of an object is a _______ quantity.", options: ["Scalar", "Vector", "Fundamental", "Dimensionless"], correct: 1 },
            { id: 9, q: "An object is in 'Free Fall' when it moves under the influence of ______ alone.", options: ["Air resistance", "Gravity", "Magnetic force", "Friction"], correct: 1 },
            { id: 10, q: "The escape velocity on the Earth's surface is approximately:", options: ["1.12 km/s", "11.2 m/s", "11.2 km/s", "9.8 km/s"], correct: 2 },
            { id: 11, q: "The value of 'g' is highest at:", options: ["Equator", "Poles", "Center of Earth", "Moon"], correct: 1 },
            { id: 12, q: "The mass of an object ______ as it moves from Earth to Moon.", options: ["Increases", "Decreases", "Remains same", "Becomes zero"], correct: 2 },
            { id: 13, q: "The SI unit of Weight is:", options: ["Kilogram (kg)", "Newton (N)", "Pascal (Pa)", "Joule (J)"], correct: 1 },
            { id: 14, q: "When an object is thrown vertically upwards, its acceleration is:", options: ["+g", "-g", "Zero", "Infinite"], correct: 1 },
            { id: 15, q: "High and low tides in the sea are primarily due to the gravitational attraction of:", options: ["Sun", "Moon", "Mars", "Jupiter"], correct: 1 },
            { id: 16, q: "Gravitational Potential Energy at infinite distance from Earth is:", options: ["Maximum", "Zero", "Minimum", "Negative"], correct: 1 },
            { id: 17, q: "The centripetal force acts towards the ______ of the circular path.", options: ["Tangent", "Away from center", "Center", "Backwards"], correct: 2 },
            { id: 18, q: "Who measured the value of G for the first time?", options: ["Newton", "Kepler", "Henry Cavendish", "Copernicus"], correct: 2 },
            { id: 19, q: "If mass of one object is doubled, the gravitational force between two objects:", options: ["Doubles", "Halves", "Remains same", "Becomes zero"], correct: 0 },
            { id: 20, q: "Apparent weight of a person in a freely falling lift is:", options: ["Equal to mg", "Double", "Zero", "Half"], correct: 2 },
            { id: 21, q: "The force of gravity ______ as we move higher above the Earth's surface.", options: ["Increases", "Decreases", "Remains same", "Fluctuates"], correct: 1 },
            { id: 22, q: "Weight on Moon is approximately ______ of the weight on Earth.", options: ["1/2", "1/4", "1/6", "1/10"], correct: 2 },
            { id: 23, q: "The escape velocity formula is:", options: ["v = √(GM/R)", "v = √(2GM/R)", "v = GM/R²", "v = 2GM/R"], correct: 1 },
            { id: 24, q: "Gravity is a ______ force.", options: ["Repulsive", "Strong nuclear", "Attractive", "Magnetic"], correct: 2 },
            { id: 25, q: "A ball thrown up reaches maximum height in 3s. Total time of flight is:", options: ["3s", "4.5s", "6s", "9s"], correct: 2 }
        ]
    }
};

const MockTest = () => {
    const { grade, testId } = useParams();
    const navigate = useNavigate();
    const [step, setStep] = useState('start'); // start, quiz, result
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
    const [score, setScore] = useState(0);

    const questions = questionsData[grade]?.[testId] || [];

    useEffect(() => {
        let timer;
        if (step === 'quiz' && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0) {
            handleFinish();
        }
        return () => clearInterval(timer);
    }, [step, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleAnswer = (optionIndex) => {
        setAnswers({ ...answers, [currentQuestion]: optionIndex });
    };

    const handleFinish = () => {
        let finalScore = 0;
        questions.forEach((q, idx) => {
            if (answers[idx] === q.correct) finalScore++;
        });
        setScore(finalScore);
        setStep('result');
    };

    if (questions.length === 0) {
        return (
            <div style={{ padding: '150px 20px', textAlign: 'center' }}>
                <HelpCircle size={64} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
                <h2>Mock Test Not Found</h2>
                <Link to="/dashboard" className="btn btn-primary" style={{ marginTop: '2rem' }}>Return to Dashboard</Link>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '100px', paddingBottom: '5rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <AnimatePresence mode="wait">
                    {step === 'start' && (
                        <motion.div
                            key="start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="glass"
                            style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}
                        >
                            <Award size={64} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Gravitation Mega Mock Test</h1>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                                Challenge yourself with {questions.length} high-yield questions designed by EterniEdu experts.
                            </p>

                            <div className="grid grid-cols-1 md-grid-cols-3" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
                                <div style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                                    <Clock size={24} style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }} />
                                    <h4 style={{ margin: 0 }}>30 Minutes</h4>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Duration</span>
                                </div>
                                <div style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                                    <HelpCircle size={24} style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }} />
                                    <h4 style={{ margin: 0 }}>{questions.length} Items</h4>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Multiple Choice</span>
                                </div>
                                <div style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                                    <ShieldCheck size={24} style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }} />
                                    <h4 style={{ margin: 0 }}>Verified</h4>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Curriculum Based</span>
                                </div>
                            </div>

                            <button className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }} onClick={() => setStep('quiz')}>
                                Start Mock Test <ChevronRight size={20} />
                            </button>
                        </motion.div>
                    )}

                    {step === 'quiz' && (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Timer size={20} style={{ color: timeLeft < 300 ? 'var(--error)' : 'var(--accent-gold)' }} />
                                    <span style={{ fontSize: '1.2rem', fontWeight: '700', fontFamily: 'monospace' }}>{formatTime(timeLeft)}</span>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Progress: {currentQuestion + 1}/{questions.length}</span>
                                    <div style={{ width: '150px', height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', marginTop: '5px' }}>
                                        <div style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%`, height: '100%', background: 'var(--accent-gold)', borderRadius: '3px', transition: 'width 0.3s ease' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                                    {questions[currentQuestion].q}
                                </h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                                    {questions[currentQuestion].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(idx)}
                                            style={{
                                                padding: '1.25rem 2rem',
                                                borderRadius: 'var(--radius-md)',
                                                background: answers[currentQuestion] === idx ? 'rgba(212, 175, 55, 0.2)' : 'var(--bg-tertiary)',
                                                border: '1px solid',
                                                borderColor: answers[currentQuestion] === idx ? 'var(--accent-gold)' : 'var(--glass-border)',
                                                color: 'var(--text-primary)',
                                                textAlign: 'left',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                fontSize: '1.05rem'
                                            }}
                                        >
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: answers[currentQuestion] === idx ? 'var(--accent-gold)' : 'var(--bg-primary)',
                                                border: '1px solid var(--glass-border)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.8rem',
                                                color: answers[currentQuestion] === idx ? 'var(--bg-primary)' : 'var(--text-muted)'
                                            }}>
                                                {String.fromCharCode(65 + idx)}
                                            </div>
                                            {option}
                                        </button>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                                    <button
                                        className="btn btn-outline"
                                        disabled={currentQuestion === 0}
                                        onClick={() => setCurrentQuestion(prev => prev - 1)}
                                    >
                                        <ChevronLeft size={18} /> Previous
                                    </button>

                                    {currentQuestion === questions.length - 1 ? (
                                        <button className="btn btn-primary" onClick={handleFinish}>
                                            Finish Test
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-primary"
                                            disabled={answers[currentQuestion] === undefined}
                                            onClick={() => setCurrentQuestion(prev => prev + 1)}
                                        >
                                            Next <ChevronRight size={18} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 'result' && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass"
                            style={{ padding: '4rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}
                        >
                            <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 3rem' }}>
                                <svg width="200" height="200" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--bg-tertiary)" strokeWidth="10" />
                                    <circle
                                        cx="50" cy="50" r="45" fill="none"
                                        stroke="var(--accent-gold)" strokeWidth="10"
                                        strokeDasharray={`${(score / questions.length) * 282.7} 282.7`}
                                        strokeDashoffset="0"
                                        strokeLinecap="round"
                                        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dasharray 1s ease' }}
                                    />
                                </svg>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                    <h2 style={{ fontSize: '3rem', margin: 0 }}>{Math.round((score / questions.length) * 100)}%</h2>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Overall Score</span>
                                </div>
                            </div>

                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                                {score > questions.length * 0.8 ? "Mastery Achieved! 🏆" : score > questions.length * 0.5 ? "Good Progress! 👍" : "Keep Studying! 📚"}
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                                You correctly answered {score} out of {questions.length} questions.
                            </p>

                            <div className="grid grid-cols-1 md-grid-cols-2" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
                                <div className="glass-morphism" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
                                    <CheckCircle2 size={32} style={{ color: 'var(--success)' }} />
                                    <div>
                                        <h4 style={{ margin: 0 }}>{score} Correct</h4>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Accuracy: {Math.round((score / questions.length) * 100)}%</span>
                                    </div>
                                </div>
                                <div className="glass-morphism" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
                                    <XCircle size={32} style={{ color: 'var(--error)' }} />
                                    <div>
                                        <h4 style={{ margin: 0 }}>{questions.length - score} Incorrect</h4>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Needs Review</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                <button className="btn btn-outline" onClick={() => window.location.reload()} style={{ gap: '8px' }}>
                                    <RefreshCcw size={18} /> Retake Test
                                </button>
                                <Link to={`/section/${grade}`} className="btn btn-primary" style={{ gap: '8px' }}>
                                    <Home size={18} /> Back to Course
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MockTest;
