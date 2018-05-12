import React from 'react';
import { View } from 'react-native';
import Button from './Button'

const ButtonGrid = () => {
    const { buttonGridStyle } = styles;
    return (
        <View style={buttonGridStyle}>
                <Button onPress={() => Console.write("Test")}>
                    1
                </Button>
                <Button onPress={() => Console.write("Test")}>
                    2
                </Button>
                <Button onPress={() => Console.write("Test")}>
                    3
                </Button>
                <Button onPress={() => Console.write("Test")}>
                    4
                </Button>
                <Button onPress={() => Console.write("Test")}>
                    6
                </Button>
                <Button onPress={() => Console.write("Test")}>
                    6
                </Button>
                <Button onPress={() => Console.write("Test")}>
                    6
                </Button>
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