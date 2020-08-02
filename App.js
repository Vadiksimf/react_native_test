import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Navbar } from './src/navbar.js';
//import { fetchData, openLink } from './src/getdata.js';
import { MainScreen } from './src/screens/mainScreen.js';
import { OpenWebView } from './src/screens/openWebView.js';
import { ErrorConnect } from './src/screens/errorConnect.js';


export default function App() {

  const [sheetId, setSheet] = useState();

  // const [elems, setElem] = useState([]);

  // const addAction = (action) => {
  //   const newAction = {
  //     id: Date.now().toString,
  //     action
  //   }
  // setElem(prevState => [...prevState,  newAction ])
  // };

  let content = (
    <MainScreen 
      goToLink = { (data) => setSheet( data ) }
      giveErr = { (data) => setSheet( data ) }
    />
  );

  if (sheetId) {
    console.log(sheetId);
    if (sheetId === 'err') {
      content = <ErrorConnect goBack = {() => setSheet(null)}/>
    } else (
    content = <OpenWebView 
      let Link = { sheetId }
      goBack = {() => setSheet(null)}
    />
  )} 


  return (
    <View style={ styles.container }>
      <Navbar title='ReactNative app' />
      { content }
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
    borderRadius: 5
  }
});

