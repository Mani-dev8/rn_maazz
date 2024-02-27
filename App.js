// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WizardNavigator from "./screens/WizardNavigator";
import CalenderScreen from "./screens/CalenderScreen";

const App = () => {
  return (
    <NavigationContainer>
      <CalenderScreen />
    </NavigationContainer>
  );
};

export default App;
