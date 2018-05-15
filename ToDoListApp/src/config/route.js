import { createStackNavigator } from 'react-navigation';
import ListTask from '../components/ListTask';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Route = createStackNavigator({
    Login: { screen: Login },
    ListTask: { screen: ListTask },
   
    Signup: { screen: Signup },
    
})


export default Route;