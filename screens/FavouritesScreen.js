import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealsList'
import { MEALS } from '../data/dummy-data';

const FavouritesScreen = (props) => {
    const faveMeals = MEALS.filter(meal=>meal.id === 'm4' || meal.id === 'm3')
  return (
    <MealList listData={faveMeals} navigation={props.navigation}/>
  );
};

export default FavouritesScreen;
