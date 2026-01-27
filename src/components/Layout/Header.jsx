import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();



    const navLinks = [
        { title: 'Dashboard', path: '/dashboard' },
        { title: '10th', path: '/section/10th' },
        { title: '11th', path: '/section/11th' },
        { title: '12th', path: '/section/12th' },
        { title: 'NEET', path: '/section/neet' },
        { title: 'JEE', path: '/section/jee' },
        { title: 'CET', path: '/section/cet' },
        { title: 'Programming', path: '/programming' },
    ];



    return (
        <header style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>
                    <BookOpen size={28} />
                    <span>EterniEdu</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <ul style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        {/* Show Login/Register on Home Page or when not logged in */}
                        {(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register') ? (
                            <>
                                <li>
                                    <Link to="/login" className="btn btn-primary" style={{ padding: '8px 20px' }}>Login</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="btn btn-solid" style={{ padding: '8px 20px' }}>Get Started</Link>
                                </li>
                            </>
                        ) : (
                            navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-text-main)',
                                            fontSize: '0.9rem',
                                            fontWeight: '500'
                                        }}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))
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
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween' }}
                        style={{
                            position: 'fixed',
                            top: '80px',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'var(--color-primary)',
                            padding: '2rem',
                            zIndex: 99
                        }}
                    >
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-text-main)',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
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
