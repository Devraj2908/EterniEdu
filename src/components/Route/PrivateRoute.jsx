import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { currentUser, userGrade, loading } = useAuth();
    const { id } = useParams(); // Get the grade from the URL if present

    if (loading) {
        return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
    }

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    // Grade Check Logic
    // If the route has an 'id' param (like /section/:id), check if it strictly matches the user's grade
    if (id) {
        if (userGrade !== id) {
            // Strict enforcement: User can only access content matching their registered grade
            return <Navigate to="/dashboard" replace />;
        }
    }

    // Protect /programming route
    if (window.location.pathname === '/programming' && userGrade !== 'programming') {
        return <Navigate to="/dashboard" replace />;
    }


    return children;
};

export default PrivateRoute;
