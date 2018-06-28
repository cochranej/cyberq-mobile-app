import React, {Component} from 'react';
import {Picker, StyleSheet, Text, View, Switch} from 'react-native';
import {CENTIGRADE, FAHRENHEIT} from '../../constants/temperatureUnits';
import {connect} from "react-redux";
import {updateTemperateUnits, updateDemoMode, updateRefreshRate} from "../../store/actions/index";

class Settings extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.setting}>
            <Text style={styles.settingText}>Demo Mode:</Text>
            <Switch value={this.props.demoMode} onValueChange={this.props.onUpdateDemoMode} />
          </View>
          <View style={styles.setting}>
            <Text style={styles.settingText}>Units:</Text>
            <Picker style={styles.settingPicker} selectedValue = {this.props.units} onValueChange = {this.props.onUpdateUnits}>
              <Picker.Item itemStyle={styles.settingPickerItem} label="Centigrade" value={CENTIGRADE} />
              <Picker.Item itemStyle={styles.settingPickerItem} label="Fahrenheit" value={FAHRENHEIT} />
            </Picker>
          </View>
          <View style={styles.setting}>
            <Text style={styles.settingText}>Refresh Rate:</Text>
            <Picker style={styles.settingPicker} selectedValue={this.props.refreshRate} onValueChange={this.props.onUpdateRefreshRate}>
              <Picker.Item itemStyle={styles.settingPickerItem} label="1 second" value="1" />
              <Picker.Item itemStyle={styles.settingPickerItem} label="5 seconds" value="5" />
              <Picker.Item itemStyle={styles.settingPickerItem} label="10 seconds" value="10" />
              <Picker.Item itemStyle={styles.settingPickerItem} label="20 seconds" value="20" />
              <Picker.Item itemStyle={styles.settingPickerItem} label="30 seconds" value="30" />
            </Picker>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingTop: 30
  },
  setting: {
    borderWidth: .5,
    borderColor: "darkgrey",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
    paddingLeft: 10,
    paddingRight: 10
  },
  settingText: {
    fontSize: 18
  },
  settingPicker: {
    width: "50%"
  },
  settingPickerItem: {
    fontSize: 18
  }
});

const mapStateToProps = (state) => {
  return {
    units: state.settings.units,
    demoMode: state.settings.demoMode,
    refreshRate: state.settings.refreshRate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUnits: (units) => dispatch(updateTemperateUnits(units)),
    onUpdateDemoMode: (demoMode) => dispatch(updateDemoMode(demoMode)),
    onUpdateRefreshRate: (refreshRate) => dispatch(updateRefreshRate(refreshRate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);