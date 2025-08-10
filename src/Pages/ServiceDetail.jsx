import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceType } = useParams();

  const serviceData = {
    'web-development': {
      title: 'Custom Web Development',
      icon: '💻',
      hero: 'Build powerful, responsive web applications that drive your business forward with modern technologies and best practices.',
      description: 'Our web development services combine cutting-edge technology with elegant design to create web applications that not only look great but perform exceptionally. We specialize in creating scalable, maintainable, and secure web solutions that grow with your business.',
      features: [
        {
          title: 'Modern Frontend Development',
          description: 'Using React, Next.js, and other modern frameworks to create fast, interactive user interfaces.',
          icon: '⚡'
        },
        {
          title: 'Robust Backend Solutions',
          description: 'Node.js, Python, and cloud-based backends that scale with your business needs.',
          icon: '🏗️'
        },
        {
          title: 'Database Architecture',
          description: 'Optimized database design and integration for efficient data management.',
          icon: '🗄️'
        },
        {
          title: 'API Development',
          description: 'RESTful and GraphQL APIs that connect your applications seamlessly.',
          icon: '🔗'
        }
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
      process: [
        'Discovery & Planning',
        'UI/UX Design',
        'Development & Testing',
        'Deployment & Launch'
      ]
    },
    'mobile-app': {
      title: 'Mobile App Solutions',
      icon: '📱',
      hero: 'Create exceptional mobile experiences that engage users and drive business growth across iOS and Android platforms.',
      description: 'We develop native and cross-platform mobile applications that deliver outstanding user experiences. Our mobile solutions are designed to be fast, intuitive, and feature-rich, helping you reach your audience wherever they are.',
      features: [
        {
          title: 'Cross-Platform Development',
          description: 'React Native and Flutter apps that work seamlessly across iOS and Android.',
          icon: '📱'
        },
        {
          title: 'Native Performance',
          description: 'Optimized code ensuring smooth performance and native feel.',
          icon: '⚡'
        },
        {
          title: 'App Store Optimization',
          description: 'Complete deployment and optimization for App Store and Google Play.',
          icon: '🚀'
        },
        {
          title: 'Backend Integration',
          description: 'Seamless integration with existing systems and cloud services.',
          icon: '🔄'
        }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'Push Notifications', 'Analytics'],
      process: [
        'Concept & Strategy',
        'Design & Prototyping',
        'Development & Testing',
        'App Store Deployment'
      ]
    },
    'cloud-integration': {
      title: 'Cloud Integration',
      icon: '☁️',
      hero: 'Leverage the power of cloud computing to scale your applications and optimize performance with enterprise-grade solutions.',
      description: 'Our cloud integration services help you harness the full potential of cloud computing. We provide end-to-end cloud solutions, from migration to optimization, ensuring your applications are scalable, secure, and cost-effective.',
      features: [
        {
          title: 'Cloud Migration',
          description: 'Seamless migration of existing applications to AWS, Azure, or Google Cloud.',
          icon: '🚀'
        },
        {
          title: 'Serverless Architecture',
          description: 'Cost-effective, auto-scaling serverless solutions that adapt to demand.',
          icon: '⚡'
        },
        {
          title: 'Container Orchestration',
          description: 'Docker and Kubernetes deployment for enhanced scalability and management.',
          icon: '🐳'
        },
        {
          title: 'Security & Compliance',
          description: 'Enterprise-grade security measures and compliance with industry standards.',
          icon: '🛡️'
        }
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
      process: [
        'Cloud Assessment',
        'Migration Planning',
        'Implementation',
        'Optimization & Monitoring'
      ]
    },
    'ai-automation': {
      title: 'AI & Automation',
      icon: '🤖',
      hero: 'Transform your business processes with intelligent automation and AI-powered solutions that drive efficiency and innovation.',
      description: 'We help businesses leverage artificial intelligence and automation to streamline operations, improve decision-making, and enhance customer experiences. Our AI solutions are practical, scalable, and designed to deliver measurable results.',
      features: [
        {
          title: 'Process Automation',
          description: 'Automated workflows that reduce manual tasks and improve efficiency.',
          icon: '⚙️'
        },
        {
          title: 'Machine Learning Models',
          description: 'Custom ML models for predictive analytics and intelligent insights.',
          icon: '🧠'
        },
        {
          title: 'Chatbots & Virtual Assistants',
          description: 'AI-powered customer service solutions that work 24/7.',
          icon: '💬'
        },
        {
          title: 'Data Analytics',
          description: 'Advanced analytics and reporting for data-driven decision making.',
          icon: '📊'
        }
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Natural Language Processing', 'Computer Vision', 'RPA', 'Analytics'],
      process: [
        'Use Case Analysis',
        'Data Preparation',
        'Model Development',
        'Integration & Deployment'
      ]
    }
  };

  const service = serviceData[serviceType];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E8B9C] via-[#415A77] to-[#9BBEC8]">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-[#F0F4F8] mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[#CCE3F2] hover:text-[#D1E8FF] font-semibold underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E8B9C] via-[#415A77] to-[#9BBEC8]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#415A77] via-[#2E8B9C] to-[#9BBEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl mb-6">{service.icon}</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#F0F4F8] mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-[#CCE3F2] max-w-3xl mx-auto leading-relaxed">
              {service.hero}
            </p>
          </motion.div>
        </div>
      </section>

     <section className="py-20 bg-[#E5F1F8]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-[#1B2B3A] mb-6">
          What We Offer
        </h2>

        <div className="space-y-8">
          {service.process.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                <span className="bg-[#2E8B9C] text-[#F0F4F8] w-7 h-7 rounded-full flex items-center justify-center font-semibold mr-4">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-[#1B2B3A]">{step}</h3>
              </div>
              {/* Optional description or leave blank if no description */}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-[#CCE3F2] aspect-square rounded-2xl flex items-center justify-center shadow-md"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center text-[#415A77]">
          <div className="text-6xl mb-4">{service.icon}</div>
          <p className="text-lg font-medium">Service Illustration</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* Features Grid */}
      <section className="py-20 bg-[#E5F1F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-[#1B2B3A] text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Key Features & Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1B2B3A] mb-3">{feature.title}</h3>
                <p className="text-[#415A77] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-[#E5F1F8]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Technologies We Use
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {service.technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-[#1B2B3A] font-semibold">{tech}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#415A77] via-[#2E8B9C] to-[#9BBEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-[#F0F4F8] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#CCE3F2] mb-8 max-w-2xl mx-auto text-xl">
              Let's discuss how our {service.title.toLowerCase()} can help transform your business.
            </p>
            <Link to="/contact">
              <motion.button 
                className="bg-[#F0F4F8] text-[#2E8B9C] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#CCE3F2] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
