import {Navigation} from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import {Platform} from "react-native";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "ios" ? "ios-home" : "md-home", 30),
    Icon.getImageSource(Platform.OS === "ios" ? "ios-alarm" : "md-alarm", 30),
    Icon.getImageSource(Platform.OS === "ios" ? "ios-settings" : "md-settings", 30),
    Icon.getImageSource(Platform.OS === "ios" ? "ios-menu" : "md-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "cyberq.HomeScreen",
          label: "Home",
          title: "Home",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[3],
                title: "menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "cyberq.AlarmsScreen",
          label: "Alarms",
          title: "Alarms",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[3],
                title: "menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "cyberq.SettingsScreen",
          label: "Settings",
          title: "Settings",
          icon: sources[2],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[3],
                title: "menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "cyberq.SideDrawer"
        }
      }
    });
  });
};

export default startTabs;