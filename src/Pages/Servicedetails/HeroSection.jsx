
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = ({ service }) => {
  return (
    <section
      className={`relative py-32 bg-gradient-to-br ${service.bgGradient} overflow-hidden`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/50 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/40 rounded-full"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
{/* Logo */}
  <motion.div
              className="text-8xl mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {service.icon}
            </motion.div>
<div className="min-h-[225px] mb-8">
  <h1
  className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${service.titleText}`}
  dangerouslySetInnerHTML={{ __html: service.title }}
/>

  <p className={`text-2xl font-light ${service.subtitleText}`}>
    {service.subtitle}
  </p>
</div>


            {/* Hero description */}
            <p className={`text-lg mb-12 ${service.heroText}`}>
              {service.hero}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact">
                <motion.button
                  className="bg-white text-gray-900 px-10 py-4 rounded-full  cursor-pointer font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                </motion.button>
              </Link>
              <motion.button
                className="border-2 border-white text-white px-10 py-4 rounded-full cursor-pointer font-bold text-lg hover:bg-white hover:text-gray-900"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("highlights")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - GIF instead of icon */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {service.heroGif ? (
                  <img
                    src={service.heroGif}
                    alt={`${service.title} animation`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-gray-300">[ Add a GIF in serviceData ]</div>
                )}
              </motion.div>

              {/* Floating Decorations */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/15 rounded-full flex items-center justify-center"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
