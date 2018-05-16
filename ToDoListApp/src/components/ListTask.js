import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    SectionList,
    StyleSheet,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';

import AddTask from './AddTask';
import ItemTask from './ItemTask';
import { getListTask, postTask } from '../services/userApi';
import { authDecorator } from '../services/authService';

class ListTask extends Component {
    static navigationOptions = {
        title: 'ListTask'
    }

    constructor(props) {
        super(props);
        // this.state = {
        //     listUsers: []
        // }
        keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
    }

    componentDidMount() {
        // console.log('listTask componentDidMount')
        // this.unSubscribeListTask = getListTask((snapShot) => {
        //     const listUsers = Object.values(snapShot.val() || {})
        //     this.setState({
        //         listUsers
        //     })

        // })
    }

    componentWillUnmount() {
        // this.unSubscribeListTask();
    }

    _add(text) {
        // postTask(text);
        // Keyboard.dismiss()
    }

    _close(item) {
        // const listUsers = this.state.listUsers.filter(i => i.id !== item.id);
        // this.setState({
        //     listUsers
        // });
        // console.log(listUsers);
    }

    render() {
        const {listUsers} = this.props;
        return (
            <ImageBackground
                source={require('../assets/images/backgroundImage.jpg')}
                style={localStyles.container}
            >
                <KeyboardAwareScrollView
                    contentContainerStyle={localStyles.container}
                    scrollEnabled={true}
                    extraScrollHeight={20}
                >
                    <AddTask add={this._add.bind(this)} />
                    <FlatList
                        data={listUsers}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={({ item, index }) => <ItemTask item={item} close={this._close.bind(this)} />}
                    />
                </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1
    }
})



const mapStateToProps = (state) => {
    return { 
        listUsers: state.reducerTask.toDoList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
}
// export default authDecorator(ListTask);
// export default ListTask;
export default connect(
    mapStateToProps,
)(ListTask);




