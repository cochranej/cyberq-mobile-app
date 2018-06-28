import {Navigation} from "react-native-navigation";
import {Provider} from "react-redux";
import configureStore from "./src/store/configureStore";

import AuthScreen from "./src/screens/Auth/Auth";
import Home from "./src/screens/Home/Home";
import Alarms from "./src/screens/Alarms/Alarms";
import Settings from "./src/screens/Settings/Settings";

const store = configureStore();

// Register Screens
Navigation.registerComponent("cyberq.AuthScreen", () => AuthScreen);
Navigation.registerComponent("cyberq.HomeScreen", () => Home, store, Provider);
Navigation.registerComponent("cyberq.AlarmsScreen", () => Alarms, store, Provider);
Navigation.registerComponent("cyberq.SettingsScreen", () => Settings, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "cyberq.AuthScreen",
    title: "Login"
  }
});