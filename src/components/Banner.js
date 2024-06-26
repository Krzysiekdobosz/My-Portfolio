import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import {useState, useEffect} from 'react';
import 'animate.css';


export const Banner = () => {
    const [loopNum, ] = useState(0);
    const [text, setText] = useState('');
    const toRotate = ['I am Computer Science Student and Fullstack Developer'];
    const [delta, ] = useState(100);
    const [, setIndex] = useState(0);
    


    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText =  fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
       
    
        
          setIndex(prevIndex => prevIndex + 1);
        
      }







    return(
<section id="home" className="banner">
 <Container>
    <Row className="align-items-center">
        <Col lg={6} md={12} xl={6} sm={12}>
        <span className="tagline">{}Hi I'm Krzysiek</span>
        <h1>{''}<span className="wrap">{text}</span></h1>
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
