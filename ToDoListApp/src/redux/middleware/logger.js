import emptyErrorAction from '../actions/errorAction';

export const emptyErrorLoggerMiddleware = store => next => action => {
    console.log('run middleware emptyErrorTask, checking...');
    if(!store.getState().reducerTask.currentTask.content){
        next(emptyErrorAction)
    }
    next(action);
}