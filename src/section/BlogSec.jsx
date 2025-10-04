// components/AnimatedBlogSection.jsx
"use client"
import React from 'react'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import './BlogSec.css'

const AnimatedBlogSection = () => {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2023",
      excerpt: "Explore the latest trends and technologies that are shaping the future of digital marketing and how businesses can adapt.",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80"
    },
    {
      id: 2,
      title: "How SEO Can Transform Your Business Growth",
      excerpt: "Learn how implementing effective SEO strategies can dramatically increase your online visibility and drive business growth.",
      date: "April 28, 2023",
      readTime: "7 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      id: 3,
      title: "Social Media Marketing Strategies That Actually Work",
      excerpt: "Discover proven social media strategies that help brands connect with their audience and generate real results.",
      date: "April 12, 2023",
      readTime: "6 min read",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 4,
      title: "Why Content Marketing is Essential for Brand Building",
      excerpt: "Understand the role of content marketing in establishing brand authority and building lasting customer relationships.",
      date: "March 30, 2023",
      readTime: "8 min read",
      category: "Content",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
    },
    {
      id: 5,
      title: "The Power of Email Marketing in the Digital Age",
      excerpt: "Learn how email marketing continues to deliver exceptional ROI and how to create campaigns that convert.",
      date: "March 18, 2023",
      readTime: "5 min read",
      category: "Email",
      image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80"
    },
    {
      id: 6,
      title: "Measuring ROI: Analytics for Digital Marketing",
      excerpt: "A guide to tracking and measuring the return on investment for your digital marketing efforts effectively.",
      date: "March 5, 2023",
      readTime: "9 min read",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
      y: 30,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const cardHoverVariants = {
    rest: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="section section-blog" 
      ref={containerRef}
      style={{ opacity, y }}
    >
      <div className="blog-wrapper" ref={ref}>
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>
            Latest <strong>Insights</strong>
          </h2>
          <p className="blog-subtitle">
            Discover the latest trends, strategies, and tips in digital marketing
          </p>
        </motion.div>

        <motion.div 
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              className="blog-card"
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div 
                className="card-inner"
                variants={cardHoverVariants}
              >
                <div className="card-image">
                  <img src={post.image} alt={post.title} />
                  <div className="card-category">{post.category}</div>
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <button className="card-read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.3335 8H12.6668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="blog-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <p>Want to stay updated with the latest digital marketing insights?</p>
          <button className="blog-subscribe-btn">Subscribe to Our Blog</button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AnimatedBlogSection