import {Navigation} from "react-native-navigation";
import {Provider} from "react-redux";
import configureStore from "./src/store/configureStore";

import AuthScreen from "./src/screens/Auth/Auth";
import Home from "./src/screens/Home/Home";
import Settings from "./src/screens/Settings/Settings";

const store = configureStore();

// Register Screens
Navigation.registerComponent("cyberq-monitor.AuthScreen", () => AuthScreen);
Navigation.registerComponent("cyberq-monitor.HomeScreen", () => Home, store, Provider);
Navigation.registerComponent("cyberq-monitor.SettingsScreen", () => Settings, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "cyberq-monitor.AuthScreen",
    title: "Login"
  }
});