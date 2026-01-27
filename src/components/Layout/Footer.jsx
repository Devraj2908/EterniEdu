import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'white', padding: '4rem 0 2rem', color: 'var(--color-text-muted)', borderTop: '1px solid #e5e7eb' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                {/* About */}
                <div>
                    <h3 style={{ color: 'var(--color-text-main)', marginBottom: '1rem' }}>EterniEdu</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        Empowering students with premium education for a brighter future. Master your exams and skills with us.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 style={{ color: 'var(--color-text-main)', marginBottom: '1rem' }}>Quick Links</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><a href="/section/10th" className="hover-accent">Class 10th</a></li>
                        <li><a href="/section/12th" className="hover-accent">Class 12th</a></li>
                        <li><a href="/section/neet" className="hover-accent">NEET Prep</a></li>
                        <li><a href="/programming" className="hover-accent">Programming</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 style={{ color: 'var(--color-text-main)', marginBottom: '1rem' }}>Contact Us</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Mail size={16} color="var(--color-accent)" /> info@eterniedu.com
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Phone size={16} color="var(--color-accent)" /> +91 98765 43210
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <MapPin size={16} color="var(--color-accent)" /> Education City, India
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid #e5e7eb', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} EterniEdu. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
