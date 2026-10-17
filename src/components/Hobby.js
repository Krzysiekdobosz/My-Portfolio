import { Container, Row, Col } from 'react-bootstrap';

export const Hobby = () => {
  return (
    <section className="hobby" id="hobby">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="hobby-bx">
              <h2>Hobby</h2>
              <p>
                When I'm not coding, I enjoy spending time with my family, reading books and going
                to the gym. I am also the president of a social dance group, a role that lets me
                combine physical activity with meeting diverse and interesting people.
              </p>
              <p>
                Dance has taught me teamwork, discipline and clear communication &ndash; skills that
                make me a better developer as well.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
