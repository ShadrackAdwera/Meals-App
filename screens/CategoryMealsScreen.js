import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image ={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({routeName: 'MealDetail', params: {
            mealId: itemData.item.id
          }})
        }}
      />
    );
  };

  const cId = props.navigation.getParam('categoryId');

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(cId) >= 0;
  });

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: '100%' }}
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
