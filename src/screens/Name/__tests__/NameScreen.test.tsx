import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NameScreen from '../NameScreen';

describe('NameScreen', () => {
  it('renders input and button', () => {
    //Given
    const { getByPlaceholderText, getByTestId } = render(
      <NameScreen navigation={{ navigate: jest.fn() }} />
    );

    //Then
    expect(getByPlaceholderText('Enter your name')).toBeTruthy();
    expect(getByTestId('Next')).toBeTruthy();
  });

  it('disables Next button when name is empty', () => {
    //Given
    const navigate = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <NameScreen navigation={{ navigate }} />
    );

    //When
    fireEvent.changeText(getByPlaceholderText('Enter your name'), '');
    fireEvent.press(getByTestId('Next'));

    //Then
    expect(navigate).not.toHaveBeenCalled();
  });

  it('enables Next button when name is entered and navigates on press', () => {
    //Given
    const navigate = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <NameScreen navigation={{ navigate }} />
    );

    //When
    fireEvent.changeText(getByPlaceholderText('Enter your name'), 'Greg');

    //Then
    const button = getByTestId('Next');

    //When
    fireEvent.press(button);

    //Then
    expect(navigate).toHaveBeenCalledWith('Photo', { name: 'Greg' });
  });
});