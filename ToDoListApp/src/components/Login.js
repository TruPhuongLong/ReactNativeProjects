import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
    StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Logo extends Component {
    static navigationOptions = {
        title: 'Login',
    }

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    _login() {

    }

    _signup() {
        console.log('signup')
    }

    render() {
        return (
            <KeyboardAwareScrollView style={localStyles.container}>
                <Image source={require('../assets/images/logoBlochain.png')} style={localStyles.image} resizeMode='cover' />
                <TextInput
                    style={localStyles.textInput}
                    placeholder='email'
                    onChangeText={email => this.setState({ email })}
                // onSubmitEditing={this._password.focus()}
                />
                <TextInput
                    style={localStyles.textInput}
                    ref={(textInput) => this._password = textInput}
                    onChangeText={password => this.setState({ password })}
                    placeholder='password'
                    secureTextEntry={true}
                    onSubmitEditing={this._login.bind(this)}
                />
                <Button
                    title='Login'
                    onPress={this._login.bind(this)}
                    style={localStyles.loginButton}
                />
                <View style={localStyles.signupView}>
                    <Text>don't have acount? </Text>
                    <TouchableOpacity onPress={this._signup.bind(this)}>
                        <Text style={localStyles.signup}> Signup </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 300,
    },
    textInput: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 50,
        marginHorizontal: 100,
        textAlign: 'center',
    },
    loginButton: {
        marginTop: 50,
        marginBottom: 50,
        alignSelf: 'auto',
    },
    signupView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signup: {
        color: 'blue'
    }
})