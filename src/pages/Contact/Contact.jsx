import React from 'react';
import { FaEnvelope, FaFilePdf, FaLinkedin } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Contact.css';

function Contact() {
  // Reemplaza eCstas URLs con tus enlaces reales
  const CV_TOMAS_CASCONE = "/public/images/CV_TOMAS_CASCONE.pdf";
  const emailAddress = "tomascascone@gmail.com";
  const linkedinUrl = "https://linkedin.com/in/tu-usuario";

  return (
    <section id="contact_me" className="py-5">
      <div className="container">
        <h2 className="text-start mb-5">Contact Me {}</h2>
        
        <div className="row justify-content-center">
          
          {/* CV - Descarga de PDF */}
          <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <FaFilePdf size={50} className="mb-3 text-danger mx-auto" />
                <Card.Title>Curriculum Vitae</Card.Title>
                <Card.Text className="text-muted">
                  Download my complete CV in PDF format
                </Card.Text>
                <Button 
// Esta es la forma MÁS SEGURA

  href={`${window.location.origin}/public/images/CV_TOMAS_CASCONE.pdf`}
  download="CV_Tomas_Cascone.pdf"
  className="btn btn-primary mt-auto"
>
  📄 Descargar mi CV

</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Email - Redirige a Gmail */}
          <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <FaEnvelope size={50} className="mb-3 text-primary mx-auto" />
                <Card.Title>Email</Card.Title>
                <Card.Text className="text-muted">{emailAddress}</Card.Text>
                
              </Card.Body>
            </Card>
          </div>

          {/* LinkedIn - Perfil profesional */}
          <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <FaLinkedin size={50} className="mb-3 text-info mx-auto" />
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text className="text-muted">Let's connect professionally</Card.Text>
                <Button 
                  variant="outline-info" 
                  className="mt-auto"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;