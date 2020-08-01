import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export const SeeOnLink = ({ openLink }) => {
    return (
        <View style={{ width: "100%", height: "80%" }}>
            <WebView source={{ uri: 'https://yandex.ru' }}/>
        </View>
    );
  }