import React from 'react';
import {COLORS} from './colors';
import ColorPicker from './components/ColorPicker';

const App: React.FC = () => {
  return <ColorPicker colorOptions={COLORS} />;
};

export default App;
