import ListTask from '../components/ListTask';
import Login from '../components/Login';
import Signup from '../components/Signup';
import {createStackNavigator} from 'react-navigation';

const Routes = {
    ListTask: { screen: ListTask },
    Login: { screen: Login },
    Signup: { screen: Signup },
}

export const AppNavigator = createStackNavigator(Routes);