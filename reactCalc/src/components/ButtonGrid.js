import React from 'react';
import { View, FlatList, List } from 'react-native';
import Button from './Button'


createButtonGrids = () => {
    var buttonsInGrid = Array(11)
    .fill(null)
    .map((item, index) => index + 1);
    for (var i = 0; i < 10; i++){
        buttonsInGrid.push(<Button>{i}</Button>);
        //buttonsInGrid.push({i});
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
            <FlatList>
            data={this.createButtonGrids()}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
            )}
            </FlatList>
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