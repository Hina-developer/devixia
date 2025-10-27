import React, { useState } from "react";
import {
  Code2,
  Smartphone,
  MessageSquare,
  Palette,
  Database,
  Cloud,
  BarChart3,
  ShoppingCart,
  Globe,
  Users,
  Cpu,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Star,
  Bug,
  Server,
  Network,
  Terminal,
  CpuIcon,
  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);

  const services = [
    {
      id: 1,
      icon: Code2,
      title: "Frontend Web Development",
      description:
        "Beautiful and responsive websites using modern frontend stacks and frameworks.",
      features: [
        "HTML, CSS, JavaScript, Tailwind CSS",
        "React.js / Next.js / Vite.js / Vue.js",
        "Responsive & Animated UI",
        "Performance & SEO Optimization",
      ],
      price: "Project-based",
      popular: true,
    },
    {
      id: 2,
      icon: Database,
      title: "Backend & API Integration",
      description:
        "Powerful and secure server-side applications with RESTful APIs.",
      features: [
        "Python (Django / DRF)",
        "Node.js / Express.js",
        "API Development & Integration",
        "Authentication & Authorization",
      ],
      price: "Project-based",
      popular: true,
    },
    {
      id: 3,
      icon: Smartphone,
      title: "App Development",
      description:
        "Cross-platform apps for iOS, Android, and desktop using modern technologies.",
      features: [
        "React Native",
        "Responsive & Offline Support",
        "Push Notifications",
        "Maintenance & Updates",
      ],
      price: "From $800",
      popular: true,
    },
    {
      id: 4,
      icon: Cloud,
      title: "Cloud & Server Management",
      description:
        "Deployment, monitoring, and scaling of cloud servers for smooth performance.",
      features: [
        "Linux / Apache2 Setup",
        "CI/CD Pipelines",
        "Domain & Hosting Setup",
        "Cloud Backups & Monitoring",
      ],
      price: "Project-based",
      popular: false,
    },
    {
      id: 5,
      icon: Bug,
      title: "Bug Fixing & Error Detection",
      description:
        "Troubleshooting, debugging, and fixing system or deployment-level issues.",
      features: [
        "API & Backend Error Fixes",
        "React & Node.js Debugging",
        "Server Crash Resolution",
        "Performance Bottleneck Detection",
      ],
      price: "Hourly / Project-based",
      popular: false,
    },
    {
      id: 6,
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description:
        "Full-featured online stores with secure payments and admin dashboards.",
      features: [
        "Shopify / WooCommerce / Custom",
        "Inventory & Order Management",
        "Payment Gateway Integration",
        "Sales & Analytics Dashboard",
      ],
      price: "From $1000",
      popular: false,
    },
    {
      id: 7,
      icon: Globe,
      title: "WordPress & CMS Solutions",
      description:
        "Custom WordPress websites, themes, and plugin development with top security.",
      features: [
        "Custom Themes & Plugins",
        "WooCommerce Integration",
        "Page Speed & SEO Optimization",
        "Maintenance & Migration",
      ],
      price: "From $500",
      popular: true,
    },
    {
      id: 8,
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      description:
        "Visually stunning and user-friendly designs to elevate your brand identity.",
      features: [
        "Figma Prototypes & Wireframes",
        "Brand Identity & Logo Design",
        "Interactive Mockups",
        "CorelDRAW / Photoshop Assets",
      ],
      price: "From $400",
      popular: false,
    },
    {
      id: 9,
      icon: Database,
      title: "Database Architecture & Management",
      description:
        "Designing, optimizing, and managing databases for scalability and reliability.",
      features: [
        "MySQL / PostgreSQL / MongoDB / SQLite3",
        "Data Migration & Backup",
        "ORM Integration (Django ORM, Prisma, etc.)",
        "Query Optimization",
      ],
      price: "Project-based",
      popular: false,
    },
    {
      id: 10,
      icon: BarChart3,
      title: "AI, Analytics & Automation Tools",
      description:
        "Smart solutions for workflow automation, reporting, and intelligent data systems.",
      features: [
        "Chatbots & AI Integrations",
        "Data Analytics Dashboards",
        "Predictive Models",
        "Workflow Automation Tools",
      ],
      price: "Project-based",
      popular: false,
    },
    {
      id: 11,
      icon: Users,
      title: "Enterprise Solutions & Management Systems",
      description:
        "ERP, CRM, HRM, and workflow systems tailored for businesses and institutions.",
      features: [
        "Custom ERP / CRM / HMS / HRM",
        "Multi-User Roles & Access Control",
        "Admin Dashboards & Reports",
        "Secure Cloud Integration",
      ],
      price: "Project-based",
      popular: true,
    },
    {
      id: 12,
      icon: BookOpen,
      title: "Training, Mentorship & Consultation",
      description:
        "Professional training and consultation for students, startups, and developers.",
      features: [
        "Final Year Project Support",
        "Workshops & Bootcamps",
        "Career & Freelance Guidance",
        "Tech Consultation Sessions",
      ],
      price: "Hourly / Project-based",
      popular: false,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description:
        "Understanding your needs and defining the right strategy for development.",
    },
    {
      step: "02",
      title: "Design & Prototype",
      description:
        "Creating UI/UX wireframes, mockups, and interactive design concepts.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Building with clean, maintainable code and testing for bugs or security issues.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Hosting, launching, and providing ongoing updates and maintenance.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            At Devixia, we craft full-stack, cloud-powered, and beautifully
            designed solutions — from static websites to enterprise-grade
            systems.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-1 rounded-full text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-400/10 rounded-2xl border border-purple-400/30 mb-6">
                <service.icon className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                {service.description}
              </p>
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center space-x-3 mb-1">
                  <CheckCircle className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-white/80">{f}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-purple-500/20 mt-4 flex items-center justify-between">
                <span className="text-purple-400 font-bold text-lg">
                  {service.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process & CTA sections same as before */}
      {/* (Keep your processSteps, Why Choose Us, and Modal sections as they are — they work perfectly with this setup) */}
    </div>
  );
};

export default Services;
