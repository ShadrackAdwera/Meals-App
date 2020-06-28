import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import { COLOR_PRIMARY, COLOR_ACCENT, COLOR_BLACK } from '../shared/constants/color';
import { Platform } from 'react-native';

const MealsNav = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLOR_PRIMARY,
      },
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNav,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: COLOR_PRIMARY
    },
  },
  Favourites: {
    screen: FavouritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-heart"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: COLOR_PRIMARY
  },
},
}

const MealsNavTabs = Platform.OS === 'android'? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: COLOR_ACCENT,
  shifting: true
}) : createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions:{
    activeTintColor: COLOR_ACCENT,
  }
});

export default createAppContainer(MealsNavTabs);
