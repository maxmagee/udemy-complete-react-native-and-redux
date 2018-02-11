// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
    <Header headerText={'Albums'} />
);

// Render it to the device
// The first parameter should match the name of the application we created
AppRegistry.registerComponent('albums', () => App);
