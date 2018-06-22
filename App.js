import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import Home from "./src/screens/Home/Home";
import Settings from "./src/screens/Settings/Settings";

// Register Screens
Navigation.registerComponent("cyberq-monitor.AuthScreen", () => AuthScreen);
Navigation.registerComponent("cyberq-monitor.HomeScreen", () => Home);
Navigation.registerComponent("cyberq-monitor.SettingsScreen", () => Settings);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "cyberq-monitor.AuthScreen",
    title: "Login"
  }
});