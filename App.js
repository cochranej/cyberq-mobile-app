import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TempSensor from './src/components/TempSensor/TempSensor';

export default class App extends Component {

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

  ticker = () => {
    this.setState(prevState => ({
      sensor1: {
          ...prevState.sensor1,
        temp: prevState.sensor1.temp + 0.08
      },
      sensor2: {
          ...prevState.sensor2,
        temp: prevState.sensor2.temp + 0.05
      },
      sensor3: {
          ...prevState.sensor3,
        temp: prevState.sensor3.temp + 0.03
      }
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.ticker(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
