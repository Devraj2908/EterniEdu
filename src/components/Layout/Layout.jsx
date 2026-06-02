import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AdSense from '../AdSense/AdSense';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AdSense />
            <Header />
            <main style={{ flex: 1, position: 'relative' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
