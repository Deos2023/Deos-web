// components/ScrollToTop.jsx
"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './scrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const progress = (scrollTop / (docHeight - windowHeight)) * 100;
      setScrollProgress(progress);
      
      // Show button when scrolled down 300px
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
        >
          {/* Progress Circle Background */}
          <svg className="progress-bg" width="60" height="60" viewBox="0 0 60 60">
            <circle 
              cx="30" 
              cy="30" 
              r="28" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              opacity="0.2"
            />
          </svg>
          
          {/* Progress Circle */}
          <svg className="progress-circle" width="60" height="60" viewBox="0 0 60 60">
            <circle 
              cx="30" 
              cy="30" 
              r="28" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="176"
              strokeDashoffset={176 - (176 * scrollProgress) / 100}
              transform="rotate(-90 30 30)"
            />
          </svg>
          
          {/* Arrow Icon */}
          <svg 
            className="arrow-icon" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path 
              d="M12 20L12 4M12 4L5 11M12 4L19 11" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;