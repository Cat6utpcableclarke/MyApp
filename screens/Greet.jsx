import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button } from 'react-native';


function Greet ({route}){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Hello {route.params.name}</Text>
            <Button
                title="Go To Test 1"
                onPress={() => navigation.navigate('Test1')}
            />

            <Button
                title="Go To Component Showcase"
                onPress={() => navigation.navigate('ComponentShowcase')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default Greet;