import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoriesGridTile from '../components/CategoriesGridTile';

const CategoriesScreen = () => {
  const renderGridItem = () => {
    return (
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

export default CategoriesScreen;
