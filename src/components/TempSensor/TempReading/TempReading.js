import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const tempReading = (props) => {
  return (
      <View style={styles.temp}>
        <Text style={styles.tempReading}>{props.temp.toFixed(1)}</Text>
        <Text style={styles.tempScale}>&#8451;</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  temp: {
    flexDirection: "row",
    alignItems: "center"
  },
  tempReading: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black"
  },
  tempScale: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black"
  }
});

export default tempReading;