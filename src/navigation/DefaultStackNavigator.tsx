import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CharactersScreen from '../screens/CharactersScreen';
import CharacterScreen from '../screens/CharacterScreen';

const Stack = createStackNavigator();

const DefaultStackNavigator = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName={'HomeScreenName'}>
        <Stack.Screen name={'HomeScreenName'} component={HomeScreen} />
        <Stack.Screen
          name={'CharactersScreenName'}
          component={CharactersScreen}
          options={{ title: 'Rick & Morty' }}
        />
        <Stack.Screen
          name={'CharacterScreenName'}
          component={CharacterScreen}
          options={{ title: 'Character' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DefaultStackNavigator;
