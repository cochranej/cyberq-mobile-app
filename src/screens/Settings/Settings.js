import React, {Component} from 'react';
import {Picker, StyleSheet, Switch, Text, View} from 'react-native';
import {CENTIGRADE, FAHRENHEIT} from '../../constants/temperatureUnits';
import {connect} from "react-redux";
import {updateDemoMode, updateRefreshRate, updateTemperateUnits} from "../../store/actions/index";

class Settings extends Component {

  state = {
    units: [
      {label: "Centigrade", value: CENTIGRADE},
      {label: "Fahrenheit", value: FAHRENHEIT}
    ],
    refreshRates: [
      {label: "1 second", value: "1"},
      {label: "5 seconds", value: "5"},
      {label: "10 seconds", value: "10"},
      {label: "20 seconds", value: "20"},
      {label: "30 seconds", value: "30"}
    ]
  };

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

  render() {
    unitItems = this.state.units.map((unit, index) => {
      return (<Picker.Item key={index} itemStyle={styles.settingPickerItem} label={unit.label} value={unit.value} />);
    });
    refreshRateItems = this.state.refreshRates.map((refreshRate, index) => {
      return (<Picker.Item key={index} itemStyle={styles.settingPickerItem} label={refreshRate.label} value={refreshRate.value} />);
    });
    return (
        <View style={styles.container}>
          <View style={[styles.setting, styles.groupEnd]}>
            <Text style={styles.settingText}>Demo Mode:</Text>
            <Switch value={this.props.demoMode} onValueChange={this.props.onUpdateDemoMode} disabled={true} />
          </View>
          <View style={styles.setting}>
            <Text style={styles.settingText}>Units:</Text>
            <Picker style={styles.settingPicker} selectedValue={this.props.units} onValueChange={this.props.onUpdateUnits}>
              {unitItems}
            </Picker>
          </View>
          <View style={[styles.setting, styles.groupEnd]}>
            <Text style={styles.settingText}>Refresh Rate:</Text>
            <Picker style={styles.settingPicker} selectedValue={this.props.refreshRate} onValueChange={this.props.onUpdateRefreshRate}>
              {refreshRateItems}
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
  groupEnd: {
    marginBottom: 30
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