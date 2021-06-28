import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();
const HomeScreenName = 'Home';

const App = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName={HomeScreenName}>
        <Stack.Screen name={HomeScreenName} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
