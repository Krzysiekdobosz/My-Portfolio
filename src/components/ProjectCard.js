import { Col } from 'react-bootstrap';

const Stack = ({ items }) => (
  <ul className="proj-stack">
    {items.map((tech) => (
      <li key={tech}>{tech}</li>
    ))}
  </ul>
);

export const ProjectCard = ({ title, description, stack, imgUrl, url, linkLabel, demoUrl }) => {
  if (demoUrl) {
    return (
      <Col xs={12} md={6} className="mb-4">
        <div className="proj-imgbx proj-imgbx--plain">
          <div className="proj-txtx">
            <h4>{title}</h4>
            <p>{description}</p>
            <Stack items={stack} />
            <div className="proj-actions">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn--primary">
                Live demo
              </a>
              <a href={url} target="_blank" rel="noopener noreferrer" className="proj-btn">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Col>
    );
  }

  return (
    <Col xs={12} md={6} className="mb-4">
      <a
        className={`proj-imgbx${imgUrl ? '' : ' proj-imgbx--plain'}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} – ${linkLabel}`}
      >
        {imgUrl && <img src={imgUrl} alt={`${title} homepage`} loading="lazy" />}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <Stack items={stack} />
          <span className="proj-link">{linkLabel} &rarr;</span>
        </div>
      </a>
    </Col>
  );
};
