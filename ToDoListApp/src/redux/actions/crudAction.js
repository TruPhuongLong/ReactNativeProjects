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

