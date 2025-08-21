import Card from 'react-bootstrap/Card';
import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about_me">
      <div className="container_top">
        <h2 className="title_about">About Me</h2>
        <p className="text_about_one">
          My name is <span>Tomas Cascone</span>, I am 27 years old and a Frontend developer based in Mar del Plata, Buenos Aires, Argentina. I am passionate about the world of development and began my education a few years ago.
        </p>
        <p className="text_about_two">
          I enjoy designing and developing responsive, functional web applications. As an IT technician, I am strengthening my skills in full-stack development to create modern digital solutions.
        </p>      
      </div>
      
      <div className="container_middle">
        <h3 className="title_do">What I do?</h3>
        <p className="text_do_1">
          <span>Implementation of designs.</span>
          Transform ideas into functional web pages with modern and responsive designs.
        </p>         
        <p className="text_do_2">
          <span>Performance optimization.</span>
          I enhance and optimize web applications by improving resource efficiency.
        </p>
        <p className="text_do_3">
          <span>Development of user interface.</span>
          I create intuitive and adaptable interfaces for various devices and screen sizes.
        </p>
        <p className="text_do_4">
          <span>Backend development.</span>
          I build robust solutions to manage data and server-side functionalities.
        </p>
      </div>    
      
      <div className="container_bottom">
        <h3 className="title_stacks">My Stacks</h3>
        <div className="skills-section">
          <h4>Frontend</h4>
          <h4>Backend</h4>
          <h4>Others</h4>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>SASS</li>
            <li>Bootstrap</li>
          </ul>          
          <ul className="skills-list backend-list">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
          </ul>
          <ul className="skills-list">
            <li>GIT</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>Vercel</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      
      ;
  ;
  ;

      <div className="container_certifications">
  <div className="container my-5">
    <h2 className="text-start mb-4">Certifications</h2>
    <style>
      {`
        .text-start {
          font-size: 28px;
          color: #1A2525;
          font-weight: var(--font-bold);
        }
      `}
    </style>
    {/* PRIMERA FILA - 4 ELEMENTOS */}
    <div className="row justify-content-center mb-4 ">
      {/* Certificado 1 - IT Technical */}
      <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
        <Card style={{ width: '100%', height: '100%',padding: '8px 16px', background: '#f6f6f6' }}>
          <Card.Img 
            variant="top" 
            src="/images/titulo_secundario.webp"  // Ruta corregida
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>IT Technical</Card.Title>
          </Card.Body>
        </Card>
      </div>

      {/* Certificado 2 - Web Development */}
      <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
        <Card style={{ width: '100%', height: '100%',padding: '8px 16px', background: '#f6f6f6' }}>
          <Card.Img 
            variant="top" 
            src="/images/1.CERTIFICADODESARROLLOWEB.webp"  // Ruta corregida
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>Web Development</Card.Title>
          </Card.Body>
        </Card>
      </div>

      {/* Certificado 3 - Javascript */}
      <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
        <Card style={{ width: '100%', height: '100%',padding: '8px 16px' , background: '#f6f6f6'}}>
          <Card.Img 
            variant="top" 
            src="/images/2.CERTIFICADOJAVASCRIPT.webp"  // Ruta corregida
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>JavaScript</Card.Title>
          </Card.Body>
        </Card>
      </div>

      {/* Certificado 4 - React JS */}
      <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
        <Card style={{ width: '100%', height: '100%',padding: '8px 16px', background: '#f6f6f6' }}>
          <Card.Img 
            variant="top" 
            src="/images/3.CERTIFICADOREACTJS.webp"  // Ruta corregida
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>React JS</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>

    {/* SEGUNDA FILA - 3 ELEMENTOS (CENTRADOS) */}
    <div className="row justify-content-center">
      {/* Certificado 5 - Backend I */}
      <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
        <Card style={{ width: '100%', height: '100%', padding: '8px 16px', background: '#f6f6f6'}}>
          <Card.Img 
            variant="top" 
            src="/images/3.CERTIFICADOREACTJS.webp"  // Misma imagen temporal
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>Backend I</Card.Title>
          </Card.Body>
        </Card>
      </div>

      {/* Certificado 6 - Backend II */}
      <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
        <Card style={{ width: '100%', height: '100%' ,padding: '8px 16px', background: '#f6f6f6'}}>
          <Card.Img 
            variant="top" 
            src="/images/3.CERTIFICADOREACTJS.webp"  // Misma imagen temporal
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>Backend II</Card.Title>
          </Card.Body>
        </Card>
      </div>

      {/* Certificado 7 - Backend III */}
      <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
        <Card style={{ width: '100%', height: '100%' ,padding: '8px 16px', background: '#f6f6f6'}}>
          <Card.Img 
            variant="top" 
            src="/images/3.CERTIFICADOREACTJS.webp"  // Misma imagen temporal
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>Backend III</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
</div>
    </section>

  );
}

export default About;