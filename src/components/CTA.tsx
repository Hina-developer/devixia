import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code2 } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/20 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%'
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%'
              ]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-16 left-10 lg:left-32"
          >
            <Sparkles className="h-8 w-8 text-purple-400/60" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-20 right-10 lg:right-32"
          >
            <Code2 className="h-10 w-10 text-purple-300/50" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-16 left-1/4"
          >
            <Zap className="h-6 w-6 text-purple-500/40" />
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-purple-400/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2"
          >
            <Sparkles className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Ready to Transform Your Ideas?</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Start Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Project
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Let's collaborate to bring your vision to life with cutting-edge technology, 
            premium design, and unmatched expertise.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            {/* Primary CTA Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-white font-bold text-xl overflow-hidden shadow-2xl"
            >
              {/* Button Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center space-x-3">
                <span>Start Your Project</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(139, 92, 246, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-purple-400/50 rounded-full text-purple-300 font-bold text-xl hover:border-purple-300 hover:text-purple-200 transition-all duration-300"
            >
              Schedule a Call
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8 space-y-4"
          >
            <p className="text-white/50 text-sm">
              ✨ Free consultation • 🚀 Fast turnaround • 💎 Premium quality
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-xs text-white/60">Projects Delivered</div>
              </div>
              <div className="w-px h-8 bg-purple-500/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-xs text-white/60">Client Satisfaction</div>
              </div>
              <div className="w-px h-8 bg-purple-500/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-white/60">Support Available</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;