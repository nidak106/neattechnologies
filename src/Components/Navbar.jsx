import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Transform your ideas into high-performance web applications that scale with your business and delight your users.",
      icon: "💻",
      path: "/services/web-development",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "API Development"],
      color: "blue",
      bgGradient: "from-blue-50 to-indigo-100",
      hoverGradient: "from-blue-100 to-indigo-200"
    },
    {
      title: "Mobile App Solutions",
      description: "Build mobile apps that users love with native performance and cross-platform compatibility.",
      icon: "📱",
      path: "/services/mobile-app",
      features: ["React Native", "iOS & Android", "Cross-platform", "App Store Deployment"],
      color: "emerald",
      bgGradient: "from-emerald-50 to-teal-100",
      hoverGradient: "from-emerald-100 to-teal-200"
    },
    {
      title: "Cloud Integration",
      description: "Scale your applications with enterprise-grade cloud infrastructure that grows with your business.",
      icon: "☁️",
      path: "/services/cloud-integration",
      features: ["AWS & Azure", "Serverless Architecture", "Auto-scaling", "Security & Compliance"],
      color: "purple",
      bgGradient: "from-purple-50 to-violet-100",
      hoverGradient: "from-purple-100 to-violet-200"
    },
    {
      title: "AI & Automation",
      description: "Automate your workflows and unlock insights with custom AI solutions that work 24/7.",
      icon: "🤖",
      path: "/services/ai-automation",
      features: ["Machine Learning", "Process Automation", "Chatbots & AI", "Data Analytics"],
      color: "amber",
      bgGradient: "from-amber-50 to-orange-100",
      hoverGradient: "from-amber-100 to-orange-200"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🛟" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              We provide comprehensive software development services designed to help your business thrive in the digital landscape. From concept to deployment, we've got you covered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each service is crafted with precision and tailored to deliver exceptional results for your unique business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="p-10 flex flex-col h-full relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="text-8xl transform rotate-12">{service.icon}</div>
                </div>
                
                <div className="flex items-center mb-8 relative z-10">
                  <div className="text-6xl mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <div className={`w-16 h-1 bg-${service.color}-500 rounded-full`}></div>
                  </div>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed flex-grow text-lg">
                  {service.description}
                </p>

                <div className="mb-10">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                    Key Technologies
                  </h4>
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
