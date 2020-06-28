import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealsList'
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const FavouritesScreen = (props) => {
    const faveMeals = MEALS.filter(meal=>meal.id === 'm4' || meal.id === 'm3')
  return (
    <MealList listData={faveMeals} navigation={props.navigation}/>
  );
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Favourites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="menu" iconName="ios-menu" onPress={() => {
          navData.navigation.toggleDrawer()
        }} />
      </HeaderButtons>
    ),
  };
};

export default FavouritesScreen;
