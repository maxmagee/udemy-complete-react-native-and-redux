import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        error: '',
        loading: false,
        password: ''
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            error: '',
            loading: false,
            password: ''
        });
    }

    onLoginFailed() {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }
        
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
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
                        value={this.state.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
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
