import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import SkillCard from "./Components/skills";
import Projects from "./Components/Project";
import ContactForm from "./Components/contact";
import Footer from "./Components/footer";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <div data-aos="fade-up"><Home /></div>
      <div data-aos="fade-right"><About /></div>
      <div data-aos="fade-up"><SkillCard /></div>
      <div data-aos="fade-up"><Projects /></div>
      <div data-aos="fade-right"><ContactForm /></div>
      <Footer />
    </div>
  );
}

export default App;
