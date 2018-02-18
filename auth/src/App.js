import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
                <LoginForm />
            </View>
        );
    }
}

export default App;
