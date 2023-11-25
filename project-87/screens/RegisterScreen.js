import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";

import firebase from "firebase";
import{RFValue} from "react-native-responsive-fontsize";
import * as Font from "expo-font"

import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync();


export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }


  RegisterUser = (email, password, confirmPassword, first_name, last_name) => {
    if(password==confirmPassword){
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        Alert.alert("User registered!")
    })
    .catch(error => {
      Alert.alert(error.message);
    })
  }else{
      Alert.alert("Passwords don't match!")
  }
  }
  

  render() {

    
    return (
      
      <TextInput
      onChangeText={text => this.setState({ first_name: text })}
      placeholder={"First name"}
      placeholderTextColor={'#FFFFFFFFF'}
      />
      <TextInput
      onChangeText={text => this.setState({ last_name: text })}
      placeholder={"last name"}
      placeholderTextColor={'#FFFFFFFFF'}
      />
      <TextInput
      onChangeText={text => this.setState({ email: text })}
      placeholder={"Enter email"}
      placeholderTextColor={'#FFFFFFFFF'}
      />
      <TextInput
      onChangeText={text => this.setState({ password: text })}
      placeholder={"First password"}
      placeholderTextColor={'#FFFFFFFFF'}
      secureTextEntry
      />
      <TextInput
      onChangeText={text => this.setState({ confirmPassword: text })}
      placeholder={"Re-enter password"}
      placeholderTextColor={'#FFFFFFFFF'}
      secureTextEntry
      />
      <TouchableOpacity
      style={[styles.button, {marginTop: 25}]}
      onPress={() => this.RegisterUser(email, password, confirmPassword, first_name, last_name)}
      >
        <Text>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => this.props.navigation.navigate("LoginScreen")}
      >
      <Text>Login ?</Text>
      </TouchableOpacity>
  });


}

const styles = StyleSheet.create({


});