"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import './B2BBusinessSection.css'

const B2BBusinessSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-20%" })

  const b2bFeatures = [
    {
      icon: "/handshake.mp4",
      title: "Lead Generation",
      description: "Targeted strategies to attract high-quality B2B leads and convert them into loyal clients",
      stats: "89% increase in qualified leads"
    },
    {
      icon: "/icons/b2b-brand.mp4",
      title: "Brand Authority",
      description: "Establish your business as an industry thought leader and trusted partner",
      stats: "3x more brand recognition"
    },
    {
      icon: "/icons/b2b-roi.mp4",
      title: "ROI Focused",
      description: "Data-driven campaigns designed to deliver measurable return on investment",
      stats: "47% higher ROI than industry average"
    },
    {
      icon: "/icons/b2b-partnership.mp4",
      title: "Partnership Growth",
      description: "Build lasting business relationships that drive mutual growth and success",
      stats: "72% client retention rate"
    }
  ]

  return (
    <section className="section section-b2b" ref={sectionRef}>
      <div className="b2b-wrapper">
        <motion.div 
          className="b2b-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="b2b-header">
            <h2>
              <span className="b2b-gradient-text">B2B Excellence</span> in Digital Marketing
            </h2>
            <p className="b2b-subtitle">
              Transforming Business Relationships Through Strategic Digital Solutions
            </p>
          </div>

          <div className="b2b-main-content">
            <div className="b2b-text-content">
              <motion.p 
                className="b2b-intro"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                At <strong>Digital Exposure</strong>, we specialize in B2B digital marketing strategies 
                that drive meaningful connections between businesses. Unlike B2C marketing, 
                B2B requires a nuanced approach focused on building trust, demonstrating expertise, 
                and nurturing long-term partnerships.
              </motion.p>

              <motion.div 
                className="b2b-stats"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="b2b-stat-item">
                  <div className="b2b-stat-number">85%</div>
                  <div className="b2b-stat-label">Client Retention</div>
                </div>
                <div className="b2b-stat-item">
                  <div className="b2b-stat-number">3.2x</div>
                  <div className="b2b-stat-label">ROI Increase</div>
                </div>
                <div className="b2b-stat-item">
                  <div className="b2b-stat-number">64%</div>
                  <div className="b2b-stat-label">Lead Conversion</div>
                </div>
              </motion.div>
            </div>

            <div className="b2b-features-grid">
              {b2bFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="b2b-feature-card"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="b2b-feature-icon-wrapper"
                    animate={{ 
                      rotate: [0, -3, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    <div className="b2b-feature-icon-background"></div>
                    <video 
                      className="b2b-feature-icon" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src={feature.icon} type="video/mp4" />
                    </video>
                  </motion.div>
                  
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="b2b-feature-stats">
                    {feature.stats}
                  </div>
                  
                  <div className="b2b-feature-hover-effect"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="b2b-cta"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="b2b-cta-button">
              <span>Start Your B2B Journey</span>
              <div className="b2b-button-hover-effect"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default B2BBusinessSection