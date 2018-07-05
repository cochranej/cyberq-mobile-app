import React, {Component} from "react";
import {View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SideDrawer extends Component {
  render() {
    return (
        <View style={[styles.container, {width: Dimensions.get("window").width * 0.8}]}>
          <TouchableOpacity>
            <View style={styles.drawerItem}>
              <Icon
                  style={styles.drawerItemIcon}
                  name={Platform.OS === "ios" ? "ios-log-out" : "md-log-out"}
                  size={30}
              />
              <Text>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white"
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "lightgrey"
  },
  drawerItemIcon: {
    marginRight: 10,
    color: "darkgrey"
  }
});

export default SideDrawer;