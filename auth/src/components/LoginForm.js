import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '' };

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
                <CardSection />
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
