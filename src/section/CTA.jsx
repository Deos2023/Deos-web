// components/PremiumCTA.jsx
"use client"
import React from 'react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './CTA.css'

const PremiumCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="section section-cta" ref={ref}>
      <div className="cta-wrapper">
        <motion.div 
          className="cta-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="cta-content" variants={itemVariants}>
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>
              Let's collaborate to create a tailored digital marketing strategy that 
              drives growth, increases visibility, and maximizes your ROI.
            </p>
            <div className="cta-features">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <span>Customized strategies for your business</span>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <span>Transparent reporting & analytics</span>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <span>Dedicated account management</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="cta-action" variants={itemVariants}>
            <div className="cta-card">
              <h3>Schedule a Free Consultation</h3>
              <p>Get a personalized strategy session with our experts</p>
              
              <form className="cta-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <button type="submit" className="cta-submit-btn">
                  Get Started Today
                </button>
              </form>
              
              <div className="cta-assurance">
                <div className="assurance-item">
                  <span className="assurance-icon">🔒</span>
                  <span>No obligation, 100% free</span>
                </div>
                <div className="assurance-item">
                  <span className="assurance-icon">⏱️</span>
                  <span>30-minute consultation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PremiumCTA