import { motion } from 'framer-motion';
import { useState } from 'react';
import useStore from '../Store/UseStore';

const Contact = () => {
  const { contactForm, updateContactForm, resetContactForm } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (field, value) => {
    updateContactForm(field, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
      resetContactForm();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "hello@neattechnologies.com",
      link: "mailto:hello@neattechnologies.com"
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Office",
      content: "123 Tech Street, Innovation District, San Francisco, CA 94103",
      link: "#"
    },
    {
      icon: "🕒",
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 6PM PST",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2E8B9C] to-[#9BBEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-[#E0F2F1] max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? We'd love to hear about your ideas 
              and discuss how we can help bring them to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-[#1D3557] mb-8">
                  Send us a Message
                </h2>

                {submitMessage && (
                  <motion.div
                    className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1D3557] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-[#A8DADC] rounded-lg focus:ring-2 focus:ring-[#2E8B9C] focus:border-[#2E8B9C] transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1D3557] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={contactForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-[#A8DADC] rounded-lg focus:ring-2 focus:ring-[#2E8B9C] focus:border-[#2E8B9C] transition-colors duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1D3557] mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-[#A8DADC] rounded-lg focus:ring-2 focus:ring-[#2E8B9C] focus:border-[#2E8B9C] transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                      isSubmitting 
                        ? 'bg-[#9BBEC8] cursor-not-allowed' 
                        : 'bg-[#2E8B9C] hover:bg-[#1D3557] hover:shadow-lg'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-[#E0F2F1] rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-[#1D3557] mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="text-2xl mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-[#1D3557] mb-1">{info.title}</h4>
                        {info.link && info.link !== '#' ? (
                          <a 
                            href={info.link}
                            className="text-[#2E8B9C] hover:text-[#1D3557] transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-[#2E8B9C]">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-12 p-6 bg-[#9BBEC8] rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <h4 className="font-semibold text-white mb-2">Quick Response Promise</h4>
                  <p className="text-sm text-white">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, don't hesitate to call us directly.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#E0F2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1D3557] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#2E8B9C] max-w-2xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity, but most web applications take 8-16 weeks from start to finish."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive support and maintenance packages to keep your application running smoothly."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in React, Node.js, cloud platforms, and modern web technologies. We choose the best tools for each project."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly into your workflow."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-[#1D3557] mb-3">{faq.question}</h3>
                <p className="text-[#2E8B9C]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
