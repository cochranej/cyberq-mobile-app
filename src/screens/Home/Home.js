import React, {Component} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import TempSensor from "../../../src/components/TempSensor/TempSensor";
import {connect} from "react-redux";
import {updateSensorTemperature} from "../../store/actions/index";

class Home extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  ticker = () => {
    this.props.onUpdateSensorTemperature(this.props.refreshRate, "sensor1", 0.08);
    this.props.onUpdateSensorTemperature(this.props.refreshRate, "sensor2", 0.05);
    this.props.onUpdateSensorTemperature(this.props.refreshRate, "sensor3", 0.03);
  };

  setRefreshInterval = () => {
    this.interval = setInterval(() => this.ticker(), 1000 * this.props.refreshRate);
  };

  componentDidMount() {
    this.setRefreshInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.refreshRate !== this.props.refreshRate) {
      clearInterval(this.interval);
      this.setRefreshInterval();
    }
  }

  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <TempSensor sensor={this.props.sensor1} units={this.props.units}/>
            <TempSensor sensor={this.props.sensor2} units={this.props.units}/>
            <TempSensor sensor={this.props.sensor3} units={this.props.units}/>
          </View>
        </ScrollView>
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
    onUpdateSensorTemperature: (increment, key, multiplier) => dispatch(updateSensorTemperature(increment, key, multiplier))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
