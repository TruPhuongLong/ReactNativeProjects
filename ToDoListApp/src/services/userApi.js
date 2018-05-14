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
import initialize from './firebase';

export default initApi = () => initialize();