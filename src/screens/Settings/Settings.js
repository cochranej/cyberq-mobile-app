import React, {Component} from 'react';
import {Picker, StyleSheet, Text, View} from 'react-native';
import {CENTIGRADE, FAHRENHEIT} from '../../constants/temperatureUnits';
import {connect} from "react-redux";
import {updateTemperateUnits} from "../../store/actions/index";

class Settings extends Component {
  render() {
    return (
        <View>
          <View style={styles.units}>
            <Text style={styles.unitText}>Units:</Text>
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
    backgroundColor: "lightgrey"
  },
  units: {
    borderWidth: .5,
    borderColor: "darkgrey",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 40,
    paddingLeft: 10,
    paddingRight: 10
  },
  unitText: {
    width: "40%",
    fontSize: 18
  },
  unitPicker: {
    width: "60%"
  },
  unitPickerItem: {
    fontSize: 18
  }
});

const mapStateToProps = (state) => {
  return {
    units: state.settings.units
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUnits: (units) => dispatch(updateTemperateUnits(units))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);