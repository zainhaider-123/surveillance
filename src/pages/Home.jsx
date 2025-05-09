import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Hero from '../component/Hero';
import Footer from '../component/Footer';
import Aboutus from '../component/Aboutus';
import Project from '../component/Project';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.substring(1); // e.g. #project → project
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 600,
          smooth: true,
          offset: -80,
        });
      }, 100); // Slight delay to ensure components are rendered
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="aboutus">
        <Aboutus />
      </section>

      <Footer />
    </>
  );
};

export default Home;
