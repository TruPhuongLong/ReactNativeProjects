import React from 'react';
const getUsers = async () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
}

export default getUsers;


// componentDidMount() {
    //     getUsers()
    //         .then(data => {
    //             this.setState({
    //                 listUsers: data
    //             })
    //             // console.log(this.state.listUsers)
    //         })
    //         .catch(error => console.log(error));
    // }