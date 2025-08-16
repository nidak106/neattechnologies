import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Build powerful, responsive web applications tailored to your business requirements using modern frameworks and technologies.",
      icon: "💻",
      path: "/services/web-development",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "API Development"]
    },
    {
      title: "Mobile App Solutions",
      description: "Create native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: "📱",
      path: "/services/mobile-app",
      features: ["React Native", "iOS & Android", "Cross-platform", "App Store Deployment"]
    },
    {
      title: "Cloud Integration",
      description: "Seamlessly migrate your applications to the cloud and leverage scalable infrastructure for optimal performance.",
      icon: "☁️",
      path: "/services/cloud-integration",
      features: ["AWS & Azure", "Serverless Architecture", "Auto-scaling", "Security & Compliance"]
    },
    {
      title: "AI & Automation",
      description: "Implement intelligent automation solutions and AI-powered features to streamline your business processes.",
      icon: "🤖",
      path: "/services/ai-automation",
      features: ["Machine Learning", "Process Automation", "Chatbots & AI", "Data Analytics"]
    }
  ];

  return (
    <div className="bg-[#E5F1F8] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive software development services designed to help your business thrive in the digital landscape. From concept to deployment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Key Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <Link to={service.path} className="mt-auto">
               <motion.button
  className="w-48 mx-auto bg-[#2E8B9C] text-white border-2 border-[#2E8B9C] py-2.5 px-6 rounded-full font-semibold hover:bg-[#1F6B7A] hover:border-[#1F6B7A] transition-colors duration-200"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Learn More
</motion.button>
                  </Link>
                </div>
              </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-br from-[#415A77] via-[#2E8B9C] to-[#9BBEC8] rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your vision to life with our expertise and innovation.
          </p>
          <Link to="/contact">
            <motion.button
              className="bg-white text-[#2E8B9C] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
