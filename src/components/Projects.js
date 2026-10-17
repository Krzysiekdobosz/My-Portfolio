import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard';
import mediseptImg from '../assets/img/project-medisept.jpg';
import wsparcieLtoImg from '../assets/img/project-wsparcielto.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';

const commercialProjects = [
  {
    title: 'Medisept',
    description:
      'Corporate website of a Polish manufacturer of disinfection and cleaning products. Product catalogue, industry pages and six language versions.',
    stack: ['Next.js', 'React', 'i18n'],
    imgUrl: mediseptImg,
    url: 'https://medisept.pl/',
    linkLabel: 'Visit website',
  },
  {
    title: 'Wsparcie LTO',
    description:
      'Fundraising website of the Lublin Ornithological Society protecting rare forest birds. Species pages, nest adoption and a map of protected nests.',
    stack: ['Laravel', 'PHP', 'JavaScript'],
    imgUrl: wsparcieLtoImg,
    url: 'https://wsparcielto.org.pl/',
    linkLabel: 'Visit website',
  },
];

const personalProjects = [
  {
    title: 'Conference Room Booking',
    description: 'Browse conference rooms, check their availability and book them. Separate user and admin panels.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    url: 'https://github.com/Krzysiekdobosz/Conference-Room-REACT-NODE-MONGO',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'NajmujMieszkanie',
    description: 'Apartment and room rental platform with filtering, user roles, favourites and viewing reservations.',
    stack: ['Vue 3', 'Laravel 11', 'MySQL'],
    url: 'https://github.com/Krzysiekdobosz/NajmujMieszkanie',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Mini Online Store',
    description: 'Registration and login, product browsing, shopping cart and product administration.',
    stack: ['React', 'Node.js', 'Express'],
    url: 'https://github.com/Krzysiekdobosz/ShopReactNodejs',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Covid Vaccinations',
    description: 'Web app presenting COVID-19 vaccination data and how it changed across countries.',
    stack: ['React', 'Node.js'],
    url: 'https://github.com/Krzysiekdobosz/Covid-Vaccinations-WebApp-React-Nodejs',
    linkLabel: 'View on GitHub',
  },
];

const tabs = [
  { key: 'commercial', label: 'Commercial', projects: commercialProjects },
  { key: 'personal', label: 'Personal', projects: personalProjects },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    A selection of websites I have built for clients and applications I created
                    to learn new technologies. Every one of them taught me something, from
                    database design to the details of a good user interface. More of my code is
                    available on GitHub.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey={tabs[0].key}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      {tabs.map(({ key, label }) => (
                        <Nav.Item key={key}>
                          <Nav.Link eventKey={key}>{label}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content>
                      {tabs.map(({ key, projects }) => (
                        <Tab.Pane eventKey={key} key={key}>
                          <Row className="justify-content-center">
                            {projects.map((project) => (
                              <ProjectCard key={project.title} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" aria-hidden="true" />
    </section>
  );
};
