import React, {useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { toggleFavourite } from '../store/action/meals'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetail = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeal = useSelector((state) => state.meal.meals);
  const foundMeal = availableMeal.find((meal) => {
    return meal.id === mealId;
  });

  const dispatch = useDispatch()

  const toggleFaveHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({ toggleFave: toggleFaveHandler});
  }, [toggleFaveHandler]);

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
  //const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('mealTitle')
  const toggleFavourite = navigationData.navigation.getParam('toggleFave')
  // const foundMeal = MEALS.find((meal) => {
  //   return meal.id === mealId;
  // });
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favourite" iconName="md-heart-empty" onPress={toggleFavourite} />
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
    padding: 10,
  },
});

export default MealDetail;
