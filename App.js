import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { SeeOnLink } from './src/webview.js';
import { Navbar } from './src/navbar.js';
import { fetchData, openLink } from './src/getdata.js';

export default function App() {
  const [elems, setElem] = useState([]);

  return (
    <View style={ styles.container }>
      <Navbar title='ReactNative app' />
      <View style={ styles.container }>
        <TouchableOpacity 
          style={styles.button}
          onPress={ fetchData }
        >
          <Text style={ styles.textCenter }> Press </Text>
        </TouchableOpacity>
      </View>
        <SeeOnLink openLink = {openLink} />
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    flexWrap: 'wrap',
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'red',
    fontSize: 24
  },
  textCenter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#3949ab",
    width: 200,
    height: 45,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 5,
  }
});



