// components/ContactForm.jsx
"use client"

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}%0A%0A` +
      `_Sent from DEOS Website_`;
    
    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/919330270619?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Show success message (optional)
    alert('Thank you for your message! You will be redirected to WhatsApp.');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <motion.div 
      ref={ref}
      className="contact-form-container"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.form 
        onSubmit={handleSubmit}
        className="animated-contact-form"
      >
        <motion.div 
          className="form-group"
          variants={itemVariants}
        >
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </motion.div>
        
        <motion.div 
          className="form-group"
          variants={itemVariants}
        >
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </motion.div>
        
        <motion.div 
          className="form-group"
          variants={itemVariants}
        >
          <input 
            type="tel" 
            name="phone"
            placeholder="Your Phone" 
            value={formData.phone}
            onChange={handleChange}
          />
        </motion.div>
        
        <motion.div 
          className="form-group"
          variants={itemVariants}
        >
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </motion.div>
        
        <motion.button 
          type="submit" 
          className="submit-btn"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span>Send via WhatsApp</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7L21 3M21 3H17M21 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </motion.form>
    </motion.div>
  );
}