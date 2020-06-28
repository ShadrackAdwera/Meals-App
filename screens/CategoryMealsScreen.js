import React from 'react';
import { useSelector } from 'react-redux'
import MealList from '../components/MealsList';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
 
  const cId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector((state)=> state.meal.filteredMeals)

  const displayMeals = availableMeals.filter((meal) => {
    return meal.categoryIds.indexOf(cId) >= 0;
  });

  return <MealList listData={displayMeals} navigation={props.navigation}/>
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const cId = navData.navigation.getParam('categoryId');
  const foundCategory = CATEGORIES.find((category) => {
    return category.id === cId;
  });
  return {
    headerTitle: foundCategory.title,
  };
};




export default CategoryMealsScreen;
