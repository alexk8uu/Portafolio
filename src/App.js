import React, { useEffect, useState } from 'react';
import './App.css';
import Cover from '../src/components/cover/Cover.js'
import NavBar from '../src/components/navbar/Navbar.js'
import About from './components/about/About';
import Slider from './components/slider/Slider.js';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import Modal from './components/modal/Modal';
import styled from 'styled-components';




function App() {


  const [ modalView, setModalView ] = useState(false)

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
