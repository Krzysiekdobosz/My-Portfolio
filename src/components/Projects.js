import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
//import projImg2 from "../assets/img/project-img2.png";
//import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Conference-Room",
      description: "Home Page",
      imgUrl: projImg1,
    },
    {
      title: "Login Page",
      description: "User Authentication",
      imgUrl: projImg1,
    },
    {
      title: "Registration Page",
      description: "User registration",
      imgUrl: projImg1,
    },
    {
      title: "Admin Dashboard",
      description: "Admin Panel",
      imgUrl: projImg1,
    },
    {
      title: "Add Room Page",
      description: "Room Management",
      imgUrl: projImg1,
    },
    {
      title: "User Dashboard",
      description: "User Panel",
      imgUrl: projImg1,
    },
  ];

    const projects2 = [
      {
        title: "Covid-Data-Web-Page",
        description: "Home Page",
        imgUrl: projImg1,
      },
      {
        title: "Login Page",
        description: "User Authentication",
        imgUrl: projImg1,
      },
      {
        title: "Registration Page",
        description: "User registration",
        imgUrl: projImg1,
      },
      {
        title: "Show vaccination changes in countries",
        description: "",
        imgUrl: projImg1,
      },
      {
        title: "Show Vaccinations",
        description: "Graf Page",
        imgUrl: projImg1,
      },
      {
        title: "User Dashboard",
        description: "User Panel",
        imgUrl: projImg1,
      },
    ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                The projects showcased in my portfolio represent stepping stones
                 on my coding journey, each one 
                 teaching me valuable lessons 
                 and pushing me to explore new 
                 territories in the world of
                  full-stack development. 
                  From tackling the complexities
                   of database management to the intricacies of crafting
                    seamless user interfaces, every project has been a learning experience.
                     These projects are not just lines of code, but rather testaments to my 
                     evolving skillset 
                     and my dedication to turning innovative ideas into reality.
                     ...
                    Projects are constranly being uploaded to github and portfolio

                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Conference Room</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Covid data web page</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Dance Group Page </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Comming Soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((projects2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>   
                        Comming soon
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}