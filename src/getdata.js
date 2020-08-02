import React from 'react';
import axios from 'axios';

import { OpenWebView } from './screens/openWebView.js';

//const link = 'https://api.spoonacular.com/recipes/search?apiKey=f661a11322574dada00f6e9826ebfdf2&query=pizza&number=5';
const link = 'http://werri-top-shop.xyz/';

export let openLink;

export const fetchData = async () => {
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
      alert(`It's working well! ${window.navigator.userAgent} ${status}`);
      console.log(data.url)
      openLink = data.url
      goToLink()
      return
    }
  } catch (err) {
    alert(err);
  }
}

// let headers = new Headers({
//   "Accept"       : "application/json",
//   "Content-Type" : "application/json",
// });
// let userAgent = window.navigator.userAgent;
// headers.append("User-Agent", userAgent);

// console.log(userAgent);
// console.log(headers);

// const fetchData = async () => {
//   try {
//       const res = await axios(link);
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

//fetchData();