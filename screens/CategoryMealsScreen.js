import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

import { CATEGORIES } from '../data/dummy-data'


const CategoryMealsScreen = (props) => {
   const cId =  props.navigation.getParam('categoryId')
   const foundCategory = CATEGORIES.find(category=>{
       return category.id === cId
   })
  return (
    <View style={styles.screen}>
      <Text> {foundCategory.title} Screen</Text>
      <Button title='GO TO MEAL DETAIL' onPress={()=>{
          props.navigation.navigate({routeName: 'MealDetail'})
      }}/>
      <Button title='GO BACC' onPress={()=>{
          props.navigation.goBack()
      }}/>
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

export default CategoryMealsScreen;
