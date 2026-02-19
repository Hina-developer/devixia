import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Target, Code2, Heart, Star, Zap, Palette, MonitorSmartphone, Brush, ShoppingBag } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Delivering creative and forward-thinking digital solutions using the latest tools and technologies."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to achieving top quality and performance in every website, design, and software project."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by genuine love for technology, design, and crafting meaningful user experiences."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients, startups, and students to understand needs and exceed expectations."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Satisfied Clients" },
    { number: "15+", label: "Logos Designed" },
    { number: "3+", label: "Years Experience" }
  ];

  const services = [
    "Custom Website Development (Static, Dynamic, E-commerce)",
    "WordPress Website Design & Theme Customization",
    "Shopify Store Design & Product Integration",
    "Cloud-based Software (EMS, HR & Payroll, Attendance & Leave Tracking)",
    "Prototyping & UI/UX Design via Figma",
    "Logo, Branding & Graphic Design using CorelDRAW & Adobe Tools",
    "Cybersecurity & Real-Time Threat Detection Solutions",
    "Linux Server Management, Hosting & Domain Handling",
    "Academic Project Development & Technical Mentorship"
  ];

  const team = [
    {
      icon: Code2,
      role: "Web & Software Developers",
      desc: "Experts in React, Django, Node.js, and modern frameworks, delivering high-performance digital platforms."
    },
    {
      icon: Palette,
      role: "UI/UX Designers",
      desc: "Skilled in Figma and design systems to craft intuitive and visually engaging interfaces."
    },
    {
      icon: Brush,
      role: "Graphic Designers",
      desc: "Creative minds behind branding, logos, and visual assets that define client identity."
    },
    {
      icon: MonitorSmartphone,
      role: "WordPress Developers",
      desc: "Building professional, responsive, and fully customizable WordPress websites for businesses and individuals."
    },
    {
      icon: ShoppingBag,
      role: "Shopify Experts",
      desc: "Creating modern Shopify stores with optimized product layouts, branding consistency, and seamless checkout flows."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.2 }} className="flex justify-center mb-8">
              <div className="relative">
                <Code2 className="h-16 w-16 text-purple-400" />
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                About
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Devixia
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Devixia is a multidisciplinary software company turning ideas into powerful digital experiences. 
              From web apps and UI/UX design to branding, hosting, and e-commerce — our passionate team builds 
              with innovation, precision, and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story & Achievements */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Our Story</h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                Founded with a mission to empower businesses, startups, and students, Devixia has delivered 50+ projects across diverse industries. 
                Our expertise spans from web development to branding and UI/UX prototyping.
              </p>
              <p>
                We specialize in technologies like React.js, Next.js, Vue.js, Node.js, Express.js, Django, and databases such as MySQL, MongoDB, and PostgreSQL.
              </p>
              <p>
                Alongside software development, our creative team excels in Figma-based UI/UX, CorelDRAW & Adobe graphic design, and e-commerce solutions through WordPress and Shopify.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 relative">
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Our Services</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            We offer a full suite of digital solutions for businesses, startups, and students:
          </p>
          <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside text-white/80 text-lg">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <Star className="h-5 w-5 text-purple-400 mt-1" />
                {service}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 px-6 relative">
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-600/10 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-xl h-full flex flex-col items-center text-center"
              >
                <member.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{member.role}</h3>
                <p className="text-white/70 text-base leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Our Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">The principles that guide every project and collaboration at Devixia.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, staggerChildren: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }} className="text-center group">
                <div className="relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 h-full">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }} className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-400/10 rounded-2xl border border-purple-400/30 mb-6">
                    <value.icon className="h-8 w-8 text-purple-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Our Mission</h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                To deliver exceptional digital solutions that combine design, technology, and innovation — empowering clients and students to succeed in the digital era.
              </p>

              <div className="flex justify-center mt-12">
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300">
                  Start Your Project
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
