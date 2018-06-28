import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-home", 30),
    Icon.getImageSource("md-alarm", 30),
    Icon.getImageSource("md-settings", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "cyberq.HomeScreen",
          label: "Home",
          title: "Home",
          icon: sources[0]
        },
        {
          screen: "cyberq.AlarmsScreen",
          label: "Alarms",
          title: "Alarms",
          icon: sources[1]
        },
        {
          screen: "cyberq.SettingsScreen",
          label: "Settings",
          title: "Settings",
          icon: sources[2]
        }
      ]
    });
  });
};

export default startTabs;