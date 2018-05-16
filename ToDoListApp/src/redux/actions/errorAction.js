import typeAction from './typeAction';

export const emptyErrorAction = () => {
    return {
        type: typeAction.ERROR,
        message: 'content can not empty'
    }
}