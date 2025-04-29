import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <FiMapPin className="text-2xl text-blue-600" />,
      title: "Our Headquarters",
      details: "123 Tech Park Avenue, Silicon Valley, CA 94025"
    },
    {
      icon: <FiPhone className="text-2xl text-blue-600" />,
      title: "Phone",
      details: "+1 (555) 123-4567\n24/7 Support Available"
    },
    {
      icon: <FiMail className="text-2xl text-blue-600" />,
      title: "Email",
      details: "info@swstech.com\nsupport@swstech.com"
    },
    {
      icon: <FiClock className="text-2xl text-blue-600" />,
      title: "Hours",
      details: "Monday-Friday: 9am-6pm PST\nEmergency support: 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex flex-col justify-center px-6 lg:px-16 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-3xl">
            We'd love to hear from you! Reach out for inquiries, support, or partnership opportunities.
          </p>
        </motion.div>
      </div>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-16 relative z-10">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="mb-4">{method.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
            <p className="text-gray-600 whitespace-pre-line">{method.details}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form + Map */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.465806078109!2d-121.8949239246896!3d37.33464323691272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb439a7d0d2d%3A0x99c6b8c67c3dc6f9!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1712345678901"
              className="w-full h-full min-h-[400px]"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;