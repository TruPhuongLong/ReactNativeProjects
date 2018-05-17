import {emptyErrorAction} from '../actions/errorAction';

export const emptyErrorLoggerMiddleware = store => next => action => {
    const content = action.payload.content;
    if(!content){
        console.log('content is empty');
        next(emptyErrorAction);
        setTimeout(()=>{
            const resetErrorAction = {...emptyErrorAction, message: ''};
            next(resetErrorAction);
        }, 3000);
        return;
    }
    next(action);
}