import { TextEncoder, TextDecoder } from 'util';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const App = require('./App').default;

test('booking inquiry includes dates and guests and resets an invalid departure', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('תאריך הגעה'), { target: { value: '2027-06-10' } });
  fireEvent.change(screen.getByLabelText('תאריך עזיבה'), { target: { value: '2027-06-12' } });
  fireEvent.change(screen.getByLabelText('מספר אורחים'), { target: { value: '8' } });
  const form = screen.getByRole('button', { name: 'בואו נתכנן חופשה' }).closest('form');
  expect(form.elements.text.value).toContain('2027-06-10');
  expect(form.elements.text.value).toContain('2027-06-12');
  expect(form.elements.text.value).toContain('8 אורחים');
  expect(screen.getByLabelText('תאריך עזיבה')).toHaveAttribute('min', '2027-06-11');
  fireEvent.change(screen.getByLabelText('תאריך הגעה'), { target: { value: '2027-06-15' } });
  expect(screen.getByLabelText('תאריך עזיבה')).toHaveValue('');
});


test('sharing exposes a selectable link when clipboard access fails', async () => {
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: jest.fn().mockRejectedValue(new Error('Clipboard unavailable')) } });
  render(<App />);
  expect(screen.queryByRole('button', { name: 'שמירה' })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'בואו להתארח' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'שיתוף', exact: true }));
  expect(screen.getByLabelText('הקישור לווילה')).toHaveValue('http://localhost/');
  expect(screen.getByRole('link', { name: /שיתוף בוואטסאפ/ })).toHaveAttribute('href', expect.stringContaining('https://wa.me/?text='));
  fireEvent.click(screen.getByRole('button', { name: 'העתקת קישור' }));
  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('בחרו את הקישור'));
});

test('sharing confirms a successful clipboard copy', async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'שיתוף', exact: true }));
  fireEvent.click(screen.getByRole('button', { name: 'העתקת קישור' }));
  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('הקישור הועתק'));
  expect(writeText).toHaveBeenCalledWith('http://localhost/');
});
