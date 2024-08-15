import { Link } from 'react-scroll';
import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <section id="profile" className="hero">
      <div className="hero-content">
        <h1>HELLO MY NAME IS SAJAL</h1>
        <p>I'm a FULLSTACK DEVELOPER</p>
        <Link
          to="next-section"
          smooth={true}
          duration={200}
        >
          <button style={{marginLeft:330}}>
            <p>WHO AM I ?</p>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
