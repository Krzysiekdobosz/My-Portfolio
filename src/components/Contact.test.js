import { buildMailtoLink } from './Contact';

test('builds a mailto link with the message and sender details', () => {
  const link = buildMailtoLink({
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan@example.com',
    phone: '',
    message: 'Hello!',
  });
  const [address, query] = link.split('?');
  const params = new URLSearchParams(query);

  expect(address).toBe('mailto:krzysiekdobosz2001@gmail.com');
  expect(params.get('subject')).toBe('Portfolio contact: Jan Kowalski');
  expect(params.get('body')).toBe('Hello!\n\n---\nName: Jan Kowalski\nEmail: jan@example.com');
});

test('skips the details block when only a message is given', () => {
  const link = buildMailtoLink({ firstName: '', lastName: '', email: '', phone: '', message: 'Hi' });
  const params = new URLSearchParams(link.split('?')[1]);

  expect(params.get('subject')).toBe('Portfolio contact');
  expect(params.get('body')).toBe('Hi');
});
