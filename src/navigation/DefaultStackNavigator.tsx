import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CharactersScreen from '../screens/CharactersScreen';
import CharacterScreen from '../screens/CharacterScreen';
import { DefaultStackParamList } from './navigation.types';

const Stack = createStackNavigator<DefaultStackParamList>();

const DefaultStackNavigator = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName={'HomeScreenName'}>
        <Stack.Screen
          name={'HomeScreenName'}
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
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
