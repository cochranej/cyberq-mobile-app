import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import TempSensor from "../../../src/components/TempSensor/TempSensor";
import {connect} from "react-redux";
import {updateSensorOneTemp, updateSensorTwoTemp, updateSensorThreeTemp} from "../../store/actions/index";

class Home extends Component {

  ticker = () => {
    this.props.onUpdateSensorOne();
    this.props.onUpdateSensorTwo();
    this.props.onUpdateSensorThree();
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
          <TempSensor data={this.props.sensor1}/>
          <TempSensor data={this.props.sensor2}/>
          <TempSensor data={this.props.sensor3}/>
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

const mapStateToProps = state => {
  return {
    sensor1: state.temperatures.sensor1,
    sensor2: state.temperatures.sensor2,
    sensor3: state.temperatures.sensor3
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateSensorOne: () => dispatch(updateSensorOneTemp(1)),
    onUpdateSensorTwo: () => dispatch(updateSensorTwoTemp(1)),
    onUpdateSensorThree: () => dispatch(updateSensorThreeTemp(1))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
