// src/components/ServiceDetails/HighlightsSection.jsx
import { motion } from "framer-motion";

const HighlightsSection = ({ service }) => (
  <section id="highlights" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
   <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
  Why Choose Our {service.title.replace(/<br\s*\/?>/g, " ")}?
</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the key benefits that make our solution the perfect choice for your business.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {service.highlights.map((highlight, index) => (
          <motion.div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center group relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={`absolute inset-0 ${service.lightAccent} opacity-0 group-hover:opacity-100`} />
            <div className="relative z-10">
              <motion.div className="text-5xl mb-6">{highlight.icon}</motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
              <p className="text-gray-600 mb-4">{highlight.description}</p>
              <div className={`text-sm font-bold ${service.textAccent} ${service.lightAccent} px-3 py-1 rounded-full inline-block`}>{highlight.stat}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
