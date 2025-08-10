import { motion } from 'framer-motion';

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2E8B9C] via-[#415A77] to-[#9BBEC8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-100">
              We are passionate technologists dedicated to creating software solutions 
              that make a real difference in the world.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#2E8B9C] mb-6">
                Our Mission
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                At Neat Technologies, we believe that great software is more than just code—it's 
                about solving real problems and creating meaningful experiences. Our mission is 
                to empower businesses of all sizes with innovative, scalable, and elegant 
                technology solutions.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                Founded by a team of experienced developers and designers, we combine technical 
                expertise with creative thinking to deliver solutions that not only meet your 
                requirements but exceed your expectations. We're committed to building long-term 
                partnerships with our clients and helping them achieve their digital transformation goals.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#9BBEC8] rounded-full mr-3"></div>
                  <span className="text-gray-100">Expert team with 5+ years of experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#9BBEC8] rounded-full mr-3"></div>
                  <span className="text-gray-100">Cutting-edge technology stack</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#9BBEC8] rounded-full mr-3"></div>
                  <span className="text-gray-100">Agile development methodology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#9BBEC8] rounded-full mr-3"></div>
                  <span className="text-gray-100">24/7 support and maintenance</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#9BBEC8] aspect-square rounded-2xl flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center text-white">
                <div className="text-8xl mb-4">🏢</div>
                <p className="text-lg font-medium">Our Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl font-bold text-[#415A77] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-[#F7F9FB] to-[#C9E4E7] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#2E8B9C] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#415A77] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in software 
              development, design, and business strategy.
            </p>
          </motion.div>

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
        </div>
      </section>
    </div>
  );
};

export default About;
