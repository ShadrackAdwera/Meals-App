import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux'
import HeaderButton from '../components/HeaderButton';
import { COLOR_PRIMARY, COLOR_ACCENT } from '../shared/constants/color';
import { setFilters } from '../store/action/meals'

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.filterName}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChangeValue}
        trackColor={{ true: COLOR_PRIMARY }}
        thumbColor={COLOR_ACCENT}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch()

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch]);

  useEffect(() => {
    navigation.setParams({ saved: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filters</Text>
      <FilterSwitch
        filterName="Gluten-Free"
        value={isGlutenFree}
        onChangeValue={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        filterName="Lactose-Free"
        value={isLactoseFree}
        onChangeValue={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        filterName="Vegan"
        value={isVegan}
        onChangeValue={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        filterName="Vegetarian"
        value={isVegetarian}
        onChangeValue={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filters',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('saved')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FiltersScreen;
