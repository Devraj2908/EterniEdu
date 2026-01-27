import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import SEO from '../../components/Shared/SEO';

const Register = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        grade: '10th' // Default grade
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate registration and save user data/grade
        localStorage.setItem('userGrade', formData.grade);
        alert('Registration successful! Please login.');
        navigate('/login');
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
            <SEO title="Register" description="Create your EterniEdu account." />

            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '4rem' }}>

                {/* Left Side - Hero Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1 1 400px', maxWidth: '600px' }}
                >
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1', color: 'var(--color-text-main)' }}>
                        Join <br />
                        <span className="text-accent">EterniEdu</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                        Unlock your potential with our premium courses. Select your grade and start learning.
                    </p>
                </motion.div>

                {/* Right Side - Register Form */}
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
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-main)' }}>Create Account</h2>
                    <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
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
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Select Grade/Course</label>
                            <select
                                name="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: '#f9fafb',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '4px',
                                    color: 'var(--color-text-main)',
                                    outline: 'none'
                                }}
                            >
                                <option value="10th">Class 10th</option>
                                <option value="11th">Class 11th</option>
                                <option value="12th">Class 12th</option>
                                <option value="neet">NEET Preparation</option>
                                <option value="jee">JEE Preparation</option>
                                <option value="cet">CET Preparation</option>
                                <option value="programming">Programming School</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a strong password"
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
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
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
                        <button type="submit" className="btn btn-solid" style={{ width: '100%', padding: '14px', marginTop: '1rem' }}>
                            Sign Up
                        </button>
                        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                            Already have an account? <Link to="/login" className="text-accent" style={{ cursor: 'pointer' }}>Login</Link>
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
