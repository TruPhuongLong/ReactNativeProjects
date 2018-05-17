import { emptyErrorAction } from '../actions/errorAction';

// if let setTimeoutId here: it is global, and if you call emptyErrorLoggerMiddleware many time < 3s distance time
// then it delete old timer, and setTimeoutId will get latest call
// after you stop call emptyErrorLoggerMiddleware, after 3 s setTimeoutId will execute 1 time
//===
// if let setTimeoutId inside this function, this will create many setTimeoutId.-> it not good perfomance.
let setTimeoutId;
export const emptyErrorLoggerMiddleware = store => next => action => {
    const content = action.payload.content;
    if (!content) {
        console.log('content is empty');
        next(emptyErrorAction);
        
        if (setTimeoutId) {
            clearTimeout(setTimeoutId);
        }
        setTimeoutId = setTimeout(() => {
            const resetErrorAction = { ...emptyErrorAction, message: '' };
            next(resetErrorAction);
        }, 3000);

        return;
    }
    next(action);
}