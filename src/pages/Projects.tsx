import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Star, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

const projects = [
  {
    id: 1,
    title: "HiraTech Shop",
    description: "A full-featured eCommerce platform built with React, Next.js, and Django backend, supporting product management, payments, and order tracking.",
    image: "/public/cart.png",
    category: "ecommerce",
    technologies: ["React", "Next.js", "Python", "Django", "MySQL"],
    liveUrl: "https://pk.hira-tech.co.uk/shop",
    duration: "4 months",
    teamSize: "Solo Project",
    features: ["Product Catalog", "Shopping Cart", "Order Tracking", "Payment Integration","customer-panel","invoice-generation"]
  },
  {
    id: 2,
    title: "Hira Dental Lab",
    description: "A static business website for a dental lab, built with HTML, CSS, and Python backend integration.",
    image: "/public/hiradental.png",
    category: "web",
    technologies: ["HTML", "CSS", "Python"],
    liveUrl: "https://hiradentallab.com/",
    duration: "1 month",
    teamSize: "2 developers",
    features: ["Static Website", "Responsive Design", "Custom Forms"]
  },
  {
    id: 3,
    title: "Denture Repairs Coventry",
    description: "Static website for denture repair services, focusing on brand presence and client communication.",
    image: "public/denture.png",
    category: "web",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://denturerepairscoventry.co.uk/",
    duration: "15 days",
    teamSize: "2 developers",
    features: ["Business Website", "Responsive Layout", "SEO Optimization"]
  },
  {
    id: 4,
    title: "EMS - Employee Management System",
    description: "Role-based EMS with admin, HR, and employee panels, supporting attendance, leave, salary, provident fund, and multi-country support.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "software",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "https://ems.hiradentallab.com/",
    duration: "6 months",
    teamSize: "2 developers",
    features: ["Role-based Panels", "Attendance & Leave", "Salary & Funds", "Multi-country Support"]
  },
  {
    id: 5,
    title: "HMS - Hira Management System",
    description: "LabNext-like healthcare management platform handling lab workflows, patients, and reporting.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "software",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "https://hms.hiradentallab.com/",
    duration: "6 months",
    teamSize: "2 developers",
    features: ["Lab Management", "Patient Records", "Reports", "Role-based Access"]
  },
  {
    id: 6,
    title: "DLA eCommerce",
    description: "An eCommerce project with custom product listings and secure checkout process.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "ecommerce",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://dla.hira-tech.co.uk/",
    duration: "3 months",
    teamSize: "2 developers",
    features: ["Product Listings", "Cart & Checkout", "Secure Payments", "Order Tracking"]
  },
  {
    id: 7,
    title: "Admin Panel - HiraTech Shop",
    description: "Advanced admin panel for managing eCommerce operations including orders, invoicing, stock, labels, and customer data.",
    image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "ecommerce",
    technologies: ["React", "Next.js", "Django", "MySQL"],
    liveUrl: "https://admin.pk.hira-tech.co.uk/",
    duration: "4 months",
    teamSize: "Solo Project",
    features: ["Order Management", "Invoicing", "Stock Management", "Customer Records"]
  },
  {
    id: 8,
    title: "Dentovate",
    description: "Dynamic dental website allowing patients to book and manage appointments online.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    duration: "2 months",
    teamSize: "Solo Project",
    features: ["Appointment Booking", "Patient Management", "Responsive Design"]
  },
  {
    id: 9,
    title: "Primex-Pro Estimatio",
    description: "Real estate company platform built on MERN stack with property listings and client management.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "web",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "#",
    duration: "3 months",
    teamSize: "4 developers",
    features: ["Property Listings", "Client Management", "Search & Filter", "Responsive UI"]
  },
  {
    id: 10,
    title: "CIROS - Cybersecurity Agent",
    description: "Final year project: a real-time Windows agent for malware detection, system monitoring, and automated network isolation with 2FA-secured dashboard.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "ai",
    technologies: ["Python", "Electron.js", "React", "Node.js"],
    duration: "6 months",
    teamSize: "3 developers",
    features: ["Real-time Threat Detection", "System Monitoring", "Auto Network Isolation", "2FA Dashboard"]
  },
  {
  id: 11,
  title: "Cube Smashed Game",
  description: "A fun JavaScript-based browser game built with HTML, CSS, and vanilla JS, hosted on GitHub Pages.",
  image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  category: "web",
  technologies: ["HTML", "CSS", "JavaScript"],
  liveUrl: "https://hina-developer.github.io/My-Game.github.io/",
  githubUrl: "https://github.com/hina-developer/My-Game.github.io",
  duration: "2 weeks",
  teamSize: "Solo Project",
  features: ["Interactive Gameplay", "Score Tracking", "Vanilla JS Logic", "Hosted on GitHub Pages"]
}
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'ecommerce', label: 'E-Commerce' },
  { key: 'web', label: 'Websites' },
  { key: 'software', label: 'Softwares (EMS, HMS etc.)' },
  { key: 'ai', label: 'AI & Cybersecurity' }
];

const filteredProjects = activeFilter === 'all' 
  ? projects 
  : projects.filter(project => project.category === activeFilter);

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
                Our
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of innovative solutions and cutting-edge applications 
              that showcase our expertise in modern software development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.key
                    ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white'
                    : 'bg-purple-500/10 border border-purple-400/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>{category.label}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Project Actions */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5 text-white" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Project Stats */}
                      <div className="flex items-center space-x-4 text-xs text-white/60">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{project.teamSize}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded-lg text-xs text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-sm font-medium text-purple-300 mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {project.features.slice(0, 4).map((feature) => (
                            <div key={feature} className="flex items-center space-x-1">
                              <Star className="h-2 w-2 text-purple-400" />
                              <span className="text-xs text-white/60">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Ready to Start Your Project?
                </span>
              </h2>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Let's collaborate to bring your innovative ideas to life with the same level of 
                excellence and attention to detail showcased in our portfolio.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;