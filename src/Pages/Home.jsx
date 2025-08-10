import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#2E8B9C] via-[#415A77] to-[#9BBEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovating the Future,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE]">
              Neatly.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Neat Technologies is a leading provider of bespoke software solutions,
            empowering startups and enterprises to transform their digital presence
            with cutting-edge technology and elegant design.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/services">
              <motion.button
                className="bg-[#A8DADC] text-[#1D3557] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#F1FAEE] transition-colors duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Our Services
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                className="border-2 border-[#A8DADC] text-[#A8DADC] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#A8DADC] hover:text-[#1D3557] transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 bg-gradient-to-br from-[#F7F9FB] via-[#E6F0F2] to-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3557] mb-4">
              Why Choose{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B9C] to-[#9BBEC8]">
                Neat Technologies?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional software solutions with precision, innovation, and unmatched quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Development",
                description: "Our team of skilled developers creates robust, scalable solutions tailored to your business needs.",
                icon: "🚀"
              },
              {
                title: "Modern Technology",
                description: "We leverage cutting-edge technologies and best practices to ensure your project stays ahead of the curve.",
                icon: "⚡"
              },
              {
                title: "Client-Focused Approach",
                description: "Your success is our priority. We work closely with you throughout every step of the development process.",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-[#F0F4F5] border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1D3557] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
