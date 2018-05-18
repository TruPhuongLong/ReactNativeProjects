import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './config/routes';
import { initApi } from './services/userApi';
import store from './redux/store/storeTask';

export default class Main extends Component {
    componentWillMount() {
        initApi();
    }
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        )
    }
}


/// for push.

