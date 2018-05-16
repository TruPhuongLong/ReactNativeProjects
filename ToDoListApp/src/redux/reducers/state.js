const initialStateTask = {
    stateForReducerTask: {
        toDoList: [
            {content: "breakfast", isDone: true}
        ],
        currentTask: '',
    },
    stateForReducerError: {
        errMsg: ''
    }
}
export default initialStateTask;