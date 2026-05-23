import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark-950 text-zinc-100 antialiased relative">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        <About />

        {/* Services Showcase */}
        <Services />

        {/* Reviews / Testimonials */}
        <Reviews />

        {/* Interactive Gallery */}
        <Gallery />

        {/* Contact Info & Live Map */}
        <Contact />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Interactive Floating CTA Widgets */}
      <FloatingActions />
    </div>
  );
}

export default App;
