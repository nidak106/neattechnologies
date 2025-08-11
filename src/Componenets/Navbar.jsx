import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store/useStore';

const services = [
  { name: 'Custom Web Development', path: '/services/web-development' },
  { name: 'Mobile App Solutions', path: '/services/mobile-app' },
  { name: 'Cloud Integration', path: '/services/cloud-integration' },
  { name: 'AI & Automation', path: '/services/ai-automation' }
];

const Navbar = () => {
  const location = useLocation();
  const dropdownRef = useRef(null);
  const { 
    isMobileMenuOpen, 
    isServicesDropdownOpen, 
    toggleMobileMenu, 
    setMobileMenu, 
    setServicesDropdown 
  } = useStore();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setServicesDropdown]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.img 
              src="/logo.png" 
              alt="NeatTech Logo"
              className="h-15 w-15 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div 
              className="text-2xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Neat<span className="text-primary-500">Node</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                  location.pathname === item.path ? 'text-primary-500' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdown(!isServicesDropdownOpen)}
                className={`flex items-center text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                  location.pathname.startsWith('/services') ? 'text-primary-500' : 'text-gray-700'
                }`}
              >
                Services
                <motion.svg 
                  className="ml-1 h-4 w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdown(false)}
                      className="block px-4 py-3 text-sm font-medium text-primary-600 border-t border-gray-100 mt-2 hover:bg-primary-50 transition-colors duration-200"
                    >
                      View All Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 hover:text-primary-500 focus:outline-none"
            >
              <motion.svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenu(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      location.pathname === item.path 
                        ? 'text-primary-500 bg-primary-50' 
                        : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="px-3 py-2">
                  <div className="text-base font-medium text-gray-700 mb-2">Services</div>
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setMobileMenu(false)}
                        className="block py-2 text-sm text-gray-600 hover:text-primary-500 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => setMobileMenu(false)}
                      className="block py-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
