import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"
import AboutUs from './AboutUs'
import CTA from './CTA'
import FAQ from './FAQ';
import Features from './Features'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import ReportProcess from './ReportProcess'
import ReportSteps from './ReportSteps';
import WhyChoose from './WhyChoose'
function Home() {
    return (
      <div className="Home">
        <Header />
        <Hero />
        <Features />
        <AboutUs />
        <HowItWorks />
        <ReportSteps />
        <ReportProcess />
        <WhyChoose />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    )
  }
  
  export default Home
