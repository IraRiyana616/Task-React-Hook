import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '/src/context/ThemeContext';
import PrivateRoute from '/src/router/PrivateRoute';
import Home from '/src/pages/Home';
import About from '/src/pages/About';
import Services from '/src/pages/Service';
import Media from '/src/pages/Media';
import Contacts from '/src/pages/Contact';
import Login from '/src/pages/Login';

export default function AppRouter() {
  const isAuthenticated = true;

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Login />
            </PrivateRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/service"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Services />
            </PrivateRoute>
          }
        />
        <Route
          path="/media"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Media />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}
