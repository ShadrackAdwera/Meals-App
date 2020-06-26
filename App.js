import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNav';

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [loadFonts, setLoadFonts] = useState(false);

  if (!loadFonts) {
    <AppLoading startAsync={fetchFonts} onFinish={() => setLoadFonts(true)} />;
  }

  return <MealsNavigator />;
}
