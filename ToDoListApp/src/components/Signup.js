import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Signup extends Component{
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
                    onSubmitEditing={this._signup.bind(this)}
                />
                <Button title='Signup' onPress={this._signup.bind(this)}/>
                <View>
                    <Text>already acount?</Text>
                    <TouchableOpacity onPress={this._login.bind(this)}>
                        <Text> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}