import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import TempSensor from "../../../src/components/TempSensor/TempSensor";
import {connect} from "react-redux";
import {updateSensorOneTemp, updateSensorTwoTemp, updateSensorThreeTemp} from "../../store/actions/index";

class Home extends Component {

  ticker = () => {
    this.props.onUpdateSensorOne(this.props.refreshRate);
    this.props.onUpdateSensorTwo(this.props.refreshRate);
    this.props.onUpdateSensorThree(this.props.refreshRate);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.ticker(), 1000 * this.props.refreshRate);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.refreshRate !== this.props.refreshRate) {
      clearInterval(this.interval);
      this.interval = setInterval(() => this.ticker(), 1000 * this.props.refreshRate);
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <TempSensor data={this.props.sensor1} units={this.props.units}/>
          <TempSensor data={this.props.sensor2} units={this.props.units}/>
          <TempSensor data={this.props.sensor3} units={this.props.units}/>
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
    sensor3: state.temperatures.sensor3,
    units: state.settings.units,
    refreshRate: state.settings.refreshRate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateSensorOne: (increment) => dispatch(updateSensorOneTemp(increment)),
    onUpdateSensorTwo: (increment) => dispatch(updateSensorTwoTemp(increment)),
    onUpdateSensorThree: (increment) => dispatch(updateSensorThreeTemp(increment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
