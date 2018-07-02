import React from "react";
import {StyleSheet, View, Text} from "react-native";
import TempReading from "./TempReading/TempReading";
import TempAlarm from "./TempAlarm/TempAlarm";
import * as AlarmTypes from "../../constants/alarmtypes";

const tempSensor = (props) => {
  return (
      <View style={styles.container}>
        <Text style={styles.heading}>{props.sensor.name}</Text>
        <TempReading temp={props.sensor.temp} units={props.units} />
        <TempAlarm
            name={AlarmTypes.HIGH_ALARM}
            alarmTemperature={props.sensor.highAlarm}
            sensorTemperature={props.sensor.temp}
            units={props.units}
            active={props.sensor.highAlarmActive}/>
        <TempAlarm 
            name={AlarmTypes.LOW_ALARM}
            alarmTemperature={props.sensor.lowAlarm} 
            alarmTemperature={props.sensor.lowAlarm}
            sensorTemperature={props.sensor.temp}
            units={props.units} 
            active={props.sensor.lowAlarmActive}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30
  },
  heading: {
    backgroundColor: "grey",
    color: "white",
    fontSize: 20,
    width: "100%",
    textAlign: "center"
  }
});

export default tempSensor;