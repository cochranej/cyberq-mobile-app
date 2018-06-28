import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {getTemperature} from "../../../functions/functions";

const tempReading = (props) => {
  const temperature = getTemperature(props.temp, props.units).toFixed(1);
  return (
      <View style={styles.temp}>
        <Text style={styles.tempReading}>{temperature}</Text>
        <Text style={styles.units}>&deg;{props.units}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  temp: {
    flexDirection: "row",
    alignItems: "center"
  },
  tempReading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black"
  },
  units: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  }
});

export default tempReading;