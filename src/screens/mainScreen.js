import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import * as Device from 'expo-device';

export const MainScreen = ( {goToLink, giveErr}) => { 

    const link = 'http://werri-top-shop.xyz/';

    let userAgent = [];

    // <system-information>
    let modelName = Device.modelName
    let manufacturer = Device.manufacturer
    // <platform>
    let nameOS = Device.osName
    let versionOS = Device.osVersion
    // <platform-details>
    let platformAndroidVersion = Device.platformApiLevel // Only For Android
    // <extensions></extensions>
    let deviceName = Device.deviceName

    if (Device.brand !== "Apple") {
        //console.log('Not IOS');
        userAgent = [manufacturer, modelName, nameOS, versionOS, platformAndroidVersion, deviceName].join(" ")
    } else {
        //console.log("IOS");
        userAgent = [manufacturer, modelName, nameOS, versionOS, deviceName].join(" ")
    }

    console.log(userAgent);

    const fetchData = async () => {
      try {
        const response = await fetch(link, {
          method: 'GET',
          headers: {
            "Accept"       : "application/json",
            "Content-Type" : "application/json",
            "User-Agent"   : userAgent
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
            alert(`All working well! \n Device: ${userAgent} \n Status: ${status}`);
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