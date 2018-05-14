import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    SectionList,
    StyleSheet,
} from 'react-native';
import getUsers from '../services/userApi';
import AddTask from './AddTask';
import ItemTask from './ItemTask';

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



    _add(text){
        const id = this.state.listUsers.length;
        const listUsers = [...this.state.listUsers, {id: id, text: text}];
        this.setState({
            listUsers
        });
    }

    _close(item){
        const listUsers = this.state.listUsers.filter(i => i.id !== item.id);
        this.setState({
            listUsers
        });
        // console.log(listUsers);
    }

    render() {
        return (
            <View style={localStyles.container}>
                <AddTask add={this._add.bind(this)}/>
                <FlatList
                    data={this.state.listUsers}
                    keyExtractor={(item, index)=>`${index}`}
                    renderItem={({ item, index }) => <ItemTask item={item} close={this._close.bind(this)}/>}
                />
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBE9F4',
    }
})




