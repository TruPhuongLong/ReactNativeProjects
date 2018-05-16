import typeAction from './typeAction';
export const addTask = (content) => {
    return {
        type: typeAction.ADD_TASK,
        payload: {
            content,
            isDone: false,
        }
    }
}

