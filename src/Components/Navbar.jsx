import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../Store/UseStore';

const services = [
  { name: 'Custom Web Development', path: '/services/web-development' },
  { name: 'Mobile App Solutions', path: '/services/mobile-app' },
  { name: 'Cloud Integration', path: '/services/cloud-integration' },
  { name: 'AI & Automation', path: '/services/ai-automation' }
];

const products = [
  { name: 'Clouditecture', path: '/products/clouditecture' }
];

const Navbar = () => {
  const location = useLocation();
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  const store = useStore();
  const {
    isMobileMenuOpen,
    isServicesDropdownOpen,
    toggleMobileMenu,
    setMobileMenu,
    setServicesDropdown
  } = store || {};

  const [isProductsDropdownOpenLocal, setIsProductsDropdownOpenLocal] = useState(false);
  const productsOpenFromStore = store && typeof store.isProductsDropdownOpen !== 'undefined';
  const isProductsDropdownOpen = productsOpenFromStore
    ? store.isProductsDropdownOpen
    : isProductsDropdownOpenLocal;

  const setProductsDropdown = (val) => {
    if (productsOpenFromStore && typeof store.setProductsDropdown === 'function') {
      store.setProductsDropdown(val);
    } else {
      setIsProductsDropdownOpenLocal(val);
    }
  };

  // Track scroll position
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Homepage + not scrolled = white text
  const isHome = location.pathname === '/';
  const showWhite = isHome && !scrolled;

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        if (typeof setServicesDropdown === 'function') setServicesDropdown(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setServicesDropdown, store]);

  const toggleProducts = () => setProductsDropdown(!isProductsDropdownOpen);
  const toggleServices = () => {
    if (typeof setServicesDropdown === 'function') {
      setServicesDropdown(!isServicesDropdownOpen);
    }
  };

  return (
  <motion.nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
  }`}
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo & Company Name */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src="/logo.png"
              alt="NeatTech Logo"
              className="h-15 w-15 object-contain"
              // whileHover={{ scale: 1.05 }}
              // transition={{ duration: 0.2 }}
            />
            <motion.div
              className={`text-2xl font-bold transition-colors duration-300 ${
                showWhite ? 'text-white' : 'text-gray-900'
              }`}
              // whileHover={{ scale: 1.05 }}
              // transition={{ duration: 0.2 }}
            >
              NeatNode<span className={showWhite ? 'text-black' : 'text-[#2E8B9C]'}> Technologies</span>
            </motion.div>
          </Link>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products */}
            <div className="relative" ref={productsRef}>
              <button
                onClick={toggleProducts}
                className={`flex items-center text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                  location.pathname.startsWith('/products')
                    ? 'text-primary-500'
                    : showWhite
                    ? 'text-white'
                    : 'text-gray-700'
                }`}
              >
                Products
                <motion.svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isProductsDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isProductsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {products.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        onClick={() => setProductsDropdown(false)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                      >
                        {product.name}
                      </Link>
                    ))}
                    <Link
                      to="/products"
                      onClick={() => setProductsDropdown(false)}
                      className="block px-4 py-3 text-sm font-medium text-primary-600 border-t border-gray-100 mt-2 hover:bg-primary-50 transition-colors duration-200"
                    >
                      View All Products
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={toggleServices}
                className={`flex items-center text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                  location.pathname.startsWith('/services')
                    ? 'text-primary-500'
                    : showWhite
                    ? 'text-white'
                    : 'text-gray-700'
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
                        onClick={() => typeof setServicesDropdown === 'function' && setServicesDropdown(false)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => typeof setServicesDropdown === 'function' && setServicesDropdown(false)}
                      className="block px-4 py-3 text-sm font-medium text-primary-600 border-t border-gray-100 mt-2 hover:bg-primary-50 transition-colors duration-200"
                    >
                      View All Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                location.pathname === '/about'
                  ? 'text-primary-500'
                  : showWhite
                  ? 'text-white'
                  : 'text-gray-700'
              }`}
            >
              About
            </Link>
          </div>

          {/* Right: Contact Button */}
          <Link to="/contact" className="hidden md:block">
            <motion.button
              className={`px-8 py-2 rounded-full font-semibold text-sm transition-colors duration-200 shadow-lg hover:shadow-xl ${
                scrolled
                  ? 'bg-[#A8DADC] text-[#1D3557] hover:bg-[#F1FAEE]'
                  : 'bg-[#A8DADC] text-[#1D3557] hover:bg-[#F1FAEE]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`${showWhite ? 'text-white' : 'text-gray-900'} hover:text-primary-500 focus:outline-none`}
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
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
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
                <Link to="/" onClick={() => setMobileMenu(false)} className="block px-3 py-2 text-base font-medium">
                  Home
                </Link>
                <Link to="/about" onClick={() => setMobileMenu(false)} className="block px-3 py-2 text-base font-medium">
                  About
                </Link>

                <div className="px-3 py-2">
                  <div className="text-base font-medium text-gray-700 mb-2">Services</div>
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link key={service.path} to={service.path} onClick={() => setMobileMenu(false)} className="block py-2 text-sm">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="px-3 py-2">
                  <div className="text-base font-medium text-gray-700 mb-2">Products</div>
                  <div className="pl-4 space-y-1">
                    {products.map((product) => (
                      <Link key={product.path} to={product.path} onClick={() => setMobileMenu(false)} className="block py-2 text-sm">
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/contact" onClick={() => setMobileMenu(false)} className="block px-3 py-2">
                  <motion.button
                    className="bg-[#A8DADC] text-[#1D3557] px-8 py-2 rounded-full font-semibold text-sm hover:bg-[#F1FAEE] transition-colors duration-200 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
