import React from 'react';
import './About.css'; // Import the CSS file for About styles

import image2 from '../images/casual.jpg';
import { Link } from 'react-scroll';
const About = () => {
  return (
    <section id="next-section" className="about" >
     
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
 <div className='meSection'>
<img src={image2} style={{ alignSelf: 'center' }}/>

<h1>I am a dedicated and passionate web developer with extensive experience in both frontend and backend technologies. Specializing in the MERN stack 
  (MongoDB, Express.js, React, and Node.js), I excel in creating efficient, scalable, and user-friendly web applications. My expertise lies in crafting
   seamless user experiences, implementing robust backend solutions, and ensuring high performance across all devices. Driven by a love for continuous 
   learning and innovation, I am committed to mastering the latest web technologies and delivering exceptional digital solutions that meet real-world needs.
</h1>
<Link
          to="projects"
          smooth={true}
          duration={200}
        >
<button>
  <span> CHECK OUT MY PROJECTS
  </span>
</button>
</Link>
 </div>
 

     
    </section>
  );
};

export default About;
