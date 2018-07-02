import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Alarm from "./Alarm/Alarm";

const sensorAlarm = (props) => {
  return (
      <View style={styles.sensor}>
        <Text style={styles.heading}>{props.sensor.name}</Text>
        <Alarm
            alarmType="High Alarm"
            value={props.sensor.highAlarm}
            activeValue={props.sensor.highAlarmActive}
            onUpdateAlarm={props.onUpdateHighAlarm}
            onUpdateAlarmActive={props.onUpdateHighAlarmActive}
        />
        <Alarm
            alarmType="Low Alarm"
            value={props.sensor.lowAlarm}
            activeValue={props.sensor.lowAlarmActive}
            onUpdateAlarm={props.onUpdateLowAlarm}
            onUpdateAlarmActive={props.onUpdateLowAlarmActive}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  sensor: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20
  },
  heading: {
    backgroundColor: "grey",
    color: "white",
    fontSize: 20,
    width: "100%",
    textAlign: "center"
  }
});

export default sensorAlarm;