import React from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import ContactPage from './Pages/ContactUsPage';

function AppRoutes() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes> 
      <Route path="/" element={<AppRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
