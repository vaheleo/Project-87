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
      fontsLoaded: false,
      userSignedIn: false
    }
  }



  signIn = async (email, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      this.props.navigation.replace("Dashboard");
    })
    .catch(error => {
      Alert.alert(error.message);
    });
  };

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      const {email, password} = this.state;
    
    return (
    <View>

      <TextInput
      onChangeText={text => this.setState({ email: text })}
      placeholder={"Enter Email"}
      placeholderTextColor={'#FFFFFFFFF'}
      autoFocus
      />

      <TextInput
      onChangeText={text => this.setState({ password: text })}
      placeholder={"Enter Password"}
      placeholderTextColor={'#FFFFFFFFF'}
      secureTextEntry
      />

      <TouchableOpacity
      style={[styles.button, {marginTop: 25}]}
      onPress={() => this.signIn(email, password)}
      >
      <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => this.props.navigation.navigate("RegisterScreen")}
      >
      <Text>New User?</Text>
      </TouchableOpacity>

      </View>
    );
  }
  }


}

const styles = StyleSheet.create({

button: {
  width: RFValue(250),
  height: RFValue(50),
  borderRadius: RFValue(30)
  backgroundColor: "white"
  marginBottom: RFValue(20)
}




});