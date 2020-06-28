import React from 'react';
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealsList'
import HeaderButton from '../components/HeaderButton';

const FavouritesScreen = (props) => {

  const availableFaves = useSelector(state=>state.meal.favouriteMeals)
  return (
    <MealList listData={availableFaves} navigation={props.navigation}/>
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
