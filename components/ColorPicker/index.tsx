import React, {useCallback, useState} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import ColorItem from '../ColorItem';
import {styles} from './styles';

interface ColorPickerProps {
  colorOptions: Array<string>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({colorOptions}) => {
  const [backgroundColor, setBackgroundColor] = useState('#FFF');

  const onPressColor = useCallback((item: string) => {
    setBackgroundColor(item);
  }, []);
  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <View testID="header" style={[styles.header, {backgroundColor}]}>
        <Text testID="header-title" style={styles.headerTitle}>
          {backgroundColor}
        </Text>
      </View>
      <FlatList
        data={colorOptions}
        horizontal
        style={[styles.listStyle, {backgroundColor}]}
        contentContainerStyle={styles.container}
        maxToRenderPerBatch={10}
        keyExtractor={(item, index) => `${item}_${index}`}
        renderItem={({item}) => (
          <ColorItem color={item} onPressColor={() => onPressColor(item)} />
        )}
      />
    </>
  );
};

export default ColorPicker;
