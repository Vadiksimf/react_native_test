import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello ReactN!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.button}
        onPress={ fetchData }
      >
        <Text style={ styles.textCenter }> Get data </Text>
      </TouchableOpacity>
    </View>
  );
}

// const fetchData = async () => {
//   try {
//       const res = await axios(`http://werri-top-shop.xyz`);
//       let result = res.data.results;
//       let status = res.data.status;

//       if (status !== 200) {
//         console.log('We have a problem' + status)
//       }

//       //console.log(result);
//       console.log(res);
//   } catch (error) {
//       alert(error);
//   }   
// }

// https://api.spoonacular.com/recipes/search?apiKey=f661a11322574dada00f6e9826ebfdf2&query=pizza&number=5
// http://werri-top-shop.xyz

const fetchData = async () => {
  try {
    const response = await fetch('https://api.spoonacular.com/recipes/search?apiKey=f661a11322574dada00f6e9826ebfdf2&query=pizza&number=5', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })

    const data = await response.json();
    console.log('Data:', data)
  } catch (err) {
    alert(err);
  }
}

//fetchData();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'red',
    fontSize: 26
  },
  textCenter: {
    fontSize: 26,
    color: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: "#0A6ABB",
    width: 300,
    height: 45,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 50
  }
});



