// components/TestimonialsSlider.jsx
"use client"
import React from 'react'

import { useState, useEffect, useRef } from 'react'
import './TestimonialsSlider.css'

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const trackRef = useRef(null)
  const autoPlayRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      text: "Digital Exposure transformed our online presence completely. Our website traffic increased by 200% within just 3 months of working with them. Highly recommended!",
      author: "Rajesh Kumar",
      role: "CEO, TechInnovate Solutions",
      image: "/testimonials/p1.png"
    },
    {
      id: 2,
      text: "The SEO strategy implemented by DEOS took our business to the first page of Google for all our key keywords. Their team is professional and results-driven.",
      author: "Priya Sharma",
      role: "Marketing Director, FashionHub",
      image: "/testimonials/p3.png"
    },
    {
      id: 3,
      text: "Exceptional service! The social media campaign they created generated over 5000 qualified leads for our startup. Their creativity and execution are top-notch.",
      author: "Michael Chen",
      role: "Founder, HealthTech Startup",
      image: "/testimonials/p4.png"
    },
    {
      id: 4,
      text: "The website they developed for us is not only beautiful but also highly functional. Our conversion rates improved by 150% after the redesign.",
      author: "Sarah Johnson",
      role: "Owner, Boutique Retail Store",
      image: "/testimonials/p5.png"
    },
    {
      id: 5,
      text: "Working with DEOS has been a game-changer for our brand. Their comprehensive digital marketing strategy delivered measurable ROI from day one.",
      author: "David Brown",
      role: "COO, Manufacturing Company",
      image: "/testimonials/p6.png"
    }
  ]

  const goToSlide = (index) => {
    setCurrentSlide(index)
    resetAutoPlay()
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    resetAutoPlay()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    resetAutoPlay()
  }

  const resetAutoPlay = () => {
    setIsAutoPlaying(false)
    clearTimeout(autoPlayRef.current)
    autoPlayRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setTimeout(nextSlide, 5000)
    }
    return () => clearTimeout(autoPlayRef.current)
  }, [currentSlide, isAutoPlaying])

  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current
      const slideWidth = track.offsetWidth / 3 // Show 3 slides at once
      track.style.transform = `translateX(-${currentSlide * slideWidth}px)`
    }
  }, [currentSlide])

  return (
    <section className="section section-testimonials">
      <div className="testimonials-wrapper">
        <h2>
          What Our <strong>Clients Say</strong>
        </h2>
        <p className="testimonials-intro">
          Don't just take our word for it. Here's what our satisfied clients have to say 
          about their experience working with Digital Exposure Online Services.
        </p>
        
        <div className="testimonials-container">
          <div className="testimonials-slider">
            <div className="testimonials-track" ref={trackRef}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="testimonial-content">
                    <div className="quote-icon">“</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img src={testimonial.image} alt={testimonial.author} />
                      </div>
                      <div className="author-info">
                        <h4>{testimonial.author}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-controls">
            <button className="testimonial-prev" onClick={prevSlide}>←</button>
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button className="testimonial-next" onClick={nextSlide}>→</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider