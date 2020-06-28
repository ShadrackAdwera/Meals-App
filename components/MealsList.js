import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem'
import { useSelector } from 'react-redux'

const MealList = (props) => {
  const favouriteMeal = useSelector(state=>state.meal.favouriteMeals)
  const renderMealItem = (itemData) => {
    const favedMeal = favouriteMeal.some(meal=> meal.id === itemData.item.id)
    return (
      <MealItem
        title={itemData.item.title}
        image ={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({routeName: 'MealDetail', params: {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFavourite: favedMeal
          }})
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: '100%' }}
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealList;
