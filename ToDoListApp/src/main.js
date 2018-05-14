import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Route from './config/route';
import {initApi} from './services/userApi';

export default class Main extends Component {
    componentWillMount(){
        initApi();
    }

    render() {
        return (
            <Route />
        )
    }
}
