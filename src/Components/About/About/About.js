import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import GetMove from '../GetMove/GetMove';
import OurStory from '../OurStory/OurStory';

const About = () => {
  return (
    <div>
      <Navigation />
      <OurStory />
      <AboutUs />
      <GetMove />
      <Footer />
    </div>
  );
};

export default About;