import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput 
} from 'react-native';
import {Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import Map from './src/components/Map';
import CalendarSample from './src/pages/Calendar';
import Tasks from './src/pages/Tasks';
import Routes from './src/Routes';
const {width,height} =  Dimensions.get('window')
const SCREEN_HEIGHT= height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
export default class App extends Component<{}> {
  
  render() {
    return (
     
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
       <Tasks/>
       
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox:{
      bottom:0,
      backgroundColor: '#000000',
  },
  radius:{
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0,122,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker:{
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
  },
  container : {
    flex: 1,
    justifyContent: 'center',
   
    backgroundColor: '#F5FCFF',

  },
  map:{
    //left: 0,
    alignItems: 'center',
    bottom: 50,
    
    width: 500,
    height:400,
    position: 'absolute',
  }
});