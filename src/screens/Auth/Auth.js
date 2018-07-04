import React, {Component} from "react";
import {ImageBackground, StyleSheet, View} from "react-native";
import DefaultInput from "../../components/DefaultInput/DefaultInput";
import startMainTabs from "../MainTabs/startMainTabs";
import backgroundImage from "../../assets/bbq.jpg";
import ButtonWithBackground from "../../components/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.container}>
            <ButtonWithBackground color="#29aaf4">Switch to Login</ButtonWithBackground>
            <View style={styles.inputContainer}>
              <DefaultInput placeholder="Your Email Address" style={styles.input}/>
              <DefaultInput placeholder="Password" style={styles.input}/>
              <DefaultInput placeholder="ConfirmPassword" style={styles.input}/>
            </View>
            <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Login</ButtonWithBackground>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "lightgrey",
    borderColor: "darkgrey"
  }
});

export default AuthScreen;