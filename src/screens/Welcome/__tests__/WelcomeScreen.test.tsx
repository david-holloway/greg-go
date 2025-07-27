// Example: __tests__/WelcomeScreen.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WelcomeScreen from '../WelcomeScreen';

it('renders welcome text and navigates on button press', () => {
  const navigate = jest.fn();
  const { getByText } = render(<WelcomeScreen navigation={{ navigate }} />);
  expect(getByText('Welcome!')).toBeTruthy();
  fireEvent.press(getByText('Get Started'));
  expect(navigate).toHaveBeenCalledWith('Name');
});