import React from 'react';
import { View } from 'react-native';
import Button from './Button'

createButtonGrids = () => {
    var buttonsInGrid = [];
    for (var i = 0; i < 10; i++){
        buttonsInGrid.push(<Button>{i}</Button>);
    }
    return buttonsInGrid;
}

const ButtonGrid = () => {
    const { buttonGridStyle } = styles;
    return (
        <View style={buttonGridStyle}>
                {this.createButtonGrids()}
        </View>
    );
};

const styles = {
    buttonGridStyle:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'
    }
}

export default ButtonGrid;