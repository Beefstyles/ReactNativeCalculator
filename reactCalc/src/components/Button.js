import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {
    const { buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress} style = {buttonStyle}>
        <Text style = {textStyle}>
        {children}
        </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#007AFF',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        flexWrap: 'wrap',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007AFF',
        marginLeft: 5,
        marginRight: 5,
        width: 50,
        height: 50
    }
};

export default Button;