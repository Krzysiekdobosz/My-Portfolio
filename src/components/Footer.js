import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
          <Col size={12} sm={6}>
          <h1 style={{ color: 'white' }}>KD</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <h5>Site is under construction so it may miss some functions</h5>
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/krzysztof-dobosz-0827b21aa/"><img src={navIcon1} alt="" /></a>
               < a href="https://www.github.com/Krzysiekdobosz"><img src={navIcon2} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}