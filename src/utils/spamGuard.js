// Client-side protection for the contact form. The site is static, so these checks
// stop simple bots and accidental double submits; they are not a replacement for
// server-side validation.

export const MIN_FILL_TIME_MS = 3000;
export const COOLDOWN_MS = 60 * 1000;
export const MAX_LINKS = 2;
export const MESSAGE_MIN_LENGTH = 10;
export const MESSAGE_MAX_LENGTH = 2000;

const LAST_SENT_KEY = 'contact:lastSentAt';
const LINK_PATTERN = /(https?:\/\/|www\.)/gi;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const createChallenge = (random = Math.random) => {
  const a = 1 + Math.floor(random() * 9);
  const b = 1 + Math.floor(random() * 9);
  return { question: `${a} + ${b}`, answer: a + b };
};

export const getLastSentAt = () => {
  try {
    return Number(window.localStorage.getItem(LAST_SENT_KEY)) || 0;
  } catch {
    return 0;
  }
};

export const markSent = (now = Date.now()) => {
  try {
    window.localStorage.setItem(LAST_SENT_KEY, String(now));
  } catch {
    // Storage can be blocked (private mode); the cooldown is best effort.
  }
};

// Returns null when the submission looks legitimate. A filled honeypot returns
// `{ bot: true }` so the form can pretend it worked instead of tipping the bot off.
export const validateSubmission = ({ form, honeypot, startedAt, challenge, challengeAnswer, lastSentAt, now = Date.now() }) => {
  if (honeypot) {
    return { bot: true };
  }

  if (now - startedAt < MIN_FILL_TIME_MS) {
    return { message: 'That was quick! Please take a moment and try again.' };
  }

  if (lastSentAt && now - lastSentAt < COOLDOWN_MS) {
    const seconds = Math.ceil((COOLDOWN_MS - (now - lastSentAt)) / 1000);
    return { message: `Please wait ${seconds}s before sending another message.` };
  }

  const message = form.message.trim();

  if (message.length < MESSAGE_MIN_LENGTH) {
    return { message: `Your message should be at least ${MESSAGE_MIN_LENGTH} characters long.` };
  }

  if (message.length > MESSAGE_MAX_LENGTH) {
    return { message: `Your message can be at most ${MESSAGE_MAX_LENGTH} characters long.` };
  }

  if ((message.match(LINK_PATTERN) || []).length > MAX_LINKS) {
    return { message: 'Please limit the number of links in your message.' };
  }

  if (form.email && !EMAIL_PATTERN.test(form.email.trim())) {
    return { message: 'Please enter a valid email address.' };
  }

  if (Number(challengeAnswer) !== challenge.answer) {
    return { message: 'Wrong answer to the security question, please try again.' };
  }

  return null;
};
