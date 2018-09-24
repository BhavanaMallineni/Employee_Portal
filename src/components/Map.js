import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput 
} from 'react-native';
import {Dimensions} from 'react-native';
import MapView from 'react-native-maps';
const {width,height} =  Dimensions.get('window')
const SCREEN_HEIGHT= height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
export default class Map extends Component<{}> {

    constructor(props){
        super(props)
        this.state={
          initialPosition:{
            latitude: 0,
            longitude:0,
            longitudeDelta:0,
            latitudeDelta:0,
          },
          markerPosition:{
            latitude:0,
            longitude:0,
          },
          time: new Date().toLocaleString(),
        }
      }
      watchID: ?number = null
      componentDidMount(){
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
        navigator.geolocation.getCurrentPosition((position)=>{
          var lat = parseFloat(position.coords.latitude)
          var long = parseFloat(position.coords.longitude)
          var initialRegion={
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
          this.setState({initialPosition: initialRegion})
          this.setState({markerPosition: initialRegion})
        },
      (error)=> alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000,maximumAge: 1000})
         this.watchID = navigator.geolocation.watchPosition((positon)=>
        {
          var lat = parseFloat(positon.coords.latitude)
          var long = parseFloat(positon.coords.longitude)
    
          var lastRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
          this.setState({initialPosition: lastRegion})
          this.setState({markerPosition: lastRegion})
        })
      }
    
    
    componentWillUnmount(){
      clearInterval(this.intervalID);
      navigator.geolocation.clearWatch(this.watchID)
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    
      render() {
        return (
         
          <View style={styles.container}>
           
             
           
            <MapView
            style={styles.map}
            initialRegion={
              this.state.initialPosition
           }>
            
                <MapView.Marker
                coordinate={this.state.markerPosition} >
                <View style={styles.radius}>
                <View style={styles.marker}/>
                </View>
                </MapView.Marker>
                
            </MapView>
            
            <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder={this.state.time}
                  placeholderTextColor = "#ffffff"
                 
                 />
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