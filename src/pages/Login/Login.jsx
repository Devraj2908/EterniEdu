import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve the user's grade from registration (simulated backend)
        const userGrade = localStorage.getItem('userGrade');

        if (userGrade) {
            if (userGrade === 'programming') {
                navigate('/programming');
            } else {
                navigate(`/section/${userGrade}`);
            }
        } else {
            // Fallback if no grade found (e.g., direct login)
            navigate('/dashboard');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'conic-gradient(from 90deg at 50% 50%, #f3f4f6 0%, #ffffff 50%, #f3f4f6 100%)',
            padding: '20px'
        }}>


            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '4rem' }}>

                {/* Left Side - Hero Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1 1 400px', maxWidth: '600px' }}
                >
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1', color: 'var(--color-text-main)' }}>
                        Welcome to <br />
                        <span className="text-accent">EterniEdu</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                        Your gateway to excellence in 10th, 12th, NEET, JEE, CET, and Programming.
                        Join the community of future achievers.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <h3 className="text-gold" style={{ fontSize: '2rem' }}>10k+</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Students</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <h3 className="text-gold" style={{ fontSize: '2rem' }}>50+</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Expert Tutors</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <h3 className="text-gold" style={{ fontSize: '2rem' }}>95%</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Success Rate</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Login Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        flex: '1 1 350px',
                        maxWidth: '450px',
                        background: 'white',
                        backdropFilter: 'blur(10px)',
                        padding: '2.5rem',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
                        border: '1px solid #e5e7eb'
                    }}
                >
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-main)' }}>Student Login</h2>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Email Address</label>
                            <input
                                type="email"
                                placeholder="student@eterniedu.com"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: '#f9fafb',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '4px',
                                    color: 'var(--color-text-main)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: '#f9fafb',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '4px',
                                    color: 'var(--color-text-main)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <button type="submit" className="btn btn-solid" style={{ width: '100%', padding: '14px' }}>
                            Login to Dashboard
                        </button>
                        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                            Don't have an account? <Link to="/register" className="text-accent" style={{ cursor: 'pointer' }}>Register Now</Link>
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
