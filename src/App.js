import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Account from './pages/Account/Account';
import SectionPage from './pages/Section/SectionPage';
import LiveNotes from './pages/Section/LiveNotes';
import Programming from './pages/Programming/Programming';
import './App.css';

import PrivateRoute from './components/Route/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Layout>
                <Account />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/section/:id"
          element={
            <PrivateRoute>
              <Layout>
                <SectionPage />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/programming"
          element={
            <PrivateRoute>
              <Layout>
                <Programming />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/live-notes/:grade/:topic"
          element={
            <PrivateRoute>
              <Layout>
                <LiveNotes />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
