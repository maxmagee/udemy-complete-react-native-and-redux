import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAUD9wsehHGlxvA63QixppxHVl-oRXywW8',
            authDomain: 'auth-f6cd2.firebaseapp.com',
            databaseURL: 'https://auth-f6cd2.firebaseio.com',
            projectId: 'auth-f6cd2',
            storageBucket: 'auth-f6cd2.appspot.com',
            messagingSenderId: '1087940718004'
          });
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View>
                        <Spinner size='large' />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
