import {createStackNavigator} from 'react-navigation';
import ListTask from '../components/ListTask';

const Route = createStackNavigator({
    ListTask: {screen: ListTask}
})


export default Route;