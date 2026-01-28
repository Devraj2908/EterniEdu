import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { currentUser, userGrade } = useAuth();

    const allLinks = [
        { title: 'Dashboard', path: '/dashboard' },
        { title: '10th', path: '/section/10th', grade: '10th' },
        { title: '11th', path: '/section/11th', grade: '11th' },
        { title: '12th', path: '/section/12th', grade: '12th' },
        { title: 'NEET', path: '/section/neet', grade: 'neet' },
        { title: 'JEE', path: '/section/jee', grade: 'jee' },
        { title: 'CET', path: '/section/cet', grade: 'cet' },
        { title: 'Programming', path: '/programming', grade: 'programming' },
    ];

    // Filter links: Always show Dashboard, otherwise show only if it matches userGrade
    const navLinks = allLinks.filter(link =>
        link.title === 'Dashboard' || (userGrade && link.grade === userGrade)
    );

    return (
        <header style={{
            background: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid #374151',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to={currentUser ? "/dashboard" : "/"} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>
                    <BookOpen size={28} />
                    <span>EterniEdu</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <ul style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                        {!currentUser ? (
                            <>
                                <li>
                                    <Link to="/login" className="btn btn-primary" style={{ padding: '8px 20px', color: 'white' }}>Login</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="btn btn-solid" style={{ padding: '8px 20px' }}>Get Started</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            style={{
                                                color: location.pathname === link.path ? 'var(--color-accent)' : '#9ca3af',
                                                fontSize: '0.95rem',
                                                fontWeight: '600'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                            onMouseOut={(e) => e.currentTarget.style.color = location.pathname === link.path ? 'var(--color-accent)' : '#9ca3af'}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        to="/account"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            background: '#1f2937',
                                            padding: '8px 16px',
                                            borderRadius: '50px',
                                            color: 'var(--color-accent)',
                                            fontWeight: 'bold',
                                            border: '1px solid #374151'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.background = '#374151'}
                                        onMouseOut={(e) => e.currentTarget.style.background = '#1f2937'}
                                    >
                                        <User size={18} />
                                        Account
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', color: 'var(--color-accent)' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '80px',
                            left: 0,
                            right: 0,
                            background: '#111827',
                            padding: '2rem',
                            zIndex: 99,
                            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                            borderBottom: '1px solid #374151'
                        }}
                    >
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            {!currentUser ? (
                                <>
                                    <li><Link to="/login" onClick={() => setIsOpen(false)} style={{ color: 'white' }}>Login</Link></li>
                                    <li><Link to="/register" onClick={() => setIsOpen(false)} style={{ color: 'white' }}>Register</Link></li>
                                </>
                            ) : (
                                <>
                                    {navLinks.map((link) => (
                                        <li key={link.path}>
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                style={{ fontSize: '1.1rem', fontWeight: 'bold', color: location.pathname === link.path ? 'var(--color-accent)' : '#9ca3af' }}
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link
                                            to="/account"
                                            onClick={() => setIsOpen(false)}
                                            style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}
                                        >
                                            My Account
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
