import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Contact', to: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Web Development', to: '/services/web-development' },
    { name: 'Mobile App Solutions', to: '/services/mobile-app' },
    { name: 'Cloud Integration', to: '/services/cloud-integration' },
    { name: 'AI & Automation', to: '/services/ai-automation' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
{/* Brand Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="flex items-center space-x-3 mb-4">
    {/* Logo on the left */}
    <img
      src="/logo.png"
      className="h-18 w-22 object-contain"
      alt="Neat Node Logo"
    />

    {/* Name on the right */}
    <div className="flex flex-col">
      <span className="text-2xl font-bold">Neat Node</span>
      <span className="text-xl font-semibold text-gray-300">Technologies</span>
    </div>
  </div>

  <p className="text-gray-300 mb-6 leading-relaxed">
    Powering businesses with cutting-edge SaaS solutions and innovative digital services.
  </p>
</motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-accent">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-accent">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to get the latest on our SaaS updates, product launches, and industry insights.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400"
              />
              <motion.button
                className="w-full bg-accent  hover:bg-primary text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-secondary mt-10 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-gray-300 text-sm">
              <span>© 2025 Neat Node Technologies. All rights reserved.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
