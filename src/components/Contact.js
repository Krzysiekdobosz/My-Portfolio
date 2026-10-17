import { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import contactImg from '../assets/img/contact-img.svg';
import { createChallenge, getLastSentAt, markSent, validateSubmission, MESSAGE_MAX_LENGTH } from '../utils/spamGuard';

// Assembled at runtime so the address does not appear as plain text in the bundle.
const CONTACT_EMAIL = ['krzysiekdobosz2001', 'gmail.com'].join(String.fromCharCode(64));

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export const buildMailtoLink = ({ firstName, lastName, email, phone, message }) => {
  const name = `${firstName} ${lastName}`.trim();
  const subject = name ? `Portfolio contact: ${name}` : 'Portfolio contact';
  const details = [
    name && `Name: ${name}`,
    email && `Email: ${email}`,
    phone && `Phone: ${phone}`,
  ].filter(Boolean);
  const body = details.length ? `${message}\n\n---\n${details.join('\n')}` : message;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [honeypot, setHoneypot] = useState('');
  const [challenge, setChallenge] = useState(() => createChallenge());
  const [challengeAnswer, setChallengeAnswer] = useState('');
  const startedAt = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (startedAt.current === null) startedAt.current = Date.now();
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetChallenge = () => {
    setChallenge(createChallenge());
    setChallengeAnswer('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateSubmission({
      form,
      honeypot,
      startedAt: startedAt.current ?? Date.now(),
      challenge,
      challengeAnswer,
      lastSentAt: getLastSentAt(),
    });

    if (error?.bot) {
      setStatus({ success: true, message: 'Thank you for your message!' });
      setForm(initialForm);
      return;
    }

    if (error) {
      setStatus({ success: false, message: error.message });
      resetChallenge();
      return;
    }

    window.location.href = buildMailtoLink(form);
    markSent();
    setStatus({ success: true, message: 'Your email client should open with the message ready to send.' });
    setForm(initialForm);
    resetChallenge();
    startedAt.current = null;
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <img
                  className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                  src={contactImg}
                  alt=""
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} sm={6} className="px-1">
                  <input type="text" name="firstName" value={form.firstName} placeholder="First Name" aria-label="First name" autoComplete="given-name" onChange={handleChange} />
                </Col>
                <Col xs={12} sm={6} className="px-1">
                  <input type="text" name="lastName" value={form.lastName} placeholder="Last Name" aria-label="Last name" autoComplete="family-name" onChange={handleChange} />
                </Col>
                <Col xs={12} sm={6} className="px-1">
                  <input type="email" name="email" value={form.email} placeholder="Email Address" aria-label="Email address" autoComplete="email" onChange={handleChange} />
                </Col>
                <Col xs={12} sm={6} className="px-1">
                  <input type="tel" name="phone" value={form.phone} placeholder="Phone No." aria-label="Phone number" autoComplete="tel" onChange={handleChange} />
                </Col>
                <Col xs={12} className="px-1">
                  <textarea rows="6" name="message" value={form.message} placeholder="Message" aria-label="Message" required maxLength={MESSAGE_MAX_LENGTH} onChange={handleChange}></textarea>
                </Col>
                <Col xs={12} sm={6} className="px-1">
                  <input
                    type="text"
                    inputMode="numeric"
                    name="challenge"
                    value={challengeAnswer}
                    placeholder={`How much is ${challenge.question}?`}
                    aria-label={`Security question: how much is ${challenge.question}?`}
                    autoComplete="off"
                    required
                    onChange={(e) => setChallengeAnswer(e.target.value)}
                  />
                </Col>
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="contact-website">Leave this field empty</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>
                <Col xs={12} className="px-1">
                  <button type="submit"><span>Send</span></button>
                </Col>
                {status && (
                  <Col xs={12} className="px-1">
                    <p className={status.success ? 'success' : 'danger'} role="status">{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
