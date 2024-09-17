
import './App.css';
import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import Formrow from './components/Formrow'
import Footer from './components/Footer'
import PackageGallery from './components/PackageCard'
import ServicesSection from './components/Service'
function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <Formrow/>
  <PackageGallery/>
  <ServicesSection/>
  <Footer/>
  </>
  );
}

export default App;
