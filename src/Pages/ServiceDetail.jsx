import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const ServiceDetail = () => {
  const { serviceType } = useParams();

  const serviceData = {
    "web-development": {
      title: "Custom Web Development",
      subtitle: "Build powerful web applications that scale with your business",
      hero: "Transform your ideas into high-performance web applications with modern technologies and best practices.",
      icon: "💻",
      color: "blue",
      bgGradient: "from-blue-600 via-blue-700 to-indigo-800",
      accentColor: "bg-blue-600",
      lightAccent: "bg-blue-50",
      textAccent: "text-blue-600",
      borderAccent: "border-blue-600",
      highlights: [
        { 
          title: "Lightning Fast Performance", 
          description: "Optimized code and modern frameworks ensure your web app loads instantly and runs smoothly.",
          icon: "⚡",
          stat: "3x faster loading"
        },
        { 
          title: "Responsive Design", 
          description: "Beautiful interfaces that work perfectly on desktop, tablet, and mobile devices.",
          icon: "📱",
          stat: "100% mobile ready"
        },
        { 
          title: "Scalable Architecture", 
          description: "Built to handle growth from hundreds to millions of users without breaking a sweat.",
          icon: "🚀",
          stat: "Scales to millions"
        },
        { 
          title: "SEO Optimized", 
          description: "Search engine friendly code that helps your business get discovered online.",
          icon: "🔍",
          stat: "Top search rankings"
        }
      ],
      steps: [
        { title: "Discovery & Planning", description: "We analyze your requirements and create a detailed roadmap", icon: "🎯" },
        { title: "Design & Prototype", description: "Interactive prototypes that bring your vision to life", icon: "🎨" },
        { title: "Development & Testing", description: "Clean, maintainable code with comprehensive testing", icon: "⚙️" },
        { title: "Launch & Support", description: "Smooth deployment with ongoing maintenance and updates", icon: "🚀" }
      ],
      testimonials: [
        { name: "Sarah Chen", role: "CEO, TechStart", quote: "Our web app increased user engagement by 300% after the redesign.", avatar: "https://i.pravatar.cc/100?img=1" },
        { name: "Mike Rodriguez", role: "CTO, GrowthCo", quote: "The performance improvements were incredible. Page load times dropped by 70%.", avatar: "https://i.pravatar.cc/100?img=2" }
      ],
      stats: [
        { number: "50+", label: "Web Apps Built" },
        { number: "99.9%", label: "Uptime Guarantee" },
        { number: "2.5s", label: "Avg Load Time" }
      ]
    },
    "mobile-app": {
      title: "Mobile App Solutions",
      subtitle: "Native and cross-platform apps that users love",
      hero: "Create exceptional mobile experiences that engage users and drive business growth across iOS and Android.",
      icon: "📱",
      color: "emerald",
      bgGradient: "from-emerald-600 via-teal-700 to-cyan-800",
      accentColor: "bg-emerald-600",
      lightAccent: "bg-emerald-50",
      textAccent: "text-emerald-600",
      borderAccent: "border-emerald-600",
      highlights: [
        { 
          title: "Cross-Platform Excellence", 
          description: "One codebase, two platforms. Save time and money while reaching all your users.",
          icon: "🔄",
          stat: "50% faster delivery"
        },
        { 
          title: "Native Performance", 
          description: "Smooth animations and responsive interactions that feel truly native.",
          icon: "⚡",
          stat: "60fps animations"
        },
        { 
          title: "Offline Capabilities", 
          description: "Your app works even without internet connection, syncing when back online.",
          icon: "📶",
          stat: "100% offline ready"
        },
        { 
          title: "App Store Success", 
          description: "Optimized for app store approval and featuring to maximize downloads.",
          icon: "⭐",
          stat: "98% approval rate"
        }
      ],
      steps: [
        { title: "Strategy & Research", description: "Market analysis and user research to define your app's success", icon: "📊" },
        { title: "UX/UI Design", description: "Intuitive designs that users love and understand instantly", icon: "🎨" },
        { title: "Development & Testing", description: "Robust development with real device testing across platforms", icon: "📱" },
        { title: "Launch & Growth", description: "App store optimization and post-launch growth strategies", icon: "🚀" }
      ],
      testimonials: [
        { name: "Jessica Park", role: "Founder, FitLife", quote: "Our app hit 100K downloads in the first month. The UX is incredible.", avatar: "https://i.pravatar.cc/100?img=3" },
        { name: "David Kim", role: "Product Manager, ShopEasy", quote: "Users love how smooth and fast the app feels. 5-star reviews keep coming.", avatar: "https://i.pravatar.cc/100?img=4" }
      ],
      stats: [
        { number: "30+", label: "Apps Published" },
        { number: "4.8★", label: "Avg App Rating" },
        { number: "2M+", label: "Total Downloads" }
      ]
    },
    "cloud-integration": {
      title: "Cloud Integration",
      subtitle: "Scalable infrastructure that grows with your business",
      hero: "Leverage the power of cloud computing to scale your applications and optimize performance with enterprise-grade solutions.",
      icon: "☁️",
      color: "purple",
      bgGradient: "from-purple-600 via-violet-700 to-indigo-800",
      accentColor: "bg-purple-600",
      lightAccent: "bg-purple-50",
      textAccent: "text-purple-600",
      borderAccent: "border-purple-600",
      highlights: [
        { 
          title: "Auto-Scaling Infrastructure", 
          description: "Your applications automatically scale up or down based on demand, saving costs.",
          icon: "📈",
          stat: "Auto-scales instantly"
        },
        { 
          title: "99.99% Uptime", 
          description: "Enterprise-grade reliability with redundancy and failover protection.",
          icon: "🛡️",
          stat: "99.99% uptime SLA"
        },
        { 
          title: "Global CDN", 
          description: "Lightning-fast content delivery worldwide with edge caching.",
          icon: "🌍",
          stat: "Global reach"
        },
        { 
          title: "Cost Optimization", 
          description: "Pay only for what you use with intelligent resource management.",
          icon: "💰",
          stat: "40% cost savings"
        }
      ],
      steps: [
        { title: "Infrastructure Audit", description: "Comprehensive analysis of your current setup and requirements", icon: "🔍" },
        { title: "Migration Strategy", description: "Detailed plan for seamless transition to cloud infrastructure", icon: "📋" },
        { title: "Implementation", description: "Careful migration with zero downtime and full data integrity", icon: "⚙️" },
        { title: "Optimization", description: "Ongoing monitoring and optimization for peak performance", icon: "📊" }
      ],
      testimonials: [
        { name: "Robert Chen", role: "CTO, DataFlow", quote: "Migration was seamless. Our costs dropped 40% while performance improved.", avatar: "https://i.pravatar.cc/100?img=5" },
        { name: "Lisa Wang", role: "DevOps Lead, ScaleTech", quote: "The auto-scaling saved us during our viral launch. No downtime at all.", avatar: "https://i.pravatar.cc/100?img=6" }
      ],
      stats: [
        { number: "100+", label: "Cloud Migrations" },
        { number: "40%", label: "Avg Cost Reduction" },
        { number: "24/7", label: "Monitoring" }
      ]
    },
    "ai-automation": {
      title: "AI & Automation",
      subtitle: "Intelligent solutions that work while you sleep",
      hero: "Transform your business processes with intelligent automation and AI-powered solutions that drive efficiency and innovation.",
      icon: "🤖",
      color: "amber",
      bgGradient: "from-amber-600 via-orange-700 to-red-800",
      accentColor: "bg-amber-600",
      lightAccent: "bg-amber-50",
      textAccent: "text-amber-600",
      borderAccent: "border-amber-600",
      highlights: [
        { 
          title: "Process Automation", 
          description: "Eliminate repetitive tasks and free your team to focus on high-value work.",
          icon: "⚙️",
          stat: "80% time savings"
        },
        { 
          title: "Intelligent Insights", 
          description: "AI-powered analytics that reveal hidden patterns in your data.",
          icon: "🧠",
          stat: "Predictive accuracy"
        },
        { 
          title: "24/7 AI Assistants", 
          description: "Smart chatbots and virtual assistants that never sleep.",
          icon: "💬",
          stat: "Round-the-clock service"
        },
        { 
          title: "Custom ML Models", 
          description: "Tailored machine learning solutions for your specific business needs.",
          icon: "🎯",
          stat: "Custom-built AI"
        }
      ],
      steps: [
        { title: "Process Analysis", description: "Identify automation opportunities and potential ROI", icon: "🔍" },
        { title: "AI Strategy", description: "Design intelligent solutions tailored to your workflows", icon: "🧠" },
        { title: "Development & Training", description: "Build and train AI models with your specific data", icon: "⚙️" },
        { title: "Integration & Scaling", description: "Seamless integration with monitoring and continuous improvement", icon: "📈" }
      ],
      testimonials: [
        { name: "Amanda Foster", role: "Operations Director, AutoCorp", quote: "AI automation reduced our processing time by 80%. Game-changing results.", avatar: "https://i.pravatar.cc/100?img=7" },
        { name: "James Liu", role: "CEO, SmartLogistics", quote: "The predictive analytics helped us reduce costs by $2M annually.", avatar: "https://i.pravatar.cc/100?img=8" }
      ],
      stats: [
        { number: "25+", label: "AI Solutions Built" },
        { number: "80%", label: "Avg Time Savings" },
        { number: "$2M+", label: "Client Savings" }
      ]
    }
  };

  const service = serviceData[serviceType];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-blue-600 hover:underline font-semibold">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative py-32 bg-gradient-to-br ${service.bgGradient} text-white overflow-hidden`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-8xl mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {service.icon}
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-2xl mb-8 text-gray-100 font-light leading-relaxed">
                {service.subtitle}
              </p>
              <p className="text-lg mb-12 text-gray-200 leading-relaxed">
                {service.hero}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact">
                  <motion.button
                    className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Your Project
                  </motion.button>
                </Link>
                <motion.button
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-9xl"
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/15 rounded-full flex items-center justify-center"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🚀
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section id="highlights" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our {service.title}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key benefits that make our solution the perfect choice for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 ${service.lightAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {highlight.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{highlight.description}</p>
                  <div className={`text-sm font-bold ${service.textAccent} ${service.lightAccent} px-3 py-1 rounded-full inline-block`}>
                    {highlight.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Deliver Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures successful outcomes every time.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {service.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className={`w-20 h-20 ${service.accentColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-3xl">{step.icon}</span>
                  </motion.div>
                  <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 ${service.lightAccent} rounded-full flex items-center justify-center text-sm font-bold ${service.textAccent}`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof/Trust Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about working with us.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {service.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`text-4xl lg:text-5xl font-bold ${service.textAccent} mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-24 bg-gradient-to-br ${service.bgGradient} text-white relative overflow-hidden`}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                               radial-gradient(circle at 80% 50%, white 2px, transparent 2px)`,
              backgroundSize: '100px 100px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-6xl mb-8"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {service.icon}
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-12 text-gray-100 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of successful companies who chose our {service.title.toLowerCase()} solutions. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button
                  className="bg-white text-gray-900 px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  className="border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;