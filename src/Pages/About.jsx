import { motion } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technological trends to deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "Excellence in every line of code and every user interaction we create.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners in their success journey.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "Transparent communication and honest business practices in everything we do.",
      icon: "🛡️"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const missionPoints = [
    {
      title: "Innovative Solutions",
      description: "Delivering cutting-edge technology that transforms businesses."
    },
    {
      title: "Customer Centric",
      description: "Putting clients first to tailor solutions that truly fit their needs."
    },
    {
      title: "Quality Assurance",
      description: "Commitment to excellence in every product and service."
    },
  ];

  const storyText = `
    Founded in 2018, Neat Technologies started as a small team of passionate developers 
    with a vision to revolutionize the way technology serves businesses. Over the years, 
    we grew into a diverse team of experts dedicated to innovation, collaboration, and 
    delivering outstanding results. Our journey has been fueled by a constant desire to 
    push boundaries and a deep commitment to our clients' success.
  `;

  // Ref for the team section to scroll to
  const teamRef = useRef(null);

  // Scroll handler for the button
  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* About Us Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center my-16 text-[#2E8B9C]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    {/* Left: Story */}
    <div>
      {/* Story Section */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-[#2E8B9C]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Story
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed text-gray-700 whitespace-pre-line"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {storyText}
      </motion.p>

      <button
        onClick={scrollToTeam}
        className="mt-8 bg-[#2E8B9C] hover:bg-[#1F5D6F] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
      >
        Meet the Team
      </button>
    </div>

    {/* Right: Image */}
    <motion.div
      className="rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/aboutus.png"
        alt="More About Us"
        className="w-full h-full object-cover rounded-2xl"
      />
    </motion.div>
  </div>

  {/* Mission Section Below Story + Image */}
  <section className="mt-20">
    <motion.h2
      className="text-4xl font-bold mb-8 text-[#2E8B9C]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Our Mission
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {missionPoints.map((mission, idx) => (
        <motion.div
          key={idx}
          className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 text-center text-[#2E8B9C]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(46, 139, 156, 0.4)" }}
        >
          <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
          <p className="text-gray-700">{mission.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
</section>

      {/* Original Main Content (More About Us text + Team placeholder image) */}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#F7F9FB] via-[#C9E4E7] to-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#2E8B9C] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-[#2E8B9C]">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-[#2E8B9C] text-white rounded-xl p-8 shadow-lg cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(46,139,156,0.4)" }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-[#B0D3D7]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section ref={teamRef} className="py-20 bg-[#1F5D6F] text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Meet the Team</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Our talented team of professionals is dedicated to driving your success.
        </p>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Nida Khan", role: "Chief Technology Officer", expertise: "Full-stack Development" },
              { name: "Zulqarnain ", role: "Head of Design", expertise: "UI/UX Design" },
              { name: "Basit", role: "Senior Developer", expertise: "Mobile & Cloud Solutions" }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-[#C9E4E7] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-[#415A77] mb-2">{member.name}</h3>
                <p className="text-[#2E8B9C] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default About;
