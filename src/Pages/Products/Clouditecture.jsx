import { motion } from "framer-motion";
import { Cloud, Shield, Server, Zap } from "lucide-react";

const Clouditecture = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6cdef2] mb-4">
            Clouditecture
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mb-8">
            Your all-in-one cloud architecture solution — simplifying
            deployment, scaling, and monitoring for modern businesses.
          </p>

          {/* Website CTA Button */}
          <motion.a
            href="https://www.clouditecture.tech/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-6 py-2.5 bg-[#7fe4f6] text-white rounded-lg font-semibold shadow-md hover:shadow-xl transition"
          >
            Visit Website
          </motion.a>
        </motion.div>

        {/* Right Video */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
        >
          <video
            className="w-full h-auto rounded-xl"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/hero-demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </section>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Cloud className="w-8 h-8 text-[#5ae0f7]" />,
            title: "Seamless Cloud Integration",
            desc: "Effortlessly connect your apps with leading cloud providers.",
          },
          {
            icon: <Shield className="w-8 h-8 text-[#2E8B9C]" />,
            title: "Enterprise-Grade Security",
            desc: "Built-in compliance and protection to safeguard your data.",
          },
          {
            icon: <Zap className="w-8 h-8 text-[#2E8B9C]" />,
            title: "High Performance",
            desc: "Optimized for speed, scalability, and reliability.",
          },
          {
            icon: <Server className="w-8 h-8 text-[#2E8B9C]" />,
            title: "Smart Monitoring",
            desc: "Real-time dashboards and alerts to keep systems healthy.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#EAF7F9] mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#415A77] mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
};

export default Clouditecture;