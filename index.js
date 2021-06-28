import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store from './src/store';
import { Provider as ReduxProvider } from 'react-redux';

const AppIndex = () => (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

AppRegistry.registerComponent(appName, () => AppIndex);
