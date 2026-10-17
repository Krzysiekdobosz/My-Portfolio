import { createChallenge, validateSubmission, COOLDOWN_MS, MIN_FILL_TIME_MS } from './spamGuard';

const now = 1_000_000;
const challenge = { question: '2 + 3', answer: 5 };
const valid = {
  form: { firstName: 'Jan', lastName: '', email: 'jan@example.com', phone: '', message: 'I would like to talk about a project.' },
  honeypot: '',
  startedAt: now - MIN_FILL_TIME_MS - 1,
  challenge,
  challengeAnswer: '5',
  lastSentAt: 0,
  now,
};

test('accepts a legitimate submission', () => {
  expect(validateSubmission(valid)).toBeNull();
});

test('flags a filled honeypot as a bot', () => {
  expect(validateSubmission({ ...valid, honeypot: 'https://spam.example' })).toEqual({ bot: true });
});

test('rejects forms filled in too quickly', () => {
  expect(validateSubmission({ ...valid, startedAt: now - 500 })).toHaveProperty('message');
});

test('enforces a cooldown between messages', () => {
  const error = validateSubmission({ ...valid, lastSentAt: now - COOLDOWN_MS / 2 });
  expect(error.message).toMatch(/wait 30s/);
});

test('rejects a wrong security answer', () => {
  expect(validateSubmission({ ...valid, challengeAnswer: '4' }).message).toMatch(/security question/);
});

test('rejects messages with too many links', () => {
  const form = { ...valid.form, message: 'http://a.com http://b.com www.c.com buy now' };
  expect(validateSubmission({ ...valid, form }).message).toMatch(/links/);
});

test('rejects an invalid email address', () => {
  const form = { ...valid.form, email: 'not-an-email' };
  expect(validateSubmission({ ...valid, form }).message).toMatch(/email/);
});

test('creates a challenge with a matching answer', () => {
  const { question, answer } = createChallenge(() => 0.5);
  expect(question).toBe('5 + 5');
  expect(answer).toBe(10);
});
