import { StackNavigator } from "react-navigation";
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';
import DetailTask from './components/DetailTask';

const StackNav = StackNavigator({
    ListTask: {screen: ListTask},
    AddTask: {screen: AddTask},
    DetailTask: {screen: DetailTask},
})

export default StackNav;

