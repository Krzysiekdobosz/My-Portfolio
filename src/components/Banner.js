import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';

const HEADLINE = 'PHP & Backend Developer';
const TYPING_SPEED = 100;

const HIGHLIGHTS = [
  { value: '100+', label: 'websites maintained' },
  { value: '3×', label: "Rector's Scholarship" },
  { value: 'B.Eng.', label: 'Software Engineering' },
];

export const Banner = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length >= HEADLINE.length) return;

    const timeout = setTimeout(() => {
      setText(HEADLINE.substring(0, text.length + 1));
    }, TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <section id="home" className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={6}>
            <span className="tagline">Hi, I'm Krzysiek</span>
            <h1>
              <span className="txt-rotate" aria-label={HEADLINE}>
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I'm a PHP and backend developer. I graduated from the Lublin University of Technology
              with a Bachelor of Engineering (inżynier) degree in Computer Science,
              specialising in Software Engineering, and I received the Rector's Scholarship three
              times during my studies.
            </p>
            <p>
              Today I look after more than 100 websites: I keep them secure, fast and up to date,
              and I build new features on the server side &ndash; from database design to APIs and
              integrations.
            </p>
            <ul className="banner-stats">
              {HIGHLIGHTS.map(({ value, label }) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={12} lg={6}>
            <img src={headerImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
