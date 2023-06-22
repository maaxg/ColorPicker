import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface ColorItemProps {
  onPressColor: () => void;
  color: string;
}

const ColorItem: React.FC<ColorItemProps> = ({onPressColor, color}) => {
  return (
    <TouchableOpacity onPress={onPressColor}>
      <View
        testID={`color-item-${color}`}
        style={[styles.item, {backgroundColor: color}]}
      />
    </TouchableOpacity>
  );
};

export default ColorItem;
