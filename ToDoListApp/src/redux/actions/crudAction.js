import typeAction from './typeAction';

export const addTask = (content) => {
    console.log('addTask run...');
    return {
        type: typeAction.ADD_TASK,
        payload: {
            content,
            isDone: false,
        }
    }
}

export const removeTask = (payload) => {
    console.log('removeTask run...');
    return {
        type: typeAction.REMOVE_TASK,
        payload
    }
}

