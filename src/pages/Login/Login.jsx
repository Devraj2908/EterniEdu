import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Mail, Lock, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login, fetching } = useAuth();
    const [error, setError] = React.useState('');
    const [successMsg, setSuccessMsg] = React.useState(location.state?.message || '');

    React.useEffect(() => {
        if (location.state?.message) {
            setSuccessMsg(location.state.message);
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const result = await login(email, password);
            if (result.success) {
                navigate('/dashboard');
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.error("Login Error:", error);
            setError("Internal server error. Please try again later.");
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-primary)',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorations */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-gold-glow)', filter: 'blur(100px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '200px', height: '200px', background: 'var(--accent-gold-glow)', filter: 'blur(80px)', zIndex: 0, opacity: 0.5 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass"
                    style={{
                        width: '100%',
                        maxWidth: '480px',
                        padding: '3rem 2.5rem',
                        borderRadius: 'var(--radius-lg)',
                        position: 'relative'
                    }}
                >
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <div style={{ display: 'inline-flex', padding: '12px', background: 'var(--glass-bg)', borderRadius: 'var(--radius-md)', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                            <ShieldCheck size={32} />
                        </div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome Back</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Login to access your premium courses</p>
                    </div>

                    {successMsg && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.2)', textAlign: 'center', fontSize: '0.9rem' }}
                        >
                            {successMsg}
                        </motion.div>
                    )}

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid rgba(239, 68, 68, 0.2)', textAlign: 'center', fontSize: '0.9rem' }}
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="student@eterniedu.com"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px 12px 12px 40px',
                                        background: 'var(--bg-tertiary)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'var(--text-primary)',
                                        outline: 'none',
                                        transition: 'var(--transition)'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Password</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px 12px 12px 40px',
                                        background: 'var(--bg-tertiary)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'var(--text-primary)',
                                        outline: 'none',
                                        transition: 'var(--transition)'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}
                            disabled={fetching}
                        >
                            {fetching ? 'Verifying Identity...' : (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Access Dashboard <ArrowRight size={20} />
                                </span>
                            )}
                        </button>
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        New to EterniEdu? <Link to="/register" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Create an Account</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
