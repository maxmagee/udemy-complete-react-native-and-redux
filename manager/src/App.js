import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAQGPScI0tsls8gPcBNJtWIMXXoGAiqess',
            authDomain: 'manager-1bcb3.firebaseapp.com',
            databaseURL: 'https://manager-1bcb3.firebaseio.com',
            projectId: 'manager-1bcb3',
            storageBucket: 'manager-1bcb3.appspot.com',
            messagingSenderId: '647237750020'
        };

        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
