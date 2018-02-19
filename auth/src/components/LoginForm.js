import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: ''
    };

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
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
