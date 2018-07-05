import React, {Component} from "react";
import {ImageBackground, StyleSheet, View, Dimensions} from "react-native";
import DefaultInput from "../../components/DefaultInput/DefaultInput";
import startMainTabs from "../MainTabs/startMainTabs";
import backgroundImage from "../../assets/bbq.jpg";
import ButtonWithBackground from "../../components/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {

  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.addEventListener("change", this.updateStyles);
  }

  updateStyles = (dimensions) => {
    this.setState({
      viewMode: dimensions.window.height > 500 ? "portrait" : "landscape"
    });
  };

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
              <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
                <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                  <DefaultInput placeholder="Password" style={styles.input}/>
                </View>
                <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                  <DefaultInput placeholder="ConfirmPassword" style={styles.input}/>
                </View>
              </View>
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
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordWrapper: {
    width: "100%"
  },
  landscapePasswordWrapper: {
    width: "45%"
  }
});

export default AuthScreen;