import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {AppNavigator} from './config/routes';
import {initApi} from './services/userApi';
import storeTask from './redux/store/storeTask';

export default class Main extends Component {
    componentWillMount(){
        initApi();
    }
    render() {
        return (
            <AppNavigator />
        )
    }
}
