import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, LogOut, LayoutDashboard, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { currentUser, userGrade, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const allLinks = [
        { title: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
        { title: '10th Class', path: '/section/10th', grade: '10th' },
        { title: '11th Class', path: '/section/11th', grade: '11th' },
        { title: '12th Class', path: '/section/12th', grade: '12th' },
        { title: 'NEET', path: '/section/neet', grade: 'neet' },
        { title: 'JEE', path: '/section/jee', grade: 'jee' },
        { title: 'CET', path: '/section/cet', grade: 'cet' },
        { title: 'Programming', path: '/programming', grade: 'programming' },
    ];

    const navLinks = allLinks.filter(link =>
        link.title === 'Dashboard' || (userGrade && link.grade === userGrade)
    );

    return (
        <header className={`glass ${scrolled ? 'header-scrolled' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            height: scrolled ? '70px' : '85px',
            display: 'flex',
            alignItems: 'center',
            transition: 'var(--transition)',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to={currentUser ? "/dashboard" : "/"} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.6rem', fontWeight: '800' }}>
                    <div className="animate-float" style={{ color: 'var(--accent-gold)' }}>
                        <BookOpen size={32} />
                    </div>
                    <span className="text-gradient-gold">EterniEdu</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <ul style={{ display: 'flex', gap: '32px', alignItems: 'center', listStyle: 'none' }}>
                        {!currentUser ? (
                            <>
                                <li>
                                    <Link to="/login" className="btn btn-ghost">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="btn btn-primary">Start Learning</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            style={{
                                                color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-secondary)',
                                                fontSize: '0.95rem',
                                                fontWeight: '600',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                            onMouseOut={(e) => e.currentTarget.style.color = location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-secondary)'}
                                        >
                                            {link.icon}
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        to="/account"
                                        className="btn btn-outline"
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: 'var(--radius-full)',
                                            borderColor: location.pathname === '/account' ? 'var(--accent-gold)' : 'var(--glass-border)'
                                        }}
                                    >
                                        <User size={18} />
                                        <span>Account</span>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={logout} className="btn btn-ghost" style={{ padding: '8px', color: '#ff4d4d' }}>
                                        <LogOut size={20} />
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ display: 'block', color: 'var(--text-primary)', padding: '8px' }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0,0,0,0.8)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 998
                            }}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: '85%',
                                maxWidth: '400px',
                                background: 'var(--bg-secondary)',
                                zIndex: 999,
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                borderLeft: '1px solid var(--glass-border)'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                                <span className="text-gradient-gold" style={{ fontSize: '1.5rem', fontWeight: '800' }}>EterniEdu</span>
                                <button onClick={() => setIsOpen(false)} style={{ color: 'var(--text-secondary)' }}><X size={24} /></button>
                            </div>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
                                {!currentUser ? (
                                    <>
                                        <li>
                                            <Link to="/login" className="btn btn-outline" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/register" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>Get Started</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        {navLinks.map((link) => (
                                            <li key={link.path}>
                                                <Link
                                                    to={link.path}
                                                    onClick={() => setIsOpen(false)}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '12px',
                                                        padding: '1rem',
                                                        borderRadius: 'var(--radius-md)',
                                                        background: location.pathname === link.path ? 'var(--glass-bg)' : 'transparent',
                                                        color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-primary)',
                                                        fontSize: '1.1rem',
                                                        fontWeight: '600'
                                                    }}
                                                >
                                                    {link.icon || <BookOpen size={20} />}
                                                    {link.title}
                                                </Link>
                                            </li>
                                        ))}
                                        <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '1rem 0' }} />
                                        <li>
                                            <Link
                                                to="/account"
                                                onClick={() => setIsOpen(false)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '1rem',
                                                    color: 'var(--text-primary)',
                                                    fontSize: '1.1rem'
                                                }}
                                            >
                                                <User size={20} />
                                                Account Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => { logout(); setIsOpen(false); }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '1rem',
                                                    color: '#ff4d4d',
                                                    fontSize: '1.1rem',
                                                    width: '100%',
                                                    textAlign: 'left'
                                                }}
                                            >
                                                <LogOut size={20} />
                                                Sign Out
                                            </button>
                                        </li>
                                    </>
                                )}
                            </ul>

                            <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Premium Education Platfrom</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width: 1024px) {
                    .desktop-nav { display: block !important; }
                    .mobile-toggle { display: none !important; }
                }
                .header-scrolled {
                    background: rgba(5, 5, 5, 0.8) !important;
                }
            `}</style>
        </header>
    );
};

export default Header;
