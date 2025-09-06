"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import './ServicesSection.css'

const ServicesSection = () => {
  const services = [
    {
      title: "Website Development",
      icon: "/icons/websiteLogo.png",
      description: "A business website helps accomplish several digital marketing strategies that enable a company to grow. Visualize your business based on your online presence with a robust website that communicates quality information to viewers.",
      features: [
        "Improves credibility and generates leads",
        "Provides quality customer experience",
        "Well-designed with updated content",
        "State-of-the-art website design"
      ]
    },
    {
      title: "Search Engine Optimization (SEO)",
      icon: "/icons/seoLogo2.png",
      description: "SEO is a continuous process of optimizing a website to be more relevant and reachable for search engines and users, thereby driving more organic traffic and enhancing online visibility.",
      features: [
        "On-page, off-page, technical and local SEO",
        "Keyword research and link building",
        "Higher ranking and effective brand awareness",
        "Continuous optimization process"
      ]
    },
    {
      title: "Local SEO (Google My Business)",
      icon: "/icons/localSeo.png",
      description: "Get your business to rank as high as possible in Google Maps and on the local results of the SERP with our specialized local SEO services.",
      features: [
        "Google Business Profile optimization",
        "Review management and listing optimization",
        "Local search visibility enhancement",
        "Map ranking improvement"
      ]
    },
    {
      title: "Social Media Marketing (SMM)",
      icon: "/icons/smmLogo.png",
      description: "A powerful way for businesses of all sizes to reach prospects and customers in a focused manner. SMM has become an essential component of any successful marketing strategy.",
      features: [
        "Increased brand awareness",
        "Improved customer engagement",
        "Enhanced website traffic",
        "Cost-effective marketing across platforms"
      ]
    },
    {
      title: "Communication Strategy",
      icon: "/icons/communicationLogo.png",
      description: "Effective communication is the key differentiator in building a brand or enhancing reach and growth of an organization through appropriate cues to get the desired response.",
      features: [
        "SEO synergistic content creation",
        "Static and audio-visual advertisements",
        "Proper keyword implementation",
        "Creative cue design for desired responses"
      ]
    },
    {
      title: "Brand Strategy & Management",
      icon: "/icons/brandLogo.png",
      description: "Building and managing brands with effective strategies that create a unique consumer response, transforming brands into trust marks with enhanced value.",
      features: [
        "Research-based strategy development",
        "Analytics-driven brand management",
        "Competitive advantage creation",
        "Enhanced brand value development"
      ]
    },
    {
      title: "App Development",
      icon: "/icons/appLogo.png",
      description: "Today many businesses use specific applications to manage customer convenience or requirements. We develop appropriate apps to address specific business needs.",
      features: [
        "Custom application development",
        "Cross-platform solutions",
        "Better customer experience delivery",
        "Business-specific functionality"
      ]
    }
  ]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
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
  }

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      rotate: -180,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section section-services" ref={containerRef}>
      <div className="services-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our <strong>Comprehensive</strong> Services
        </motion.h2>
        
        <motion.p 
          className="services-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We offer end-to-end digital solutions designed to elevate your brand, 
          engage your audience, and drive measurable results in today's competitive landscape.
        </motion.p>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="service-icon"
                variants={iconVariants}
              >
                <img src={service.icon} alt={service.title} />
              </motion.div>
              
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              
              <div className="service-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection