import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    'About Us', 'Services', 'Projects', 'Contact', 'Privacy Policy', 'Terms of Service'
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-purple-900/20 to-black border-t border-purple-500/20 overflow-hidden">
      {/* Background Blurred Shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Code2 className="h-10 w-10 text-purple-400" />
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-spin-slow"></div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Devixia
              </h3>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
              Crafting premium digital experiences with cutting-edge technology. 
              Your vision, our expertise, extraordinary results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/60 hover:text-purple-400 transition-colors">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>hello@devixia.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60 hover:text-purple-400 transition-colors">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60 hover:text-purple-400 transition-colors">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 6, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="#" 
                    className="text-white/60 hover:text-purple-400 transition-colors duration-300 after:block after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Follow Us</h4>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, rotate: 10, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-400/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-purple-400" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-lg font-medium mb-4 text-white">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-purple-500/20 rounded-l-lg focus:outline-none focus:border-purple-400/50 text-white placeholder-white/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139,92,246,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-r-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm flex items-center gap-2">
            © 2025 Devixia. All rights reserved. <span className="text-purple-400"></span>
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
