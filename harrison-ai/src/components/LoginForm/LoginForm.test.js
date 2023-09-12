import { render, screen } from '@testing-library/react';
import LoginForm from '.';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here
test('displays error for invalid email', () => {
  render(<LoginForm />);
  const emailInput = screen.getByLabelText('Email Address');
  const passwordInput = screen.getByLabelText('Password');
  const signInButton = screen.getByText('Sign In');

  fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
  fireEvent.change(passwordInput, { target: { value: 'ValidPassword1@' } });
  fireEvent.click(signInButton);

  const emailErrorText = screen.getByText('Invalid email address');
  expect(emailErrorText).toBeInTheDocument();
});

test('displays error for invalid password', () => {
  render(<LoginForm />);
  const emailInput = screen.getByLabelText('Email Address');
  const passwordInput = screen.getByLabelText('Password');
  const signInButton = screen.getByText('Sign In');

  fireEvent.change(emailInput, { target: { value: 'valid@email.com' } });
  fireEvent.change(passwordInput, { target: { value: 'invalid' } });
  fireEvent.click(signInButton);

  const passwordErrorText = screen.getByText('Password must contain at least 8 characters, both uppercase and lowercase letters, a number, and a special character.');
  expect(passwordErrorText).toBeInTheDocument();
});

test('displays success message for valid input', () => {
  render(<LoginForm />);
  const emailInput = screen.getByLabelText('Email Address');
  const passwordInput = screen.getByLabelText('Password');
  const signInButton = screen.getByText('Sign In');

  fireEvent.change(emailInput, { target: { value: 'valid@email.com' } });
  fireEvent.change(passwordInput, { target: { value: 'ValidPassword1@' } });
  fireEvent.click(signInButton);

  const emailErrorText = screen.queryByText('Invalid email address');
  const passwordErrorText = screen.queryByText('Password must contain at least 8 characters, both uppercase and lowercase letters, a number, and a special character.');
  const successMessage = screen.getByText('Login Successful');

  expect(emailErrorText).toBeNull();
  expect(passwordErrorText).toBeNull();
  expect(successMessage).toBeInTheDocument();
});
