import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetail = (props) => {
 return (
     <View style={styles.screen}>
         <Text>Meal Detail Screen</Text>
         <Button title='Go to Home' onPress={()=> {
             props.navigation.popToTop()
         }}/>
     </View>
 )


};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default MealDetail;
