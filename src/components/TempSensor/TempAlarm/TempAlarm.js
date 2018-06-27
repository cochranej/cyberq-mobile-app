import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {getTemperature} from "../../../functions/functions";

const tempAlarm = (props) => {
  const temperature = getTemperature(props.temp, props.units);
  return (
      <View style={styles.alarm}>
        <Text>{props.name}</Text>
        <Text>{temperature}&deg;{props.units}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  alarm: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default tempAlarm;