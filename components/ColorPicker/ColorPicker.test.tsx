import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import ColorPicker from './index';

describe('ColorPicker', () => {
  const colorOptions = ['red', 'green', 'blue'];

  it('renders without errors', () => {
    render(<ColorPicker colorOptions={colorOptions} />);
  });

  it('displays the correct background color in the header', () => {
    const {getByTestId} = render(<ColorPicker colorOptions={colorOptions} />);
    const header = getByTestId('header');
    expect(header.props.style[1]).toEqual(
      expect.objectContaining({backgroundColor: '#FFF'}),
    );
  });

  it('updates the background color and header title when a color item is pressed', () => {
    const {getByTestId} = render(<ColorPicker colorOptions={colorOptions} />);
    const colorItems = getByTestId('color-item-green');

    fireEvent.press(colorItems); // Press the second color item

    const header = getByTestId('header');
    expect(header.props.style[1]).toEqual(
      expect.objectContaining({backgroundColor: 'green'}),
    );

    const headerTitle = getByTestId('header-title');
    expect(headerTitle.props.children).toBe('green');
  });
});
