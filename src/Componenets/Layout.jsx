import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.main 
        className="pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;