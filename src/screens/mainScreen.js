import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//import { fetchData, openLink } from '../getdata.js';

export const MainScreen = ( {goToLink}) => { 

    const link = 'http://werri-top-shop.xyz/';
    
    const fetchData = async () => {
      try {
        const response = await fetch(link, {
          method: 'GET',
          headers: {
            "Accept"       : "application/json",
            "Content-Type" : "application/json",
            "User-Agent"   : `${window.navigator.userAgent}`
          }
        });
        const data = await response.json();
        const status = response.status;
        console.log('Data:', data);
        // console.log(status);
        if (status !== 200) {
          alert('We have a problem, code: ' + status)
        } else {
          //alert(`It's working well! ${window.navigator.userAgent} ${status}`);
          //console.log(data.url)
          //openLink = data.url
          goToLink( data.url )
        }
      } catch (err) {
        alert(err);
      }
    }


    return (
        <View style={ styles.container }>
            <TouchableOpacity 
                style={styles.button} 
                onPress={ fetchData }
            >
                <Text style={ styles.textCenter }> Press </Text>
            </TouchableOpacity>
        </View>
    )
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