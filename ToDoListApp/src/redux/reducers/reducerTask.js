import { typeAction } from '../actions/crudTask';

// state it can be seperate to other file:
const initialStateTask = {
    toDoList: []
}

export default reducerTask = (state = initialStateTask, action) => {
    switch (action.type) {
        case typeAction.ADD_TASK:
            return {
                toDoList: [
                    ...state.toDoList,
                    action.payload
                ]
            }
        default:
            return state;
    }
}