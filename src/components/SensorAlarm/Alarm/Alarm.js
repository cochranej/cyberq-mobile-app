import React from "react";
import {View, Text, TextInput, Switch, StyleSheet} from "react-native";

const alarm = (props) => {
  return (
      <View style={styles.alarm}>
        <Text style={styles.alarmText}>{props.alarmType}</Text>
        <View style={styles.alarmValues}>
          <TextInput
              style={[styles.alarmText, styles.alarmInput]}
              value={props.value}
              onChangeText={props.onUpdateAlarm}
              maxLength={3}
              keyboardType="numeric"
              editable={props.activeValue}
          />
          <Text style={styles.alarmText}>&deg;{props.units}</Text>
          <Switch
              value={props.activeValue}
              onValueChange={props.onUpdateAlarmActive} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  alarm: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  alarmValues: {
    flexDirection: "row",
    alignItems: "center"
  },
  alarmText: {
    fontSize: 18
  },
  alarmInput: {
    minWidth: 50,
    textAlign: "right"
  }
});

export default alarm;