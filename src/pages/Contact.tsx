import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Globe,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "We typically reply within a few hours",
      contact: "devixia.official@gmail.com",
      link: "mailto:devixia.official@gmail.com",
    },
    {
      icon: MessageSquare,
      title: "Chat on WhatsApp",
      description: "Instant responses for quick queries",
      contact: "+92 300 1234567",
      link: "https://wa.me/923001234567",
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Remote-first company serving worldwide clients",
      contact: "United Kingdom • Pakistan • USA",
      link: "#",
    },
    {
      icon: Clock,
      title: "Availability",
      description: "We operate across multiple time zones",
      contact: "Mon – Sat • 10:00 AM – 10:00 PM (GMT+5)",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/devixia",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      href: "https://github.com/Hina-developer",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/devixia.official",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
  ];

  const services = [
    "MERN Stack Web Development",
    "Django & Python Backend",
    "SaaS Platform Development",
    "Custom AI Chatbots & Automation",
    "UI/UX Design & Prototyping",
    "Cloud Hosting & Deployment",
    "Data Analytics & Dashboards",
    "Other / Custom Solution",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Let's discuss in detail",
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Get In
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Whether you're launching a new product or scaling your digital
              presence, Devixia is ready to help you turn your vision into
              reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
                <div className="flex items-center space-x-3 mb-8">
                  <MessageCircle className="h-8 w-8 text-purple-400" />
                  <h2 className="text-3xl font-bold text-white">
                    Send us a message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white placeholder-white/50 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white placeholder-white/50 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white placeholder-white/50 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                            className="bg-gray-900"
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option
                            key={range}
                            value={range}
                            className="bg-gray-900"
                          >
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white placeholder-white/50 resize-none transition-all duration-300"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl text-white font-semibold text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Let's Connect
                  </span>
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  Devixia is a remote-first software company delivering world-class digital products.  
                  Reach out via email, chat, or call — wherever you are.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-6 bg-gradient-to-br from-purple-900/20 to-purple-600/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-400/10 rounded-xl border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-1">
                        {info.description}
                      </p>
                      <p className="text-purple-300 font-medium">
                        {info.contact}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-400/10 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-300 hover:border-purple-400/50 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Quick Response Promise
                  </h3>
                </div>
                <p className="text-white/70">
                  Our remote team responds to all inquiries within 2–4 hours
                  during business hours. For urgent matters, WhatsApp or email
                  is best.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
