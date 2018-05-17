import typeAction from '../actions/typeAction';
import initialStateTask from './state';

export default reducerTask = (state = initialStateTask.stateForReducerTask, action) => {
    console.log('reducerTask run...');
    switch (action.type) {
        case typeAction.ADD_TASK:
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    action.payload
                ],
                currentTask: action.payload
            }
        default:
            return state;
    }
}