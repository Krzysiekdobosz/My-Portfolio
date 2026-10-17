import { Container, Row, Col } from 'react-bootstrap';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <span className="brand-logo">KD</span>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <SocialLinks />
            <p>&copy; {year} Krzysztof Dobosz. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
