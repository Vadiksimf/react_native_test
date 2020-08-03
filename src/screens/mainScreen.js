import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//import { fetchData, openLink } from '../getdata.js';

export const MainScreen = ( {goToLink, giveErr}) => { 

    const link = 'http://werri-top-shop.xyz/';
    const ua = window.navigator.userAgent;
    
    const fetchData = async () => {
      try {
        const response = await fetch(link, {
          method: 'GET',
          headers: {
            "Accept"       : "application/json",
            "Content-Type" : "application/json",
            "User-Agent"   : ua
          }
        });
        const data = await response.json();
        const status = response.status;
        // console.log('Data:', data);
        // console.log(status);
        if (status !== 200) {
            giveErr('err');
            //alert('We have a problem, code: ' + status)
        } else {
            //alert(`It's working well! ${status}`);
            //console.log(data.url)
            //openLink = data.url
            goToLink( data.url )
        }
      } catch (err) {
        giveErr('err');
        // alert(err);
      }
    }


    return (
        <View style={ styles.container }>
            <TouchableOpacity 
                style={styles.button} 
                onPress={ fetchData }
            >
                <Text style={ styles.textCenter }> Get URL </Text>
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
      fontSize: 36,
      color: 'white',
      alignItems: 'center'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: "#3949ab",
      width: 170,
      height: 170,
      borderColor: "#FFFFFF",
      borderWidth: 5,
      borderRadius: 50000
    }
  });