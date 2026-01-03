import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DriverTeaser from './components/DriverTeaser';
import ManagerTeaser from './components/ManagerTeaser';
import ComingSoon from './components/ComingSoon';
import ContactPage from './components/ContactPage';

// Wrapper for the Home page content
const Home = () => (
  <>
    <LandingPage />
    <DriverTeaser />
    <ManagerTeaser />
  </>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-dark">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-emerald-300"></div>
                <span className="text-xl font-bold tracking-tight">GoodWheel</span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link to="/" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/coming-soon" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">For Drivers</Link>
                  <Link to="/coming-soon" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">For Managers</Link>
                  <Link to="/coming-soon" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-black py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 mb-4">© 2026 GoodWheel Inc. Driving Safety Forward.</p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <Link to="/coming-soon" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/coming-soon" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
