import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ReviewSlider = () => {
const reviews = [
  {
    id: 1,
    name: "Hira Dental Laboratory (Pvt) Ltd – UK",
    position: "Client | Healthcare Technology Partner",
    content:
      "Devixia’s AI Customer Service Bot is transforming how we interact with our clients. The chatbot understands dental-specific terms, responds instantly, and learns from every query. Their expertise in Python, NLP, and automation made integration seamless — highly professional work!",
    rating: 5,

  },
  {
    id: 2,
    name: "Crios Technologies",
    position: "Founder | Cybersecurity Division",
    content:
      "Working with Devixia on the CIROS project was an outstanding experience. They built a full-stack cybersecurity platform with real-time incident tracking, PowerShell automation, and SIEM integration — all flawlessly executed. Their understanding of both backend and security analytics is exceptional.",
    rating: 5,

  },
  {
    id: 3,
    name: "Hira-Tech UK",
    position: "Operations Director",
    content:
      "Our employee activity tracking system built by Devixia has completely streamlined internal monitoring. With automated screenshots, dashboards, and reports, our management efficiency has improved by 40%. The solution is secure, scalable, and impressively user-friendly.",
    rating: 5,

  },
  {
    id: 4,
    name: "Primex Pro Estimation",
    position: "Founder | Construction Technology",
    content:
      "Devixia delivered our construction estimation platform with precision and creativity. The UI is sleek, responsive, and works beautifully in both dark and light modes. Backend APIs are secure and lightning-fast. Couldn’t have asked for better execution — top-notch service!",
    rating: 5,

  },
  {
    id: 5,
    name: "Dentovate",
    position: "Dental Tech Startup | Founder",
    content:
      "Devixia built our MERN-stack web platform from scratch — and it’s a beauty. The system is smooth, visually stunning, and technically sound. Clients can now connect with us securely and easily. Hina’s attention to design and detail made all the difference.",
    rating: 5,

  },
  {
    id: 6,
    name: "CyberOps Team",
    position: "Security Operations Center (SOC)",
    content:
      "The SecureOps Dashboard built by Devixia has elevated our SOC access control. Role-based authentication, encryption, and optional 2FA ensure only authorized users can access sensitive data. The modern interface makes monitoring seamless — excellent technical delivery.",
    rating: 5,

  },
  {
    id: 7,
    name: "Final Year Student – Lahore Garrison University",
    position: "Academic Client",
    content:
      "My Final Year Project was developed by Devixia, and it exceeded every expectation. The system was innovative, bug-free, and delivered well before the deadline. My supervisor was highly impressed — thank you for helping me achieve distinction!",
    rating: 5,

  },
  {
  id: 8,
  name: "Hira Management Team – Hira Dental Laboratory",
  position: "Operations Manager | HMS Project Partner",
  content:
    "Devixia’s work on our Hira Management System (HMS) has completely transformed our daily operations. The Bills section of the Expenses module is a standout — intuitive, fast, and perfectly aligned with our workflow. Features like bill uploads, batch actions, and smart status filters have made expense tracking effortless. The clean React-Django integration ensures everything runs smoothly in real time. Exceptional attention to detail and professionalism throughout the project.",
  rating: 5,

}
];


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-purple-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section className="py-24 px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Client
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover what our clients say about their transformative experience with Devixia
          </p>
        </motion.div>

        {/* Review Slider */}
        <div className="relative h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative bg-gradient-to-br from-purple-900/20 to-purple-600/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20 shadow-2xl">
                {/* Decorative Quote */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-8">
                  {/* Review Text */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed italic">
                    "{reviews[currentIndex].content}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {renderStars(reviews[currentIndex].rating)}
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                     
                      <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-lg"></div>
                    </motion.div>
                    
                    <div>
                      <h4 className="text-2xl font-semibold text-white mb-1">
                        {reviews[currentIndex].name}
                      </h4>
                      <p className="text-purple-300 text-lg">
                        {reviews[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-purple-400 via-transparent to-purple-600 rounded-3xl"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-400 w-8'
                  : 'bg-purple-400/30 hover:bg-purple-400/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;