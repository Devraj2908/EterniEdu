import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Mail, GraduationCap, Calendar, LogOut } from 'lucide-react';
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
        <div className="container" style={{ padding: '4rem 20px', maxWidth: '800px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '3rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    border: '1px solid #f0f0f0'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #4f46e5 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '2.5rem',
                        fontWeight: 'bold'
                    }}>
                        {currentUser.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, color: 'var(--color-text-main)' }}>
                            {currentUser.name}
                        </h1>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                            Student Account
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <InfoRow icon={<Mail size={20} />} label="Email Address" value={currentUser.email} />
                    <InfoRow icon={<GraduationCap size={20} />} label="Enrolled Grade" value={currentUser.grade?.toUpperCase()} />
                    <InfoRow icon={<Calendar size={20} />} label="Member Since" value={new Date(currentUser.createdAt).toLocaleDateString()} />
                </div>

                <button
                    onClick={handleLogout}
                    style={{
                        marginTop: '3rem',
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '12px',
                        background: '#fee2e2',
                        color: '#ef4444',
                        border: 'none',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#fecaca'}
                    onMouseOut={(e) => e.currentTarget.style.background = '#fee2e2'}
                >
                    <LogOut size={20} />
                    Logout from EterniEdu
                </button>
            </motion.div>
        </div>
    );
};

const InfoRow = ({ icon, label, value }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1.5rem',
        background: '#f9fafb',
        borderRadius: '16px',
        border: '1px solid #f3f4f6'
    }}>
        <div style={{ color: 'var(--color-accent)' }}>{icon}</div>
        <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>{label}</p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', fontWeight: '600', margin: 0 }}>{value}</p>
        </div>
    </div>
);

export default Account;
