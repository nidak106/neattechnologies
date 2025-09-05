// src/components/ServiceDetails/StepsSection.jsx
import { motion } from "framer-motion";

const StepsSection = ({ service }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How We Deliver Results</h2>
        <p className="text-xl text-gray-600">Our proven process ensures successful outcomes every time.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {service.steps.map((step, index) => (
          <motion.div key={index} className="text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.div className={`w-20 h-20 ${service.accentColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <span className="text-3xl">{step.icon}</span>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
