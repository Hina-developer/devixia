import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Code2, Zap, Globe, Layers } from 'lucide-react';

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const taglines = [
    "Websites • Software • Prototyping • Logos",
  "Crafting Scalable Web & Software Solutions",
  "Empowering Businesses Through Smart Code",
  "From FYPs to Enterprise-Level Systems",
  "Full-Stack Expertise • Seamless Hosting • Powerful Design",
  "Transforming Ideas Into Digital Reality"
  ];

  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
      
      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Mouse follower gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center justify-center mb-8"
        >
          <div className="relative">
            <Code2 className="h-20 w-20 text-purple-400" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent blur-xl rounded-full"
            />
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Dev
          </span>
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            ixia
          </span>
        </motion.h1>

        {/* Animated Tagline */}
        <motion.div
          key={currentTagline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="mb-8 h-16 flex items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl text-white/80 font-light tracking-wide">
            {taglines[currentTagline]}
          </h2>
        </motion.div>

        {/* Decorative Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center space-x-8 mb-12"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
            <Sparkles className="h-8 w-8 text-purple-400" />
          </motion.div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Zap className="h-8 w-8 text-purple-500" />
          </motion.div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
            <Globe className="h-8 w-8 text-purple-300" />
          </motion.div>
        </motion.div>

        {/* Company Intro + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
  At <span className="text-purple-300 font-semibold">Devixia</span>, we turn ideas into high-performance digital experiences. 
  Whether it’s a <span className="text-purple-300">MERN stack application</span>, a 
  <span className="text-purple-300"> Python-powered platform</span>, or a 
  <span className="text-purple-300"> fully hosted Linux deployment</span>, 
  we deliver excellence from concept to cloud.  
  With 3+ years of experience and 30+ completed projects, 
  we blend <span className="text-purple-300">design precision</span> with 
  <span className="text-purple-300"> cutting-edge technology</span> creating digital products that truly perform.
</p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300"
>
  Launch Your Project 
</motion.button>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 border border-purple-400/50 rounded-full text-purple-300 font-semibold text-lg hover:bg-purple-400/10 hover:border-purple-300 transition-all duration-300"
>
  Explore Our Work 
</motion.button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-white/80">
  <motion.div whileHover={{ scale: 1.05 }} className="p-4">
    <h3 className="text-4xl font-bold text-purple-400">30+</h3>
    <p className="mt-2">Full-Stack Projects Delivered</p>
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} className="p-4">
    <h3 className="text-4xl font-bold text-purple-400">8+</h3>
    <p className="mt-2">Final-Year Projects Developed</p>
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} className="p-4">
    <h3 className="text-4xl font-bold text-purple-400">15+</h3>
    <p className="mt-2">Global Clients & Partners</p>
  </motion.div>
</div>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
