import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from "framer-motion";
import Header from "./componennts/Header.jsx";
import Hero from "./componennts/Hero.jsx";
import Features from "./componennts/Features.jsx";
import HowItWorks from "./componennts/ HowItWorks.jsx";
import Testimonials from "./componennts/Testimonials.jsx";
import FAQ from "./componennts/FAQ.jsx";
import CTABanner from "./componennts/CTABanner.jsx";
import Footer from "./componennts/Footer.jsx";
import Login from "./pages/Auth/Login.jsx"
import Signup from "./pages/Auth/Signup.jsx"


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8F9FA]">
        <Header />
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={
            <>
             <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ/>
        <CTABanner/>
            </>
          } />
          
          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Add other routes as needed */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;