"use client"
import React from "react"

import { useState } from "react"
import "./FAQ.css"
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqItems = [
    {
      question: "Do I need an account to report an issue?",
      answer:
        "No, you can report anonymously. However, creating an account lets you track your reports, get updates, and earn rewards.",
    },
    {
      question: "Is SafeCity free to use?",
      answer:
        "Yes, SafeCity is completely free for all citizens. Our platform is funded through partnerships with local governments and organizations committed to improving urban infrastructure.",
    },
    {
      question: "What types of issues can I report?",
      answer:
        "You can report a wide range of infrastructure issues including potholes, broken streetlights, illegal dumping, damaged sidewalks, graffiti, water leaks, and more. If you're unsure, you can still submit a report and we'll direct it to the appropriate department.",
    },
    {
      question: "Can I track the progress of my report?",
      answer:
        "Yes, if you create an account, you can track the status of your reports in real-time. You'll receive notifications when your report is received, assigned, in progress, and resolved.",
    },
    {
      question: "How long does it take to resolve an issue?",
      answer:
        "Resolution times vary depending on the type and severity of the issue. Minor issues might be resolved within days, while more complex problems could take weeks. Our platform provides estimated timeframes based on historical data for similar issues in your area.",
    },
  ]

  return (
    <section className="faq section">
      <div className="container">
        <div className="faq-container">
          <div className="faq-content">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Have a question about SafeCity? Find answers here.</p>
            <p className="faq-contact">
              If your question isn't listed, feel free to reach out and we'll get back you shortly.
              
            </p>
            <a href="#contact" >
                Contact Us <FaArrowRight className="rightarrow"/>
              </a>
          </div>

          <div className="accordion">
            {faqItems.map((item, index) => (
              <div key={index} className={`accordion-item ${activeIndex === index ? "active" : ""}`}>
                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                  <h3 className="accordion-title">{item.question}</h3>
                  <p className="accordion-icon">{activeIndex === index ? <FaChevronUp/> : <FaChevronDown/>}</p>
                </div>
                <div className={`accordion-content ${activeIndex === index ? "show" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
