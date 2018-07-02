import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TempReading from './TempReading/TempReading';
import TempAlarm from './TempAlarm/TempAlarm';

const tempSensor = (props) => {
  return (
      <View style={styles.container}>
        <Text style={styles.heading}>{props.data.name}</Text>
        <TempReading temp={props.data.temp} units={props.units} />
        <TempAlarm name="High Alarm" temp={props.data.highAlarm} units={props.units} />
        <TempAlarm name="Low Alarm" temp={props.data.lowAlarm} units={props.units} />
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