import React from 'react';
import { View, FlatList, List } from 'react-native';
import Button from './Button';
import SquareGrid from 'react-native-square-grid';


createButtonGrids = () => {
    var buttonsInGrid = [];
    for (var i = 0; i < 10; i++){
        //buttonsInGrid.push(<Button>{i}</Button>);
        buttonsInGrid.push({i});
    }
    return buttonsInGrid;
}

renderItem ({item, index}) {
    return <Button>{item}</Button>;
}

const ButtonGrid = () => {
    const { buttonGridStyle } = styles;
    return (
        <View>
            <SquareGrid rows={4} columns={3} items = {this.createButtonGrids()} renderItem = {renderItem} />
        </View>
    );
};

const styles = {
    buttonGridStyle:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
}

export default ButtonGrid;