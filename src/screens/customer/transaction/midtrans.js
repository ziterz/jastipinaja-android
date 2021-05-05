import React from 'react';
import { Linking, Platform } from 'react-native';
import {WebView} from 'react-native-webview';

export default function Midtrans(link) {
  console.log(link.data, "KWKWKWKWKWKWKWK");
  
  return Platform.OS === 'android' ? (
  <WebView source={{uri: link.data}} />
  ) : 
  // (
  // <WebView source={{uri: link}} style={{marginTop:35}}/>
  // );
  (
    Linking.openURL(link.data)
  )
}
