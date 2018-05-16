import initialStateTask from './state';
import typeAction from '../actions/typeAction';

const reducerError = (state = initialStateTask.stateForReducerError, action) => {
    switch (action.type) {
        case typeAction.ERROR:
            return {
                ...state,
                errMsg: action.message
            }
        default:
            return state;
    }
}

export default reducerError;