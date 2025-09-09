import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, Cloud, Bot } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "Build powerful, responsive web applications tailored to your business requirements using modern frameworks and technologies.",
      icon: <Code2 className="w-8 h-8" />,
      path: "/services/web-development",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Database Integration",
        "API Development",
      ],
      bgClass: "bg-gradient-to-br from-[#2E8B9C] to-[#9BBEC8] text-white",
    },
    {
      title: "Mobile App Solutions",
      description:
        "Create native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/services/mobile-app",
      features: [
        "React Native",
        "iOS & Android",
        "Cross-platform",
        "App Store Deployment",
      ],
      bgClass:
        "bg-gradient-to-br from-[#2E8B9C] via-[#6EAEBB] to-[#9BBEC8] text-white",
    },
    {
      title: "Cloud Integration",
      description:
        "Seamlessly migrate your applications to the cloud and leverage scalable infrastructure for optimal performance.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/services/cloud-integration",
      features: [
        "AWS & Azure",
        "Serverless Architecture",
        "Auto-scaling",
        "Security & Compliance",
      ],
      bgClass: "bg-gradient-to-br from-[#256D7A] to-[#2E8B9C] text-white",
    },
    {
      title: "AI & Automation",
      description:
        "Implement intelligent automation solutions and AI-powered features to streamline your business processes.",
      icon: <Bot className="w-8 h-8" />,
      path: "/services/ai-automation",
      features: [
        "Machine Learning",
        "Process Automation",
        "Chatbots & AI",
        "Data Analytics",
      ],
      bgClass: "bg-gradient-to-br from-[#1F4D56] to-[#2E8B9C] text-white",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
     <div className="max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-6xl mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#2E8B9C] to-[#9BBEC8] bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive software development services designed to help your business thrive in the digital landscape. From concept to deployment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid (all 4 fit) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`w-full rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group relative p-8 flex flex-col ${service.bgClass}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <p className="mb-6 text-base opacity-90 flex-grow">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Link to={service.path}>
                <motion.button
                  className="w-full bg-white/60 text-emerald-800 py-3 px-6 rounded-xl cursor-pointer font-semibold text-base shadow-md hover:text-white backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More →
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
