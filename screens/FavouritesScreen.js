import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealsList'
import HeaderButton from '../components/HeaderButton';

const FavouritesScreen = (props) => {
  const availableFaves = useSelector(state=>state.meal.favouriteMeals)

  if(availableFaves.length === 0 || !availableFaves){
    return <View style={styles.emptyList}>
      <Text>No Favourites Added</Text>
    </View>
  }

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

const styles = StyleSheet.create({
emptyList: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center'
}
})

export default FavouritesScreen;
