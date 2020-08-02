import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export const ErrorConnect = ({ goBack, Link }) => {

    //console.log( Link )

    return (
        <View style={{ width: "100%", height: "90%" }}>
            <Button title='Go Back' onPress={ goBack }/>
            <Text style={ styles.text }>ERROR with connect, GoBack and try again.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 24,
        margin: 50
      },
})