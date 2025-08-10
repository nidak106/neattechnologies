import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements. Through detailed discussions and research, we create a comprehensive project roadmap that aligns with your vision.",
      icon: "🔍",
      duration: "1-2 weeks"
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Our design team creates intuitive user experiences while our architects plan the technical foundation. We focus on creating solutions that are both beautiful and technically sound.",
      icon: "🎨",
      duration: "2-3 weeks"
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "Using agile methodologies, we develop your solution in iterative sprints. You'll have regular updates and opportunities to provide feedback throughout the development process.",
      icon: "⚡",
      duration: "4-12 weeks"
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your application works flawlessly across all devices and scenarios. We conduct automated testing, manual testing, and performance optimization.",
      icon: "🧪",
      duration: "1-2 weeks"
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process, from server setup to domain configuration. Your application goes live with comprehensive monitoring and backup systems in place.",
      icon: "🚀",
      duration: "1 week"
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Our relationship doesn't end at launch. We provide ongoing support, regular updates, and maintenance to ensure your application continues to perform optimally.",
      icon: "🛠️",
      duration: "Ongoing"
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach with regular feedback cycles",
      icon: "🔄"
    },
    {
      title: "DevOps Integration",
      description: "Continuous integration and deployment practices",
      icon: "⚙️"
    },
    {
      title: "Quality First",
      description: "Comprehensive testing and code review processes",
      icon: "✅"
    },
    {
      title: "Client Communication",
      description: "Regular updates and transparent project tracking",
      icon: "💬"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2E8B9C] via-[#415A77] to-[#9BBEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How We Work
            </h1>
            <p className="text-xl text-[#F7F9FB] max-w-3xl mx-auto leading-relaxed">
              Our proven methodology ensures successful project delivery through clear communication, 
              iterative development, and continuous collaboration with our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Development Process
          </motion.h2>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Step Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <span className="text-4xl mr-4">{step.icon}</span>
                    <span className="text-sm font-bold text-[#2E8B9C] bg-[#C9E4E7] px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-32 h-32 bg-[#2E8B9C] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow industry best practices and proven methodologies to ensure 
              consistent, high-quality results for every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#F7F9FB] to-[#C9E4E7] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-[#2E8B9C] mb-3">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              While every project is unique, here's what you can typically expect 
              for a medium-complexity web application.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#F7F9FB] to-[#C9E4E7] rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-[#C9E4E7] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <span className="text-sm text-[#2E8B9C] font-medium">{step.duration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2E8B9C] to-[#415A77]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-[#F7F9FB] mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom development plan that fits your needs and timeline.
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
      </section>
    </div>
  );
};

export default HowWeWork;
