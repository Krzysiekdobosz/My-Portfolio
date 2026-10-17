import linkedinIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/nav-icon2.svg';

const SOCIALS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/krzysztof-dobosz-0827b21aa/', icon: linkedinIcon },
  { name: 'GitHub', href: 'https://github.com/Krzysiekdobosz', icon: githubIcon },
];

export const SocialLinks = () => (
  <div className="social-icon">
    {SOCIALS.map(({ name, href, icon }) => (
      <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
        <img src={icon} alt="" />
      </a>
    ))}
  </div>
);
