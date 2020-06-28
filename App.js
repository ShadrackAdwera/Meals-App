import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNav';
import mealsReducer from './store/reducer/meals'

enableScreens()

const rootReducer = combineReducers({
  meal: mealsReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [loadFonts, setLoadFonts] = useState(false);

  if (!loadFonts) {
    <AppLoading startAsync={fetchFonts} onFinish={() => setLoadFonts(true)} />;
  }

  return <Provider store={store}>
    <MealsNavigator />
  </Provider>;
}
