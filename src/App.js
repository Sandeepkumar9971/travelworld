
import './App.css';
import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import Formrow from './components/Formrow'
import Footer from './components/Footer'
import PackageGallery from './components/PackageCard'
import ServicesSection from './components/Service'
import Gallery from './components/Gallery';
import AboutUs from './components/Aboutus';
import { useRef } from 'react';
function App() {
  const heroRef = useRef(null);
  const formRowRef = useRef(null);
  const packageGalleryRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutUsRef = useRef(null);
  const footerRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <Navbar 
        scrollToSection={scrollToSection} 
        heroRef={heroRef} 
        formRowRef={formRowRef} 
        packageGalleryRef={packageGalleryRef} 
        servicesSectionRef={servicesSectionRef} 
        galleryRef={galleryRef} 
        aboutUsRef={aboutUsRef} 
        footerRef={footerRef}
      />
      <div ref={heroRef}><Hero /></div>
      <div ref={formRowRef}><Formrow /></div>
      <div ref={packageGalleryRef}><PackageGallery /></div>
      <div ref={servicesSectionRef}><ServicesSection /></div>
      <div ref={galleryRef}><Gallery /></div>
      <div ref={aboutUsRef}><AboutUs /></div>
      <div ref={footerRef}><Footer /></div>
    </div>
  );
}

export default App;
