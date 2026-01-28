import React from 'react';
import { Mail, Phone, MapPin, BookOpen, LucideLinkedin, LucideTwitter, LucideYoutube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            padding: '5rem 0 2rem',
            color: 'var(--text-secondary)',
            borderTop: '1px solid var(--glass-border)',
            position: 'relative'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>

                    {/* Brand Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '800' }}>
                            <BookOpen size={28} style={{ color: 'var(--accent-gold)' }} />
                            <span className="text-gradient-gold">EterniEdu</span>
                        </Link>
                        <p style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                            Redefining digital education with premium content, expert mentorship, and industry-leading standards for a global community of students.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <SocialIcon icon={<LucideLinkedin size={20} />} />
                            <SocialIcon icon={<LucideTwitter size={20} />} />
                            <SocialIcon icon={<LucideYoutube size={20} />} />
                        </div>
                    </div>

                    {/* Quick Navigator */}
                    <div>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '1.2rem' }}>Quick Navigator</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
                            <FooterLink to="/section/10th">Class 10th Boards</FooterLink>
                            <FooterLink to="/section/12th">Class 12th Boards</FooterLink>
                            <FooterLink to="/section/neet">NEET Specialized</FooterLink>
                            <FooterLink to="/programming">Programming School</FooterLink>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '1.2rem' }}>Contact Info</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyle: 'none' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                                <div style={{ color: 'var(--accent-gold)' }}><Mail size={18} /></div>
                                <span>hello@eterniedu.org</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                                <div style={{ color: 'var(--accent-gold)' }}><Phone size={18} /></div>
                                <span>+91 1800 555 0199</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                                <div style={{ color: 'var(--accent-gold)' }}><MapPin size={18} /></div>
                                <span>Education Hub, Mumbai - India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    fontSize: '0.85rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} EterniEdu. Crafted for Excellence.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'var(--text-muted)' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <li>
        <Link
            to={to}
            style={{
                color: 'var(--text-secondary)',
                transition: 'var(--transition)',
                fontSize: '0.95rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ icon }) => (
    <a
        href="#"
        style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--glass-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            border: '1px solid var(--glass-border)',
            transition: 'var(--transition)'
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-gold)'; e.currentTarget.style.color = '#000'; }}
        onMouseOut={(e) => { e.currentTarget.style.background = 'var(--glass-bg)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
    >
        {icon}
    </a>
);

export default Footer;
