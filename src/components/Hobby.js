import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export const Hobby = () => {

    return (
        <section id="hobby" className="hobby">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2 className="section-title">Hobby</h2>
                    </Col>
                    <Col size={12}>
                        <div className="hobby-content">
                            <p>When I'm not coding, I enjoy spending time with my family, reading books, and going to the gym.
                                Beyond that I hold a unique role as the president of a social dance formation. This leadership position has allowed me to combine physical activity with the joy of connecting with diverse and interesting people. Through dance, I’ve learned teamwork, discipline, and effective communication—skills that complement my technical abilities. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
