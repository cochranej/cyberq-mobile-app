import React from "react";
import {StyleSheet, Text} from "react-native";

const defaultHeading = (props) => {
  return (
      <Text {...props} style={[styles.heading, props.style]}>
        {props.children}
      </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default defaultHeading;