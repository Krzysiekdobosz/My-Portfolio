import { Container, Row, Col } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import {useState, useEffect} from 'react';
import 'animate.css';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ['Fullstack Developer'];
    const period = 100;
    const [delta, setDelta] = useState(200);
    const [index, setIndex] = useState(0);
    


    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 1.5);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(200);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }







    return(
<section id="home" className="banner">
 <Container>
    <Row className="align-items-center">
        <Col lg={6} md={12} xl={6} sm={12}>
        <span className="tagline">{}Hi I'm Krzysiek</span>
        <h1>{'I am Computer Science Student and  '}<span className="wrap">{text}</span></h1>
        <h2>  </h2>
        <p>Currently I am studying Computer Science at the Lublin University of Technology.
             I am interested in web development and I am constantly improving my skills in this field.
              I am looking for an internship as a Frontend Developer.</p>
        </Col>
        <Col lg={6} md={12} xl={6} sm={12}>
        <img src={ headerImg } alt="Header Img" />
        </Col>



        </Row>
 </Container>
</section>
    )
}
