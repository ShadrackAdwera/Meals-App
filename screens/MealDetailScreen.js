import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetail = (props) => {
  const mealId = props.navigation.getParam('mealId');

  const foundMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  const ListItem = props => {
      return <View style={styles.listItem}>
          <Text>{props.children}</Text>
      </View>
  }

  return (
    <ScrollView>
      <Image source={{ uri: foundMeal.imageUrl }} style={styles.image} />
      <View>
        <View style={styles.details}>
          <Text>{foundMeal.duration}m</Text>
          <Text>{foundMeal.complexity.toUpperCase()}</Text>
          <Text>{foundMeal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {foundMeal.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {foundMeal.steps.map((step) => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetail.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const foundMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });
  return {
    headerTitle: foundMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favourite" iconName="md-heart-empty" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10
  }
});

export default MealDetail;
