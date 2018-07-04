import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {getTemperature} from "../../../functions/functions";
import * as AlarmTypes from "../../../constants/alarmtypes";

const tempAlarm = (props) => {
  const temperature = getTemperature(props.alarmTemperature, props.units);
  let statusStyle = styles.inactive;
  if (props.active) {
    if (props.name === AlarmTypes.HIGH_ALARM) {
      statusStyle = props.sensorTemperature.toFixed(1) >= temperature.toFixed(1) ? styles.alert : styles.active
    } else {
      statusStyle = props.sensorTemperature.toFixed(1) <= temperature.toFixed(1) ? styles.alert : styles.active
    }
  }
  return (
      <View style={styles.alarm}>
        <Text style={statusStyle}>{props.name}</Text>
        <Text style={statusStyle}>{temperature.toFixed(0)}&deg;{props.units}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  alarm: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  active: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16
  },
  inactive: {
    color: "grey"
  },
  alert: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default tempAlarm;