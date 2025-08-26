import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Build powerful, responsive web applications tailored to your business requirements using modern frameworks and technologies.",
      icon: "💻",
      path: "/services/web-development",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "API Development"],
      color: "blue",
      bgGradient: "from-blue-500 to-indigo-600",
      lightBg: "from-blue-50 to-indigo-50"
    },
    {
      title: "Mobile App Solutions",
      description: "Create native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: "📱",
      path: "/services/mobile-app",
      features: ["React Native", "iOS & Android", "Cross-platform", "App Store Deployment"],
      color: "emerald",
      bgGradient: "from-emerald-500 to-teal-600",
      lightBg: "from-emerald-50 to-teal-50"
    },
    {
      title: "Cloud Integration",
      description: "Seamlessly migrate your applications to the cloud and leverage scalable infrastructure for optimal performance.",
      icon: "☁️",
      path: "/services/cloud-integration",
      features: ["AWS & Azure", "Serverless Architecture", "Auto-scaling", "Security & Compliance"],
      color: "purple",
      bgGradient: "from-purple-500 to-violet-600",
      lightBg: "from-purple-50 to-violet-50"
    },
    {
      title: "AI & Automation",
      description: "Implement intelligent automation solutions and AI-powered features to streamline your business processes.",
      icon: "🤖",
      path: "/services/ai-automation",
      features: ["Machine Learning", "Process Automation", "Chatbots & AI", "Data Analytics"],
      color: "amber",
      bgGradient: "from-amber-500 to-orange-600",
      lightBg: "from-amber-50 to-orange-50"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-6xl mb-8"
            animate={{ 
              rotate: [0, 10, -10, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🚀
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Our Services
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive software development services designed to help your business thrive in the digital landscape. From concept to deployment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="text-6xl mr-6"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 15,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-lg">
                  {service.description}
                </p>

                <div className="mb-10">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                    Key Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={featureIndex}
                        className={`px-4 py-2 bg-gradient-to-r ${service.bgGradient} text-white text-sm font-semibold rounded-full shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <Link to={service.path} className="mt-auto">
                  <motion.button
                    className={`w-full bg-gradient-to-r ${service.bgGradient} text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center">
                      Learn More
                      <motion.svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                  </motion.button>
                </Link>
                </div>
              </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full"
              animate={{ 
                scale: [1.5, 1, 1.5],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          <div className="relative z-10">
            <motion.div
              className="text-5xl mb-8"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎯
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can bring your vision to life with our expertise, innovation, and proven track record of success.
          </p>
          <Link to="/contact">
            <motion.button
              className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center">
                Get Started Today
                <motion.span
                  className="ml-3 text-2xl"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚀
                </motion.span>
              </span>
            </motion.button>
          </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
