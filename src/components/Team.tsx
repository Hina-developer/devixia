import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Rivera",
      position: "Lead Developer",
      specialty: "Full-Stack Architecture",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Passionate about creating scalable solutions with modern technologies.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 2,
      name: "Maya Patel",
      position: "UI/UX Designer",
      specialty: "Digital Experience Design",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Crafting intuitive and beautiful user experiences that drive engagement.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 3,
      name: "Jordan Kim",
      position: "Backend Engineer",
      specialty: "Cloud & DevOps",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Expert in building robust, scalable infrastructure and API systems.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 4,
      name: "Sofia Martinez",
      position: "Product Manager",
      specialty: "Strategy & Innovation",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Bridging technology and business to deliver exceptional products.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "#"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Meet Our
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our talented team of professionals dedicated to bringing your vision to life 
            with expertise, creativity, and passion
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 h-full">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Profile Image */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative mx-auto w-32 h-32 rounded-2xl overflow-hidden"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                  </motion.div>
                  
                  {/* Floating Specialty Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-3 py-1 rounded-full text-xs font-medium text-white whitespace-nowrap">
                      {member.specialty}
                    </div>
                  </motion.div>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-purple-300 font-medium">
                      {member.position}
                    </p>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 pt-4">
                    {[
                      { icon: Linkedin, href: member.social.linkedin, label: 'LinkedIn' },
                      { icon: Twitter, href: member.social.twitter, label: 'Twitter' },
                      { icon: Github, href: member.social.github, label: 'GitHub' },
                      { icon: Mail, href: member.social.email, label: 'Email' }
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="h-4 w-4 text-purple-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full opacity-70"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/70 mb-6">
            Ready to work with our amazing team?
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;