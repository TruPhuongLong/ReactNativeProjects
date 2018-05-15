import React, { Component } from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';


export default class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    _saveText(text) {
        this.setState({
            text
        })
    }

    _onPressAdd() {
        this.props.add(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <View style={localStyles.constainer}>
                <TextInput
                    style={localStyles.textInput}
                    onChangeText={this._saveText.bind(this)}
                    value={this.state.text}
                    onSubmitEditing={this._onPressAdd.bind(this)}
                />
                <Button
                    title='Add'
                    onPress={this._onPressAdd.bind(this)}
                    style={localStyles.button}
                />
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        backgroundColor: '#8F9779',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    textInput: {
        flex: 1,
        margin: 10,
        textAlign: 'center',
        padding: 10,

        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
            },
            android: {

            },
        }),
    },
    button: {
        color: 'green',
        ...Platform.select({
            ios: {
                //   backgroundColor: 'blue',
                // color: 'green'
            },
            android: {

            },
        }),
    }
})