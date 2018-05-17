import { initialize, setListener, push } from './firebase';

export const initApi = () => initialize();

export const getListTask = (updaterFn) => setListener('ListTask', updaterFn);

export const postTask = (content) => {
    if(content){
        push('ListTask', {isDone: false, content: content});
    }
}


// import React from 'react';
// const getUsers = async () => {
//     return fetch('https://todolistapp-e0245.firebaseio.com/ListTask')
//     .then(response => response.json())
// }

// export default getUsers;


// componentDidMount() {
//         getUsers()
//             .then(data => {
//                 this.setState({
//                     listUsers: data
//                 })
//                 // console.log(this.state.listUsers)
//             })
//             .catch(error => console.log(error));
//     }

//

// componentDidMount() {
//     console.log('listTask componentDidMount')
//     this.unSubscribeListTask = getListTask((snapShot) => {
//         const listUsers = Object.values(snapShot.val() || {})
//         this.setState({
//             listUsers
//         })

//     })
// }

// componentWillUnmount() {
//     this.unSubscribeListTask();
// }

// _add(text) {
//     postTask(text);
//     Keyboard.dismiss()
// }
