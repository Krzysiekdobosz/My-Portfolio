import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, stack, imgUrl, url, linkLabel }) => {
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
          <ul className="proj-stack">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <span className="proj-link">{linkLabel} &rarr;</span>
        </div>
      </a>
    </Col>
  );
};
