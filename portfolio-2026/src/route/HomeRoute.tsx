import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AboutPage from '../pages/AboutPage';
import ExpertisePage from '../pages/ExpertisePage';
import ProjectsPage from '../pages/AllProjectsPage';
import ContactPage from '../pages/ContactPage';
import Footer from '../components/Footer';
import { TOP } from '../util/useSectionNav';

export default function HomeRoute() {
  const location = useLocation();
  const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;

  // The navbar/footer send us here with a target when a link is used off-home.
  useEffect(() => {
    if (!scrollTo) return;

    if (scrollTo === TOP) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    document.getElementById(scrollTo)?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, [scrollTo]);

  return (
    <>
      <LandingPage />
      <AboutPage />
      <ExpertisePage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
