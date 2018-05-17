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
import {addTask} from '../redux/actions/crudAction';
// import { authDecorator } from '../services/authService';

class ListTask extends Component {
    static navigationOptions = {
        title: 'ListTask'
    }

    constructor() {
        super();
        keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
    }

    
    _add(content) {
        Keyboard.dismiss();
        this.props.addTask(content);
    }

    _close(item) {
        
    }

    render() {
        const {listUsers, errMsg} = this.props;
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
                    {errMsg ? <Text style={localStyles.errMsg}>{errMsg}</Text> : false}
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
    },
    errMsg: {
        color: 'red'
    }
})



const mapStateToProps = (state) => {
    return { 
        listUsers: state.reducerTask.toDoList,
        errMsg: state.reducerError.errMsg,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addTask: (content) => {
            console.log(`_add run... with content: ${content}`)
            dispatch(addTask(content))
        }
    }
}
// export default authDecorator(ListTask);
// export default ListTask;
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListTask);




