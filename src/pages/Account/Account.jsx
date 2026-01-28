import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Mail, GraduationCap, Calendar, LogOut, User, Shield, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!currentUser) return null;

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '120px', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass"
                    style={{
                        borderRadius: 'var(--radius-lg)',
                        padding: 'clamp(1.5rem, 5vw, 4rem)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Background glow behind profile icon */}
                    <div style={{ position: 'absolute', top: '-50px', left: '10%', width: '200px', height: '200px', background: 'var(--accent-gold-glow)', filter: 'blur(100px)', opacity: 0.3 }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                        <div style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: 'var(--radius-lg)',
                            background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dark) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#000',
                            fontSize: '3rem',
                            fontWeight: '800',
                            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)'
                        }}>
                            {currentUser.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-primary)' }}>
                                    {currentUser.name}
                                </h1>
                                <div style={{ background: 'var(--glass-bg)', color: 'var(--accent-gold)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700', border: '1px solid var(--glass-border)' }}>
                                    PREMIUM
                                </div>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                Student Member
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md-grid-cols-2" style={{ gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                        <InfoCard icon={<Mail size={22} />} label="Email Address" value={currentUser.email} />
                        <InfoCard icon={<GraduationCap size={22} />} label="Current Track" value={currentUser.grade?.toUpperCase()} />
                        <InfoCard icon={<Calendar size={22} />} label="Joined Since" value={new Date(currentUser.createdAt).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })} />
                        <InfoCard icon={<Shield size={22} />} label="Security" value="Active Account" />
                    </div>

                    <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Account Actions</h3>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button
                                onClick={handleLogout}
                                className="btn"
                                style={{
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    color: '#ef4444',
                                    border: '1px solid rgba(239, 68, 68, 0.2)',
                                    padding: '0.75rem 2rem'
                                }}
                            >
                                <LogOut size={20} />
                                Sign Out from EterniEdu
                            </button>
                            <button className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>
                                Reset Password
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const InfoCard = ({ icon, label, value }) => (
    <div className="glass-morphism" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1.5rem',
        transition: 'var(--transition)'
    }}>
        <div style={{
            color: 'var(--accent-gold)',
            background: 'var(--glass-bg)',
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--glass-border)'
        }}>{icon}</div>
        <div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600' }}>{value}</p>
        </div>
    </div>
);

export default Account;
