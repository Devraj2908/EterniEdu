import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

// Dynamic API URL for both local, mobile, and production testing
const getApiUrl = () => {
    const hostname = window.location.hostname;

    // 1. If we are on Vercel, use relative path to talk to the same domain's serverless functions
    if (hostname.includes('vercel.app') || hostname.includes('eterniedu')) {
        return '/api';
    }

    // 2. If we are on mobile or accessing via IP (LAN), use that IP for the backend too
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
        return `http://${hostname}:5000/api`;
    }

    // 3. Default for laptop development
    return 'http://localhost:5000/api';
};

const API_BASE = getApiUrl();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userGrade, setUserGrade] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem('token');
            if (token && !currentUser) {
                try {
                    const response = await fetch(`${API_BASE}/me`, {
                        headers: { 'x-auth-token': token }
                    });
                    if (response.ok) {
                        const user = await response.json();
                        setCurrentUser(user);
                        setUserGrade(user.grade);
                    } else {
                        localStorage.removeItem('token');
                    }
                } catch (error) {
                    console.error("Auth check failed:", error);
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        checkLoggedIn();
    }, [currentUser]);

    const login = async (email, password) => {
        setFetching(true);
        try {
            const response = await fetch(`${API_BASE}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                setCurrentUser(data.user);
                setUserGrade(data.user.grade);
                return { success: true };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: "Network error. Is the server running?" };
        } finally {
            setFetching(false);
        }
    };

    const register = async (userData) => {
        setFetching(true);
        try {
            const response = await fetch(`${API_BASE}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            if (response.ok) {
                return { success: true };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: "Network error. Is the server running?" };
        } finally {
            setFetching(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
        setUserGrade(null);
    };

    const value = {
        currentUser,
        userGrade,
        loading,
        fetching,
        login,
        register,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

