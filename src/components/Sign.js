import React, { Component } from 'react';
import * as firebase from 'firebase';
import Login from '../pages/Login';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import {Actions} from 'react-native-router-flux';
if (!firebase.apps.length) {
  //firebase.initializeApp({});


firebase.initializeApp({
  apiKey: "AIzaSyBwmMkG_Isr8d79buHBl_zxgr6MOAPOaTs",
  authDomain: "employee-portal-5ffe6.firebaseapp.com",
  databaseURL: "https://employee-portal-5ffe6.firebaseio.com",
  projectId: "employee-portal-5ffe6",
  storageBucket: "employee-portal-5ffe6.appspot.com",
  messagingSenderId: "245208961801"
});
}
export default class Sign extends Component<{}> {
  state = { firstName:'',lastName: '',phoneNumber:'', email: '', password: '', errorMessage: null }
  static propTypes = {
    navigation: PropTypes.object,
   
  };
  goBack() {
    Actions.pop();
};
  handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log('handleSignUp');
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Login'))
    .catch(error => this.setState({ errorMessage: error.message }))
    console.log('signup done');
    
  };

	render(){
    const {navigate} = this.props.navigation;
		return(
			<View style={styles.container}>
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="First Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText={firstName => this.setState({firstName })}
             
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Last Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText={lastName => this.setState({ lastName })}
             
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
              onSubmitEditing={()=> this.password.focus()}
              />
                <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Phone Number"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="numeric"
              onChangeText={phoneNumber => this.setState({phoneNumber })}
             
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />  
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText={password => this.setState({ password })}
              /> 

           <TouchableOpacity style={styles.button} onPress={ navigate('Login')}>
             <Text style={styles.buttonText}>Sign Up</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});