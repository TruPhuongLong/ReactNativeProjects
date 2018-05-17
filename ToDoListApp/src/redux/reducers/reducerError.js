import initialStateTask from './state';
import typeAction from '../actions/typeAction';

const reducerError = (state = initialStateTask.stateForReducerError, action) => {
    console.log('reducerError run...');
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