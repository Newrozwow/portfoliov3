import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail1 from './components/ProjectDetail1.jsx';  // Ny projektdetaljeside
import ProjectDetail2 from './components/ProjectDetail2';  // Ny projektdetaljeside
import ContactPage from './components/ContactPage';
import AboutMePage from './components/AboutMePage';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/aalborg-garden" element={<ProjectDetail1 />} /> {/* Projektdetalje side 1 */}
        <Route path="/projects/magisk-jul" element={<ProjectDetail2 />} /> {/* Projektdetalje side 2 */}
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
