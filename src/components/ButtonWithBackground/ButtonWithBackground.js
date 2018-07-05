import React from "react";
import {Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

const buttonWithBackground = (props) => {
  const content = (
      <View style={[styles.button, {backgroundColor: props.color}]}>
        <Text>{props.children}</Text>
      </View>
  );
  if (Platform.OS === "ios") {
    return (
        <TouchableOpacity onPress={props.onPress}>
          {content}
        </TouchableOpacity>
    );
  } else {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
          {content}
        </TouchableNativeFeedback>
    );
  }

};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black"
  }
});

export default buttonWithBackground;