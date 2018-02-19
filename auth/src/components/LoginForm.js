import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        error: '',
        password: ''
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '' });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.' });
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        autoCapitalize='none'
                        autoCorrect={false}
                        label='Email'
                        onChangeText={email => this.setState({ email })}
                        placeholder='user@gmail.com'
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        autoCapitalize='none'
                        autoCorrect={false}
                        label='Password'
                        onChangeText={password => this.setState({ password })}
                        placeholder='password'
                        secureTextEntry
                        value={this.setState.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 20
    }
};

export default LoginForm;
