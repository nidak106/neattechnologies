import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const stepsPreview = [
    { number: "01", title: "Discovery & Planning", icon: "🔍" },
    { number: "02", title: "Design & Architecture", icon: "🎨" },
    { number: "03", title: "Development & Implementation", icon: "⚡" },
  ];

  const methodologiesPreview = [
    { title: "Agile Development", icon: "🔄" },
    { title: "DevOps Integration", icon: "⚙️" },
  ];

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [spotlightActive, setSpotlightActive] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat pt-26 overflow-hidden"
        style={{
          minHeight: "130vh",
          backgroundImage: "url('/bg3.png')",
        }}
        onMouseMove={(e) => {
          const { clientX, clientY } = e;
          setCursor({ x: clientX, y: clientY });
          if (!spotlightActive) setSpotlightActive(true);
        }}
        onMouseLeave={() => setSpotlightActive(false)}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Cursor spotlight effect */}
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500`}
          style={{
            opacity: spotlightActive ? 1 : 0,
            background: `radial-gradient(600px circle at ${cursor.x}px ${cursor.y}px, rgba(255,255,255,0.15), transparent 80%)`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-10 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovating the Future,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#88dce0] to-[#3fa7a0]">
              Neatly.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Neat Technologies is a leading provider of bespoke software solutions,
            empowering startups and enterprises to transform their digital presence
            with cutting-edge technology and elegant design.
          </motion.p>

          {/* Services Cards inside Hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {[
              {
                icon: "💻",
                title: "Custom Web Development",
                description:
                  "Build powerful, responsive web applications tailored to your business needs.",
              },
              {
                icon: "📱",
                title: "Mobile App Solutions",
                description:
                  "Create native and cross-platform apps delivering exceptional user experiences.",
              },
              {
                icon: "☁️",
                title: "Cloud Integration",
                description:
                  "Seamlessly migrate to the cloud for scalable, high-performance infrastructure.",
              },
            ].map(({ icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="text-5xl text-[#2E8B9C] mb-4"
                >
                  {icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-[#1D3557] mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>

          {/* Single Button Below Cards */}
          <Link to="/services">
            <motion.button
              className="px-10 py-4 rounded-xl font-semibold text-lg shadow-md
              bg-gradient-to-r from-[#A8DADC] to-[#9BBEC8] text-[#1F5D6F]
              hover:from-[#9BBEC8] hover:to-[#A8DADC]
              transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1D3557] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear directly from the companies and founders who trusted us with
              their projects.
            </p>
          </motion.div>

          {/* Carousel-like layout */}
          <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, StartupX",
                review:
                  "Neat Technologies turned our idea into a reality faster than we imagined. Their team is highly skilled and approachable.",
                avatar: "https://i.pravatar.cc/100?img=1",
              },
              {
                name: "Michael Lee",
                role: "CTO, TechNova",
                review:
                  "Their attention to detail and ability to adapt was outstanding. We saw improvements in performance and user experience right away.",
                avatar: "https://i.pravatar.cc/100?img=2",
              },
              {
                name: "Priya Patel",
                role: "Founder, CloudWorks",
                review:
                  "Working with Neat Technologies felt effortless. They delivered a scalable cloud solution that exceeded expectations.",
                avatar: "https://i.pravatar.cc/100?img=3",
              },
            ].map(({ name, role, review, avatar }, idx) => (
              <motion.div
                key={idx}
                className="bg-white min-w-[300px] max-w-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow snap-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-[#1D3557]">{name}</h3>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">“{review}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-[#F7F9FB] via-[#E6F0F2] to-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3557] mb-4">
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B9C] to-[#9BBEC8]">
                Neat Technologies?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional software solutions with precision,
              innovation, and unmatched quality.
            </p>
          </motion.div>

          {/* Three-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Expert Development",
                description:
                  "Our team of skilled developers creates robust, scalable solutions tailored to your business needs.",
                icon: "🚀",
              },
              {
                title: "Modern Technology",
                description:
                  "We leverage cutting-edge technologies and best practices to ensure your project stays ahead of the curve.",
                icon: "⚡",
              },
              {
                title: "Client-Focused Approach",
                description:
                  "Your success is our priority. We work closely with you throughout every step of the development process.",
                icon: "🎯",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1D3557] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-[#F0F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#2E8B9C] mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our streamlined approach ensures clear communication, iterative
              development, and timely delivery.
            </p>
          </motion.div>

          {/* Steps timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#A8DADC]/40 transform -translate-x-1/2"></div>
            <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
              {stepsPreview.map(({ number, title, icon }, idx) => (
                <motion.div
                  key={number}
                  className="relative flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <div className="text-4xl mb-2">{icon}</div>
                  <div className="text-2xl font-bold text-[#2E8B9C] mb-2">
                    {number}
                  </div>
                  <h3 className="text-lg font-medium text-[#1D3557]">
                    {title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Methodologies */}
          <div className="flex justify-center gap-6 mt-16 flex-wrap">
            {methodologiesPreview.map(({ title, icon }) => (
              <motion.div
                key={title}
                className="bg-white rounded-full px-8 py-4 flex items-center gap-3 text-lg font-semibold text-[#2E8B9C] shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl">{icon}</span>
                {title}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
