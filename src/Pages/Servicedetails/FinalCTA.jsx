import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FinalCTA = ({ service }) => (
  <section
    className={`py-24 bg-gradient-to-br ${service.bgGradient} relative overflow-hidden`}
  >
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Icon */}
        <div className="text-6xl mb-8">{service.icon}</div>

        {/* Title */}
        <h2
          className={`text-4xl font-bold mb-6 ${
            service.titleText || "text-gray-900"
          }`}
        >
          Ready to Transform Your Business?
        </h2>

        {/* Subtitle */}
        <p
          className={`text-xl mb-12 ${
            service.subtitleText || "text-gray-700"
          }`}
        >
          Join hundreds of companies who chose our{" "}
          {service.title.toLowerCase()} solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact">
            <motion.button
              className="bg-white text-gray-900 px-12 py-4 rounded-full font-bold text-lg shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
            >
              Get Started Today
            </motion.button>
          </Link>
          <Link to="/services">
            <motion.button
              className={`border-2 px-12 py-4 rounded-full font-bold text-lg transition ${
                service.subtitleText?.includes("100") // crude check if it's light text
                  ? "border-white text-white hover:bg-white hover:text-gray-900"
                  : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              View All Services
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
