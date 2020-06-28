import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetail = (props) => {
    const mealId = props.navigation.getParam('mealId')

    const foundMeal = MEALS.find(meal=>{
        return meal.id === mealId
    })

 return (
     <View style={styles.screen}>
         <Text>{foundMeal.title}</Text>
     </View>
 )
};

MealDetail.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const foundMeal = MEALS.find(meal=>{
        return meal.id === mealId
    })
    return {
        headerTitle: foundMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favourite' iconName='md-heart-empty' onPress={()=>{}}/>
        </HeaderButtons>
    } 
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default MealDetail;
