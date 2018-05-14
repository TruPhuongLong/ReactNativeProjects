import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';

export default class Logo extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    _login(){
        
    }

    _signup() {
        console.log('signup')
    }

    render() {
        return (
            <View>
                <Image source={require('../assets/images/logo.png')} />
                <TextInput
                    placeholder='email'
                    onChangeText={email => this.setState({email})}
                    onSubmitEditing={this._password.focus()}
                />
                <TextInput
                    ref={(textInput) => this._password = textInput}
                    onChangeText={password => this.setState({password})}
                    placeholder='password'
                    secureTextEntry={true}
                    onSubmitEditing={this._login.bind(this)}
                />
                <Button title='Login' onPress={this._login.bind(this)}/>
                <View>
                    <Text>forgot password?</Text>
                    <TouchableOpacity onPress={this._signup.bind(this)}>
                        <Text> Signup </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}