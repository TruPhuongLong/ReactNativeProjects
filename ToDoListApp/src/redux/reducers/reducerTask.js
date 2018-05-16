import typeAction from '../actions/typeAction';
import initialStateTask from './state';

export default reducerTask = (state = initialStateTask.stateForReducerTask, action) => {
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