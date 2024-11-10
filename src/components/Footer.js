import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

  const logoStyle = {
    fontFamily: "'Ms Madi', cursive",
    fontSize: "42px",
    fontWeight: "600",
    color: "#fff",
    textDecoration: "none",
    marginRight: "15px",
    marginTop: "50px",
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} style={logoStyle}>
            Olivia Sampaio
          </Col>
          <Col size={12} sm={12} className="text-center text-sm-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/olivia-sampaio/"><img src={navIcon1} alt="Icon" /></a>
              
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p className="text-center text-sm-center">Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
