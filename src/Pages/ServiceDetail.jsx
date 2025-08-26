import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

// 🎨 Futuristic Three.js Background
const HeroScene = () => {
  const particlesCount = 2500;
  const particles = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    particles[i] = (Math.random() - 0.5) * 12; // spread around
  }

  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#00ccff" />
      <pointLight position={[-5, -5, -5]} intensity={1.5} color="#7700ff" />

      {/* Torus Knot (futuristic shape) */}
      <TorusKnot args={[1.5, 0.4, 256, 64]} rotation={[0.4, 0.2, 0.3]}>
        <meshStandardMaterial
          color={"#00ffff"}
          emissive={"#00ccff"}
          emissiveIntensity={1.5}
          wireframe
        />
      </TorusKnot>

      {/* Floating Particles */}
      <Points positions={particles} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

      {/* Controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  );
};

const ServiceDetail = () => {
  const { serviceType } = useParams();

  const serviceData = {
    "web-development": {
      title: "Custom Web Development",
      icon: "💻",
      hero:
        "Build powerful, responsive web applications that drive your business forward with modern technologies and best practices.",
      features: [
        { title: "Modern Frontend Development", description: "Using React, Next.js, and other modern frameworks to create fast, interactive user interfaces.", icon: "⚡" },
        { title: "Robust Backend Solutions", description: "Node.js, Python, and cloud-based backends that scale with your business needs.", icon: "🏗️" },
        { title: "Database Architecture", description: "Optimized database design and integration for efficient data management.", icon: "🗄️" },
        { title: "API Development", description: "RESTful and GraphQL APIs that connect your applications seamlessly.", icon: "🔗" },
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Docker"],
      process: ["Discovery & Planning", "UI/UX Design", "Development & Testing", "Deployment & Launch"],
    },
    "mobile-app": {
      title: "Mobile App Solutions",
      icon: "📱",
      hero:
        "Create exceptional mobile experiences that engage users and drive business growth across iOS and Android platforms.",
      features: [
        { title: "Cross-Platform Development", description: "React Native and Flutter apps that work seamlessly across iOS and Android.", icon: "📱" },
        { title: "Native Performance", description: "Optimized code ensuring smooth performance and native feel.", icon: "⚡" },
        { title: "App Store Optimization", description: "Complete deployment and optimization for App Store and Google Play.", icon: "🚀" },
        { title: "Backend Integration", description: "Seamless integration with existing systems and cloud services.", icon: "🔄" },
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "Push Notifications", "Analytics"],
      process: ["Concept & Strategy", "Design & Prototyping", "Development & Testing", "App Store Deployment"],
    },
    "cloud-integration": {
      title: "Cloud Integration",
      icon: "☁️",
      hero:
        "Leverage the power of cloud computing to scale your applications and optimize performance with enterprise-grade solutions.",
      features: [
        { title: "Cloud Migration", description: "Seamless migration of existing applications to AWS, Azure, or Google Cloud.", icon: "🚀" },
        { title: "Serverless Architecture", description: "Cost-effective, auto-scaling serverless solutions that adapt to demand.", icon: "⚡" },
        { title: "Container Orchestration", description: "Docker and Kubernetes deployment for enhanced scalability and management.", icon: "🐳" },
        { title: "Security & Compliance", description: "Enterprise-grade security measures and compliance with industry standards.", icon: "🛡️" },
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      process: ["Cloud Assessment", "Migration Planning", "Implementation", "Optimization & Monitoring"],
    },
    "ai-automation": {
      title: "AI & Automation",
      icon: "🤖",
      hero:
        "Transform your business processes with intelligent automation and AI-powered solutions that drive efficiency and innovation.",
      features: [
        { title: "Process Automation", description: "Automated workflows that reduce manual tasks and improve efficiency.", icon: "⚙️" },
        { title: "Machine Learning Models", description: "Custom ML models for predictive analytics and intelligent insights.", icon: "🧠" },
        { title: "Chatbots & Virtual Assistants", description: "AI-powered customer service solutions that work 24/7.", icon: "💬" },
        { title: "Data Analytics", description: "Advanced analytics and reporting for data-driven decision making.", icon: "📊" },
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Natural Language Processing", "Computer Vision", "RPA", "Analytics"],
      process: ["Use Case Analysis", "Data Preparation", "Model Development", "Integration & Deployment"],
    },
  };

  const service = serviceData[serviceType];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-text mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline font-semibold">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Hero Section with Futuristic 3D Background */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-00/80 via-cyan-700/70 to-black/90 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="text-8xl mb-6 drop-shadow-lg">{service.icon}</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              {service.title}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-200">
              {service.hero}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <motion.h2
              className="text-3xl font-extrabold text-text text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Key Features & Benefits
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg  overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="p-6">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-text mb-2">{feature.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <motion.h2
                className="text-2xl font-extrabold text-text text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Our Process
              </motion.h2>
              <div className="flex flex-col gap-4">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-text">{step}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <motion.h2
                className="text-2xl font-extrabold text-black text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Technologies We Use
              </motion.h2>
              <div className="flex flex-wrap justify-center gap-4">
                {service.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-gray-100  text-gray-600 rounded-full  font-semibold cursor-pointer transition hover:bg-gray-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-100 to-cyan-900 text-center text-white">
        <motion.h2
          className="text-3xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Get Started?
        </motion.h2>
        <p className="mb-8 max-w-2xl mx-auto text-xl text-gray-200">
          Let's discuss how our {service.title.toLowerCase()} can help transform your business.
        </p>
        <Link to="/contact">
          <motion.button
            className="bg-accent text-gray-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default ServiceDetail;
