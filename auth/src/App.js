import firebase from 'firebase';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAUD9wsehHGlxvA63QixppxHVl-oRXywW8',
            authDomain: 'auth-f6cd2.firebaseapp.com',
            databaseURL: 'https://auth-f6cd2.firebaseio.com',
            projectId: 'auth-f6cd2',
            storageBucket: 'auth-f6cd2.appspot.com',
            messagingSenderId: '1087940718004'
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;
