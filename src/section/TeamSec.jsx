// components/TeamSection.jsx
"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import './TeamSec.css'

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [hasBeenInView, setHasBeenInView] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Track if section has been in view at least once
  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true)
    }
  }, [isInView, hasBeenInView])

  const teamMembers = [
    {
      id: 1,
      name: "Sayam Sinha Ray",
      role: "Founder & CEO",
      desc: "Digital strategist with 10+ years of experience in transforming businesses through technology.",
      img: "/sayam.jpeg"
    },
    {
      id: 2,
      name: "Puja Chowdhury",
      role: "Operation Head",
      desc: "Business development expert specializing in growth strategies and client relationships.",
      img: "/puja.jpg"
    },
    {
      id: 3,
      name: "Rima Saha ",
      role: "Branch Manager",
      desc: "Creative designer with a passion for creating intuitive and beautiful user experiences.",
      img: "/team3.jpg"
    },
    {
      id: 4,
      name: "Jane Smith",
      role: "Marketing Head",
      desc: "Digital marketing expert with proven track record in brand development and campaign management.",
      img: "/team4.jpg"
    },
    {
      id: 5,
      name: "Mike Johnson",
      role: "SEO Specialist",
      desc: "SEO guru who specializes in driving organic traffic and improving search engine rankings.",
      img: "/team5.jpg"
    },
    {
      id: 6,
      name: "Sarah Wilson",
      role: "Content Writer",
      desc: "Creative writer crafting compelling content that engages audiences and drives conversions.",
      img: "/team6.jpg"
    },
    {
      id: 7,
      name: "David Chen",
      role: "Fullstack Developer",
      desc: "Technical expert specializing in building robust and scalable web applications.",
      img: "/team7.jpg"
    },
    {
      id: 8,
      name: "Emily Rodriguez",
      role: "Social Media Manager",
      desc: "Social media strategist creating engaging content and building strong online communities.",
      img: "/team8.jpg"
    },
    {
      id: 9,
      name: "Alex Turner",
      role: "Project Manager",
      desc: "Experienced project manager ensuring timely delivery and client satisfaction.",
      img: "/team9.jpg"
    },
    {
      id: 10,
      name: "Lisa Wang",
      role: "Data Analyst",
      desc: "Data-driven analyst providing insights to optimize digital marketing strategies.",
      img: "/team10.jpg"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      filter: "blur(10px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  // Calculate animation state based on scroll position
  const getAnimationState = () => {
    if (!hasBeenInView) return "hidden"
    return isInView ? "visible" : "exit"
  }

  return (
    <section className="section section-team" ref={ref}>
      <div className="team-wrapper">
        <motion.div 
          className="team-header"
          initial="hidden"
          animate={getAnimationState()}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" }
            },
            exit: { 
              opacity: 0, 
              y: -30,
              transition: { duration: 0.5, ease: "easeIn" }
            }
          }}
        >
          <h2>
            Our <strong>Team</strong>
          </h2>
          <p className="team-intro">
            Meet the talented professionals behind Digital Exposure Online Services. 
            Our diverse team brings together expertise from various domains to deliver 
            exceptional digital solutions.
          </p>
        </motion.div>

        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          animate={getAnimationState()}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              className="team-member"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="team-image">
                <img src={member.img} alt={member.name} />
                <div className="team-overlay">
                  <div className="social-links">
                    <span className="social-icon">📧</span>
                    <span className="social-icon">💼</span>
                    <span className="social-icon">📱</span>
                  </div>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-desc">{member.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection