import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { headerTextStyle, headerViewStyle } = styles;
    return (
        <View style={headerViewStyle}>
            <Text style={headerTextStyle}>{props.headerText}</Text>
        </View>
    );
};

// Makes the component available to other parts of the application
export default Header;

const styles = {
    headerViewStyle:{
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerTextStyle:{
        fontSize: 30
    }
}

