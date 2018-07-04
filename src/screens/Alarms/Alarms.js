import React, {Component} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {connect} from "react-redux";
import {updateHighAlarm, updateHighAlarmActive, updateLowAlarm, updateLowAlarmActive} from "../../store/actions/index";
import SensorAlarm from "../../components/SensorAlarm/SensorAlarm";

class Alarms extends Component {

  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <SensorAlarm
                key="sensor1"
                sensor={this.props.sensor1}
                units={this.props.units}
                onUpdateHighAlarm={(val) => this.props.onUpdateHighAlarm("sensor1", val)}
                onUpdateHighAlarmActive={(val) => this.props.onUpdateHighAlarmActive("sensor1", val)}
                onUpdateLowAlarm={(val) => this.props.onUpdateLowAlarm("sensor1", val)}
                onUpdateLowAlarmActive={(val) => this.props.onUpdateLowAlarmActive("sensor1", val)}
            />
            <SensorAlarm
                key="sensor2"
                sensor={this.props.sensor2}
                units={this.props.units}
                onUpdateHighAlarm={(val) => this.props.onUpdateHighAlarm("sensor2", val)}
                onUpdateHighAlarmActive={(val) => this.props.onUpdateHighAlarmActive("sensor2", val)}
                onUpdateLowAlarm={(val) => this.props.onUpdateLowAlarm("sensor2", val)}
                onUpdateLowAlarmActive={(val) => this.props.onUpdateLowAlarmActive("sensor2", val)}
            />
            <SensorAlarm
                key="sensor3"
                sensor={this.props.sensor3}
                units={this.props.units}
                onUpdateHighAlarm={(val) => this.props.onUpdateHighAlarm("sensor3", val)}
                onUpdateHighAlarmActive={(val) => this.props.onUpdateHighAlarmActive("sensor3", val)}
                onUpdateLowAlarm={(val) => this.props.onUpdateLowAlarm("sensor3", val)}
                onUpdateLowAlarmActive={(val) => this.props.onUpdateLowAlarmActive("sensor3", val)}
            />
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

const mapStateToProps = (state) => {
  return {
    sensor1: state.temperatures.sensor1,
    sensor2: state.temperatures.sensor2,
    sensor3: state.temperatures.sensor3,
    units: state.settings.units
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateHighAlarm: (key, alarm) => dispatch(updateHighAlarm(key, alarm)),
    onUpdateHighAlarmActive: (key, active) => dispatch(updateHighAlarmActive(key, active)),
    onUpdateLowAlarm: (key, alarm) => dispatch(updateLowAlarm(key, alarm)),
    onUpdateLowAlarmActive: (key, active) => dispatch(updateLowAlarmActive(key, active))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alarms);