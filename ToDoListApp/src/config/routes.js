import {createStackNavigator} from 'react-navigation';

import ListTask from '../components/ListTask';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Routes = {
    ListTask: { screen: ListTask },
    Login: { screen: Login },
    Signup: { screen: Signup },
}

const AppNavigator = createStackNavigator(Routes);
export default AppNavigator;
