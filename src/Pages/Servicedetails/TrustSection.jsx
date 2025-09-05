// src/components/ServiceDetails/TrustSection.jsx
import { motion } from "framer-motion";

const TrustSection = ({ service }) => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
        <p className="text-xl text-gray-600">See what our clients say about working with us.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {service.stats.map((stat, index) => (
          <motion.div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className={`text-4xl font-bold ${service.textAccent}`}>{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {service.testimonials.map((t, index) => (
          <motion.div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-gray-600">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{t.quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
