import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export const OpenWebView = ({ goBack, Link }) => {

    //console.log( Link )

    return (
        <View style={{ width: "100%", height: "90%" }}>
            <Button title='Go Back' onPress={ goBack }/>
            <WebView source={{ uri: Link }}/>
        </View>
    );
}

const styles = StyleSheet.create({})