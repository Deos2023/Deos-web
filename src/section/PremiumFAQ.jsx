// components/PremiumFAQ.jsx
"use client"
import React from 'react'
import { useState } from 'react'
import './PremiumFAQ.css'
import { Plus, ArrowUp } from 'lucide-react';

const PremiumFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqItems = [
    {
      question: "What are digital marketing services you provide?",
      answer: "Digital Exposure Online Services is a full-service Digital marketing firm, which means we offer everything from SEO to conversion analysis. A few examples of the digital marketing services we offer include SEO, Pay-Per-Click Advertising, Social Media Marketing, Content Marketing, Email Marketing, Copywriting, conversion rate optimization, Website Design."
    },
    {
      question: "How much does a marketing company charge?",
      answer: "Digital Marketing fee is the equivalent of paying a consultant or a freelancer on a monthly basis to help you with your business. For example, we charge a fixed amount for SEO for 10 Keywords, 15000/- a month. Social Media Marketing 25000/- Monthly which include Creative, Daily posting, Organic Search, User Interaction and many more."
    },
    {
      question: "Should I hire Digital Marketing Company?",
      answer: "In today's competitive business world it is very important to hire Digital Marketing Agency or Digital Marketing Consultants who make the right plan and implement it effectively. Hiring a Digital Marketing Agency will help your business to reach out to potential customers with the right strategies thereby increasing your leads and generating more revenue."
    },
    {
      question: "Which is the best digital marketing company?",
      answer: "A great digital marketing company like Digital Exposure Online Services acts as a long-term partner in your success. They're flexible, creative, adaptable, results oriented, and approachable. They don't have a one-size-fits-all approach - they spend time on building a plan that works for your business and implement that plan as soon as possible."
    },
    {
      question: "Will Digital Marketing make my Business Profitable?",
      answer: "Yes, Digital Marketing can surely help you to grow your business. But you have to be prepared for each scenario. Performing smart Digital Marketing strategy can have your business outgrow your competition giving you smooth track to gain more and more customers or opportunities. Before placing your hand into Digital Marketing, hire Best Digital Marketing Agency."
    },
    {
      question: "What is digital marketing and how it is different from SEO?",
      answer: "Digital Marketing can be defined as everything you, your brand or your company does to market your products or services to customers and prospects using digital technologies. All marketing activities that take place in the digital realm and involve digital media is digital marketing. SEO is one of the many ways you employ digital marketing tactics."
    },
    {
      question: "When is the best time to hire your company for Digital marketing services?",
      answer: "The best time to hire our Digital marketing services is during the time of your website development. Our digital marketing professionals work closely with your web designers and developers to make sure that your web site is search engine friendly. Designing a beautiful website and then realizing it is not SEO optimized is not an ideal situation."
    },
    {
      question: "Can digital marketing make you rich?",
      answer: "Yes, I am pretty much sure that Digital Marketing has the good option to make you rich in your business. But it depends upon business like type of business. Digital Marketing in India like Digital Exposure Online Services will gives you a wing to reach and engage specific target customer and track them easily in very cost effective way."
    }
  ]

  const toggleFAQ = (index) => {
    console.log('Clicked index:', index)
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="section section-faq">
      <div className="faq-wrapper">
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked <strong className="faq-title-accent">Questions</strong>
          </h2>
          <p className="faq-subtitle">
            Get answers to the most common questions about our digital marketing services
          </p>
        </div>

        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="faq-question-text">{item.question}</h3>
                <div className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>
                  <span className="faq-icon-plus">
                    {activeIndex === index ? <ArrowUp size={20} /> : <Plus size={20} />}
                  </span>
                </div>
              </div>
              
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <div className="answer-content">
                  <p className="faq-answer-text">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3 className="faq-cta-title">Still have questions?</h3>
          <p className="faq-cta-subtitle">Contact us for more information about our services</p>
          <button className="faq-contact-btn"><a href="#contact">Get in Touch</a></button>
        </div>
      </div>
    </section>
  )
}

export default PremiumFAQ