"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, useScroll, useTexture, ScrollControls, Scroll } from "@react-three/drei"
import { motion } from "framer-motion"
import * as THREE from 'three'
import { useRef } from 'react'
import { useSpring, a } from '@react-spring/three'
import './styles.css'
import ContactForm from '../section/ContactForm'
import TestimonialsSlider from '../section/TestimonialsSlider'
import PremiumFAQ from '../section/PremiumFAQ'
import PremiumCTA from '../section/CTA'
import AnimatedBlogSection from '../section/BlogSec'
import TeamSection from '../section/TeamSec'
import ServicesSection from '../section/ServicesSection'
import B2BBusinessSection from '../section/B2BBusinessSection'
import { Link } from 'react-router-dom'

const teamMembers = [
  { name: "Shruti Sinha", role: "Founder & CEO", img: "/sayam.jpeg" },
  { name: "Sukrit Sinha", role: "Co-Founder & Strategist", img: "/sayam.jpeg" },
  { name: "John Doe", role: "UI/UX Designer", img: "/sayam.jpeg" },
  { name: "Jane Smith", role: "Marketing Head", img: "/sayam.jpeg" },
]

// Team Member 3D Component
function TeamMember3D({ member, index, scroll }) {
  const meshRef = useRef()
  const texture = useTexture(member.img)

  // Animation based on scroll position
  const { position, scale, rotation } = useSpring({
    position: scroll > index * 0.25 && scroll < (index + 1) * 0.25
      ? [0, 0, 0]
      : [0, -10, 0],
    scale: scroll > index * 0.25 && scroll < (index + 1) * 0.25
      ? [1, 1, 1]
      : [0.5, 0.5, 0.5],
    rotation: scroll > index * 0.25 && scroll < (index + 1) * 0.25
      ? [0, 0, 0]
      : [0, Math.PI * 0.5, 0],
    config: { mass: 1, tension: 180, friction: 12 }
  })

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.1
    }
  })

  return (
    <a.group
      position={position}
      scale={scale}
      rotation={rotation}
    >
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <mesh ref={meshRef} position={[index * 3 - 4.5, 0, 0]}>
          <planeGeometry args={[2.2, 3]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
      </Float>
    </a.group>
  )
}

// Main Scene Component
function TeamScene() {
  const scrollData = useScroll()
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      // Parallax effect based on scroll
      groupRef.current.position.y = scrollData.offset * -5
    }
  })

  return (
    <group ref={groupRef}>
      {teamMembers.map((member, i) => (
        <TeamMember3D
          key={i}
          member={member}
          index={i}
          scroll={scrollData.offset}
        />
      ))}
    </group>
  )
}

export default function Overlay() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      
      // Calculate the target position with offset for header
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Smooth scroll with easing
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation click
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.querySelector('.nav-menu');
      const hamburger = document.querySelector('.hamburger');

      if (isMenuOpen &&
        navMenu &&
        hamburger &&
        !navMenu.contains(event.target) &&
        !hamburger.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <header>
        <div className="brand">
          <img src="/brand.svg" alt="Brand Logo" />
          <p>
            DIGITAL <strong>EXPOSURE</strong>
          </p>
        </div>

        {/* Hamburger Menu Button */}
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#contact" 
              style={{ textDecoration: "none" }}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact us
            </a>
          </li>
          <li>
            <a 
              href="#blog" 
              style={{ textDecoration: "none" }}
              onClick={(e) => handleNavClick(e, 'blog')}
            >
              Blogs
            </a>
          </li>
          <li>
            <a 
              href="#team" 
              style={{ textDecoration: "none" }}
              onClick={(e) => handleNavClick(e, 'team')}
            >
              Team
            </a>
          </li>
          <li>
            <a 
              href="#business" 
              style={{ textDecoration: "none" }}
              onClick={(e) => handleNavClick(e, 'business')}
            >
              Business
            </a>
          </li>
          <li>
            <a 
              href="#service" 
              style={{ textDecoration: "none" }}
              onClick={(e) => handleNavClick(e, 'service')}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              style={{ textDecoration: "none" }}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
          </li>
        </ul>

        <button className="cta-button" ><a href="#contact" style={{ textDecoration: "none" }}>KNOW MORE</a></button>
      </header>

      {/* Overlay for mobile menu */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>

      <div className="main-wrapper">
        <section className="section section-1">
          <div className="wrapper">
            <h2>
              Digital Exposure <strong>Online Services</strong>
            </h2>
            <p>
              A Qualified engineer specializing in digital technology
              <strong> along with a committed team of professionals</strong>. Experience a new era of mental clarity
              and youthful energy—because <strong>aging is no longer a one-way street.</strong>
            </p>
          </div>
        </section>

        <section className="section section-2">
          <div className="wrapper">
            <h2>
              The <strong>Future</strong> of Digital Marketing
            </h2>
            <p>
              Over the years, our strategic services have provided a competitive edge in the marketplace{' '}
              <strong>and enriched DEOS with a bevy of esteemed clients for its efficiency</strong>. With
              cutting-edge technology, we repair and revitalize digital pathways, offering
              unprecedented benefits for your Digital Marketing.
            </p>
            <ul>
              <li>A business Website (Fullstack/Dynamic/Static)</li>
              <li>Search <strong>engine optimization</strong> (SEO)</li>
              <li>Local <strong>SEO</strong> Google My Business</li>
              <li>Social <strong>Media Marketing SMM</strong></li>
              <li>Communications <strong>Media Marketing</strong></li>
              <li>Social <strong>Media Marketing SMM</strong></li>
              <li>Brand <strong>Strategy Management</strong></li>
            </ul>
          </div>
        </section>
        
        <div id='service'>
          <ServicesSection />
        </div>

        <section className="section section-3">
          <div className="card-wrapper">
            <div className="card">
              <h2>85%</h2>
              <p>
                Over 85% of participants experienced significant improvements in their own business
              </p>
            </div>
            <div className="card">
              <h2>100%</h2>
              <p>
                We proudly achieved 100% customer satisfaction, with all clients reporting complete work delivered to their expectations.
              </p>
            </div>
          </div>
          <div className="numbers-title">
            <h2>
              DIGITAL EXPOSURE <strong>BY THE NUMBERS</strong>
            </h2>
            <p>
              At Digital Exposure Online Services, we specialize in delivering powerful B2B digital marketing
              solutions. From brand visibility to lead generation, our strategies are designed to drive growth,
              boost ROI, and help businesses scale in today's competitive digital landscape.
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section section-about" id='about'>
          <div className="about-wrapper">
            <h2>
              About <strong>Us</strong>
            </h2>
            <p>
              Digital Exposure Online Services was established by a technopreneur, a qualified
              engineer specializing in digital technology, along with a committed team of professionals
              who have been contributing meaningfully in the arena of digital communication and
              marketing for a considerable span of time. Over the years, our strategic services have
              provided a competitive edge in the marketplace and enriched DEOS with a bevy of esteemed
              clients, recognized for our efficiency, transparency, and desired results.
            </p>
            <p>
              Since inception, DEOS has been offering services equipped with three pillars of strength:
              <strong> Technical competency, Creative proficiency, and Cost efficiency</strong>. With a
              thirst for updating and delivering new-age solutions to clients, we continue to remain
              contemporary to ensure the best possible services.
            </p>
            <p>
              Our relationship with clients has transcended beyond consultancy to becoming a part of
              their extended family. This deeper understanding has helped us design more effective
              solutions tailored to their objectives. In this milieu, DEOS truly becomes
              <strong> "Your Digital Partner".</strong>
            </p>
          </div>
        </section>

        <div id='business'>
          <B2BBusinessSection />
        </div>

        <section className="section section-why">
          <div className="why-wrapper">
            <h2>Why <strong>Digital Exposure Online Services</strong></h2>
            <div className="why-grid">
              <div className="why-card">
                <h3>Decade of Experience</h3>
                <p>Digital Exposure Online Services has more than a decade's worth of experience providing integrated Digital Marketing solutions for Start-up, SEO Services, Web Development, E-commerce Website Development, and Email Marketing.</p>
              </div>

              <div className="why-card">
                <h3>Comprehensive Services</h3>
                <p>Besides optimizing your website for higher rankings on search engines, we are also specialized in Email Marketing, WhatsApp Marketing, Online Marketing, for your business growth.</p>
              </div>

              <div className="why-card">
                <h3>Round-the-Clock Service</h3>
                <p>Digital Exposure Online Services is staffed around the clock every day of the year to meet your target. We provide the best and premium services to all types of businesses.</p>
              </div>

              <div className="why-card">
                <h3>Exclusive Focus</h3>
                <p>We don't work for two different companies or brands for the same keyword or domain, ensuring your business gets our undivided attention and expertise.</p>
              </div>

              <div className="why-card">
                <h3>Affordable Excellence</h3>
                <p>We offer the best and the most reasonable and affordable Digital Marketing Services with Results-Oriented Strategies that deliver measurable ROI.</p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSlider />
        <PremiumFAQ />
        <PremiumCTA />

        {/* Team Section */}
        <div id='team'>
          <TeamSection />
        </div>

        {/* Contact Section */}
        <section className="section section-contact" id='contact'>
          <div className="contact-wrapper">
            <div className="contact-content">
              <h2>
                Get In <strong>Touch</strong>
              </h2>
              <p>
                Ready to transform your digital presence? Contact us today for a free consultation
                and let's discuss how we can help your business grow.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <img src="/phone.png" width={20} alt="Phone" />
                  <span>+91 9330270619</span>
                </div>
                <div className="contact-item">
                  <img src="/email.png" width={20} alt="Email" />
                  <span>info@deos.dev</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </section>
        <div id='blog'>
          <AnimatedBlogSection />
        </div>
      </div>

      <footer>
        <div className="footer-left">
          <h3>The time is now</h3>
          <p>The path is forward</p>
          <div className="social">
            <img src="/instagram.svg" width={30} alt="Instagram" />
            <img src="/youtube.svg" width={30} alt="YouTube" />
            <img src="/linkedin.svg" width={30} alt="LinkedIn" />
          </div>
          <p className="copyright">Copyright @deos.dev. All rights reserved to Digital Exposure Online Services .</p>
        </div>
        <div className="footer-right">
          <img src="/brand.svg" width={60} alt="Brand Logo" />
          <ul>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Cookie policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}