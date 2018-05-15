import React from 'react';
import { NavigationActions } from 'react-navigation';
import SplashScreen from '../components/SplashScreen';

class AuthService {
    _isAuthenticated = false;
    get isAuthenticated() {
        return this._isAuthenticated;
    }
    set isAuthenticated(value) {
        this._isAuthenticated = value;
    }
    checkAuth() {
        const self = this;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(self.isAuthenticated);
            }, 1000)
        })
    }
}

export const authService = new AuthService();

export const authDecorator = (ComponentInput) => {
    return class AuthChecker extends React.Component {
        constructor() {
            super();
            this.state = {
                auth: false
            }
        }
        componentDidMount() {
            authService.checkAuth()
                .then(isAuthenticated => {
                    if (isAuthenticated) {
                        this.setState({ auth: true })
                    } else {
                        const navigateAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate('Login')
                            ],
                        });
                        this.props.navigation.dispatch(navigateAction);
                    }
                })
        }

        render() {
            return (
                this.state.auth ? <ComponentInput /> : <SplashScreen />
            )
        }
    }
}
//                                // this.props.navigation.navigate('Login')


