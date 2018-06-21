import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const tempAlarm = (props) => {
  return (
      <View style={styles.alarm}>
        <Text>{props.name}</Text>
        <Text>{props.temp.toFixed(1)}&#8451;</Text>
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