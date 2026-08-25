import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DetailedProjectsPage from './pages/DetailedProjectsPage';
import ExpertisePage from './pages/ExpertisePage';
import ProjectsPage from './pages/AllProjectsPage';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Home from './route/HomeRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Clears the fixed navbar */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Every project renders from the same page, keyed by slug */}
          <Route path="/projects/:slug" element={<DetailedProjectsPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
