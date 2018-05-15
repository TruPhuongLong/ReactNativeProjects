export const typeAction = {
    ADD_TASK: 'ADD-TASK'
}
export const addTask = (content) => {
    return {
        type: typeAction.ADD_TASK,
        payload: {
            content,
            isDone: false,
        }
    }
}

