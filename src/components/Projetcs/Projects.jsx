import React from 'react';
import './Projects.css'; // Import the CSS file for Projects styles
import Card from 'react-bootstrap/Card';
import image3 from '../images/VisualAgust.png';
import image2 from '../images/Page 7.png';
import image1 from '../images/Mockup new.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'; // Import Row component
import Col from 'react-bootstrap/Col'; // Import Col component

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h1>My Projects</h1>
        <Row className="justify-content-center"> {/* Use Row to horizontally align */}
          <Col md={4}>
            <Card style={{ width: '21rem' }}>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Hospital Management System</Card.Title>
                <Card.Text>
                 Project to help patients to appoint their doctors online
                </Card.Text>
                <a href="https://hms-frontend2-stks.vercel.app/">
                <Button className="CardBtn">See Project</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Weather app </Card.Title>
                <Card.Text>
                  Project about helping you in finding the Weather Reports around the World 
                </Card.Text>
              
                <a href="https://frontend-weather-nine.vercel.app/">
                <Button className="CardBtn">See Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </div>
    </section>
  );
};

export default Projects;
