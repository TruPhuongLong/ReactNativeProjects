import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    SectionList,
    StyleSheet,
    ImageBackground,
    Keyboard,
} from 'react-native';
import AddTask from './AddTask';
import ItemTask from './ItemTask';
import { getListTask, postTask } from '../services/userApi';

export default class ListTask extends Component {
    static navigationOptions = {
        title: 'ListTask'
    }

    constructor() {
        super();
        this.state = {
            listUsers: []
        }
    }

    componentDidMount() {
        // console.log('listTask componentDidMount')
        this.unSubscribeListTask = getListTask((snapShot) => {
            const listUsers = Object.values(snapShot.val() || {})
            this.setState({
                listUsers
            })

        })
    }

    componentWillUnmount() {
        this.unSubscribeListTask();
    }

    _add(text) {
        // console.log(text);
        // const id = this.state.listUsers.length;
        // const listUsers = [...this.state.listUsers, {id: id, text: text}];
        // this.setState({
        //     listUsers
        // });
        postTask(text);
        Keyboard.dismiss()
    }

    _close(item) {
        const listUsers = this.state.listUsers.filter(i => i.id !== item.id);
        this.setState({
            listUsers
        });
        // console.log(listUsers);
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/images/backgroundImage.jpg')}
                style={localStyles.container}
            >
                <AddTask add={this._add.bind(this)} />
                <FlatList
                    data={this.state.listUsers}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({ item, index }) => <ItemTask item={item} close={this._close.bind(this)} />}
                />
            </ImageBackground>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        // opacity: 0.5,
        backgroundColor: 'rgba(0,0,0,0.1)',
    }
})




