import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard';
import mediseptImg from '../assets/img/project-medisept.jpg';
import wsparcieLtoImg from '../assets/img/project-wsparcielto.jpg';
import laperfeImg from '../assets/img/project-laperfe.jpg';
import specfoodImg from '../assets/img/project-specfood.jpg';
import bramyImg from '../assets/img/project-bramy.jpg';
import soccerboxImg from '../assets/img/project-soccerbox.jpg';
import mamyrecepteImg from '../assets/img/project-mamyrecepte.jpg';
import gdlImg from '../assets/img/project-gdl.jpg';
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
  {
    title: 'LAPERFE Clinic',
    description:
      'Website of an aesthetic medicine clinic in Lublin. Online shop for treatments and gift vouchers, cart with discount codes, booking and a blog.',
    stack: ['Laravel', 'PHP', 'E-commerce'],
    imgUrl: laperfeImg,
    url: 'https://www.laperfe.pl/',
    linkLabel: 'Visit website',
  },
  {
    title: 'Spec Food Service',
    description:
      'Corporate website of a food service wholesaler supplying restaurants, pizzerias and fast food venues. Product offer, culinary training and careers.',
    stack: ['Laravel', 'PHP', 'Bootstrap'],
    imgUrl: specfoodImg,
    url: 'https://specfood.pl/',
    linkLabel: 'Visit website',
  },
  {
    title: 'bramy.support',
    description:
      'Service website for high-speed industrial doors: controller and drive repairs, spare parts, a knowledge base and several language versions.',
    stack: ['Laravel', 'PHP', 'i18n'],
    imgUrl: bramyImg,
    url: 'https://bramy.support/',
    linkLabel: 'Visit website',
  },
  {
    title: 'Soccer Box Pro',
    description:
      'Website of a hotel and sports complex with football pitches, VR training, a gym and SPA. Online reservations, packages and customer accounts.',
    stack: ['Laravel', 'PHP', 'Booking'],
    imgUrl: soccerboxImg,
    url: 'https://soccerboxpro.pl/',
    linkLabel: 'Visit website',
  },
  {
    title: 'MamyRecepte.pl',
    description:
      'Online prescription service available 24/7. Medicine search, medical questionnaires reviewed by doctors, online payments, e-prescriptions sent by SMS and a patient account.',
    stack: ['Laravel', 'PHP', 'Payments'],
    imgUrl: mamyrecepteImg,
    url: 'https://www.mamyrecepte.pl/',
    linkLabel: 'Visit website',
  },
  {
    title: 'GDL Deweloper',
    description:
      'Website of a Lublin property developer. Current investments and an apartment search by investment, area, floor, rooms and availability.',
    stack: ['Laravel', 'PHP', 'Property search'],
    imgUrl: gdlImg,
    url: 'https://gdl.pl/',
    linkLabel: 'Visit website',
  },
];

const personalProjects = [
  {
    title: 'Conference Room Booking',
    description: 'Room browser with availability search, daily schedules, bookings without conflicts and an admin panel for rooms and reservations.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://krzysiekdobosz.github.io/Conference-Room-REACT-NODE-MONGO/',
    url: 'https://github.com/Krzysiekdobosz/Conference-Room-REACT-NODE-MONGO',
  },
  {
    title: 'NajmujMieszkanie',
    description: 'Apartment and room rental platform with user, owner and admin panels, messaging, viewings, PDF lease agreements and payments.',
    stack: ['Vue 3', 'Laravel', 'MySQL'],
    demoUrl: 'https://krzysiekdobosz.github.io/NajmujMieszkanie/',
    url: 'https://github.com/Krzysiekdobosz/NajmujMieszkanie',
  },
  {
    title: 'Mini Bike Shop',
    description: 'Online store with filtering and sorting, product pages, cart, saved items and an admin dashboard for the catalogue.',
    stack: ['React', 'Redux', 'Node.js', 'MongoDB'],
    demoUrl: 'https://krzysiekdobosz.github.io/ShopReactNodejs/',
    url: 'https://github.com/Krzysiekdobosz/ShopReactNodejs',
  },
  {
    title: 'CovidData',
    description: 'Dashboard with COVID-19 vaccination and hospitalisation data for 200+ countries, charts, country comparison and a watchlist.',
    stack: ['React', 'Chart.js', 'Express', 'Sequelize'],
    demoUrl: 'https://krzysiekdobosz.github.io/Covid-Data/',
    url: 'https://github.com/Krzysiekdobosz/Covid-Data',
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
