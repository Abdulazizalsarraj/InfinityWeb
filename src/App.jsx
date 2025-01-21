import React from 'react';
import Header from './components/Header/Header';
import About from './components/AboutUs/AboutUs';
import Blog from './components/BlogSection/BlogSectoin';
import FAQ from './components/FAQ/FAQ';
import Portfolio from './components/Portfolio/Portfolio'
import RecentProjects from './components/RecentProjects/RecentProjects';
import Team from './components/TeamSection/TeamSection'
import HeroSection from './components/HeroSection/HeroSection';
import Features from './components/Features/Features';
import InteractiveFeatures from './components/InteractiveFeatures/InteractiveFeatures';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import StatsSection from './components/Stats/StatsSection';
import CTASection from './components/CtaSection/CtaSection';
import PartnersSection from './components/PartnersSection/PartnersSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <CTASection />
      <Services />
      <Features />
      <InteractiveFeatures />
      <Testimonial />
      <Portfolio />
      <RecentProjects />
      <Team />
      <Blog />
      <FAQ />
      <StatsSection />
      <Pricing />
      <PartnersSection />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;



