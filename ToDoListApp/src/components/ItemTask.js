import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    LayoutAnimation,
} from 'react-native';

export default class ItemTask extends Component {
    constructor() {
        super();

    }

    componentDidMount(){
        const {configureNext, Presets, create, Types, Properties} = LayoutAnimation;
        configureNext({
            duration: 500,
            create: {
                type: Types.linear,
                property: Properties.opacity,
            },
            update: {
                type: Types.spring,
                springDamping: 0.4,
            },
            delete: {
                type: Types.linear,
                property: Properties.opacity,
                
            }
        });
        
    }

    render() {
        return (
            <View style={localStyles.item}>
                <Text style={localStyles.text}>{this.props.item.text} </Text>
                <TouchableOpacity onPress={() => this.props.close(this.props.item)}>
                    <Image source={require('../assets/images/close.png')} style={localStyles.image}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        backgroundColor: 'gray'
    },
    text: {
        flex: 1,
        marginHorizontal: 10,
        fontSize: 16,
    },
    image: {
        width: 30,
        height: 30,
        
    }
})