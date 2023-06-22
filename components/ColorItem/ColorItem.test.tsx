import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import ColorItem from './index';

describe('ColorItem', () => {
  const mockOnPressColor = jest.fn();
  const color = 'red';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without errors', () => {
    render(<ColorItem onPressColor={mockOnPressColor} color={color} />);
  });

  it('displays the color item with the provided background color', () => {
    const {getByTestId} = render(
      <ColorItem onPressColor={mockOnPressColor} color={color} />,
    );
    const colorItem = getByTestId(`color-item-${color}`);

    expect(colorItem.props.style[1].backgroundColor).toEqual(color);
  });

  it('calls onPressColor when the color item is pressed', () => {
    const {getByTestId} = render(
      <ColorItem onPressColor={mockOnPressColor} color={color} />,
    );
    const colorItem = getByTestId(`color-item-${color}`);
    fireEvent.press(colorItem);
    expect(mockOnPressColor).toHaveBeenCalledTimes(1);
  });
});
