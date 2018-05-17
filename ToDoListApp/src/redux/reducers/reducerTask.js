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
                ]
            }
        case typeAction.REMOVE_TASK:
            const toDoList = state.toDoList.filter(payload => payload.content !== action.payload.content);
            return {
                ...state,
                toDoList
            }
        default:
            return state;
    }
}