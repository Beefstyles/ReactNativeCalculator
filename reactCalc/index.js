import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ButtonGrid from './src/components/ButtonGrid';

const App = () => (
    <View style={{ flex: 1}}>
        <Header headerText={'Test'} />
        <ButtonGrid />
    </View>
)

AppRegistry.registerComponent('reactCalc', () => App);
