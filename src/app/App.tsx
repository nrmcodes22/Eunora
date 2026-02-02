import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '../app/components/Navigation';
import { Footer } from '../app/components/Footer';
import { HomePage } from '../app/components/pages/HomePage';
import { SolutionsPage } from '../app/components/pages/SolutionsPage';
import { TrainingPage } from '../app/components/pages/TrainingPage';
import { AboutContactPage } from '../app/components/pages/AboutContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/about" element={<AboutContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
