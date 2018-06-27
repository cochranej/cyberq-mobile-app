import React, {Component} from 'react';
import {Picker, StyleSheet, Text, View, Switch} from 'react-native';
import {CENTIGRADE, FAHRENHEIT} from '../../constants/temperatureUnits';
import {connect} from "react-redux";
import {updateTemperateUnits, updateDemoMode} from "../../store/actions/index";

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
            <Picker style={styles.unitPicker} selectedValue = {this.props.units} onValueChange = {this.props.onUpdateUnits}>
              <Picker.Item itemStyle={styles.unitPickerItem} label = "Centigrade" value = {CENTIGRADE} />
              <Picker.Item itemStyle={styles.unitPickerItem} label = "Fahrenheit" value = {FAHRENHEIT} />
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
  unitPicker: {
    width: "50%"
  },
  unitPickerItem: {
    fontSize: 18
  }
});

const mapStateToProps = (state) => {
  return {
    units: state.settings.units,
    demoMode: state.settings.demoMode
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUnits: (units) => dispatch(updateTemperateUnits(units)),
    onUpdateDemoMode: (demoMode) => dispatch(updateDemoMode(demoMode))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);