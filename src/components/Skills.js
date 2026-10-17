import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import meter4 from '../assets/img/meter4.svg';
import meter5 from '../assets/img/meter5.svg';
import meter6 from '../assets/img/meter6.svg';
import meter7 from '../assets/img/meter7.svg';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const SKILLS = [
  { name: 'PHP', meter: meter5 },
  { name: 'Java', meter: meter4 },
  { name: 'Node.js', meter: meter3 },
  { name: 'JavaScript', meter: meter2 },
  { name: 'React', meter: meter1 },
  { name: 'HTML', meter: meter7 },
  { name: 'CSS', meter: meter6 },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                My main focus is the back end. I write PHP every day, mostly with Laravel and MySQL,
                and I design databases, REST APIs and integrations with external services. I also
                work with Node.js and Java.
                <br />
                Maintaining over 100 websites has taught me how to keep projects secure, fast and
                easy to update. When a project needs it, I handle the front end too, using HTML,
                CSS, JavaScript, React, Vue and Next.js.
              </p>
              <Carousel responsive={responsive} infinite className="skill-slider">
                {SKILLS.map(({ name, meter }) => (
                  <div className="item" key={name}>
                    <img src={meter} alt="" />
                    <h5>{name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
