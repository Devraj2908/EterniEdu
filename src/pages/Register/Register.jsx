import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
    const { register, loading } = useAuth();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        grade: '10th'
    });
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const result = await register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                grade: formData.grade
            });

            if (result.success) {
                navigate('/login', { state: { message: 'Account created successfully! Welcome to EterniEdu.' } });
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.error("Registration Error:", error);
            setError("Registration failed. Please check your connection.");
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-primary)',
            padding: '4rem 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorations */}
            <div style={{ position: 'absolute', top: '5%', right: '5%', width: '400px', height: '400px', background: 'var(--accent-gold-glow)', filter: 'blur(120px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: '300px', height: '300px', background: 'var(--accent-gold-glow)', filter: 'blur(100px)', zIndex: 0, opacity: 0.3 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '5rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>

                {/* Visual Benefits - Hidden on small mobile */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mobile-hide"
                    style={{ flex: '1', maxWidth: '500px' }}
                >
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '2rem' }}>
                        Join the <span className="text-gradient-gold">Elite</span> <br />
                        Learning Circle
                    </h1>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            "Ad-free premium learning experience",
                            "Access to all subject resources",
                            "Real-time progress tracking",
                            "Certified course completion"
                        ].map((text, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                                <div style={{ color: 'var(--accent-gold)' }}><Sparkles size={20} /></div>
                                {text}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass"
                    style={{
                        width: '100%',
                        maxWidth: '520px',
                        padding: '3rem 2.5rem',
                        borderRadius: 'var(--radius-lg)'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Create Account</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Start your journey to academic excellence</p>
                    </div>

                    {error && (
                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid rgba(239, 68, 68, 0.2)', textAlign: 'center', fontSize: '0.9rem' }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px 12px 12px 40px',
                                        background: 'var(--bg-tertiary)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'var(--text-primary)',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md-grid-cols-2" style={{ gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                                <div style={{ position: 'relative' }}>
                                    <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px 12px 12px 40px',
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'var(--text-primary)',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Grade / Course</label>
                                <div style={{ position: 'relative' }}>
                                    <GraduationCap size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', zIndex: 1 }} />
                                    <select
                                        name="grade"
                                        value={formData.grade}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '12px 12px 12px 40px',
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'var(--text-primary)',
                                            outline: 'none',
                                            appearance: 'none'
                                        }}
                                    >
                                        <option value="10th">Class 10th</option>
                                        <option value="11th">Class 11th</option>
                                        <option value="12th">Class 12th</option>
                                        <option value="neet">NEET Exam</option>
                                        <option value="jee">JEE Exam</option>
                                        <option value="cet">CET Exam</option>
                                        <option value="programming">Programming</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md-grid-cols-2" style={{ gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Password</label>
                                <div style={{ position: 'relative' }}>
                                    <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px 12px 12px 40px',
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'var(--text-primary)',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Confirm</label>
                                <div style={{ position: 'relative' }}>
                                    <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="••••••••"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px 12px 12px 40px',
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'var(--text-primary)',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '1rem', marginTop: '1.5rem' }}
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Register Now <ArrowRight size={20} />
                                </span>
                            )}
                        </button>
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Sign In</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
