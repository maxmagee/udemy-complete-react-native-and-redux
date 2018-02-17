// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/header';

// Create a component
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    
);

// Render it to the device
// The first parameter should match the name of the application we created
AppRegistry.registerComponent('albums', () => App);
