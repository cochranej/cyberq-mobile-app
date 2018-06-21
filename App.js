import React from 'react';
import {StyleSheet, View} from 'react-native';
import TempSensor from './src/components/TempSensor/TempSensor';

export default class App extends React.Component {

  state = {
    sensor1: {
      name: "Grill Probe",
      temp: 103.6,
      highAlarm: 150.0,
      lowAlarm: 80.0
    },
    sensor2: {
      name: "Food Probe 1",
      temp: 48.3,
      highAlarm: 53.5,
      lowAlarm: 0.0
    },
    sensor3: {
      name: "Food Probe 2",
      temp: 82.9,
      highAlarm: 90.0,
      lowAlarm: 0.0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TempSensor data={this.state.sensor1}/>
        <TempSensor data={this.state.sensor2}/>
        <TempSensor data={this.state.sensor3}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 26
  }
});
