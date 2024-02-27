// WizardNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WizardScreen1 from "./WizardScreen1";
import WizardScreen2 from "./WizardScreen2";
import WizardScreen3 from "./WizardScreen3";
import WizardScreen4MultiSelect from "./WizardScreen4MultiSelect";
import WizardHeader from "../components/WizardHeader";

const Stack = createStackNavigator();

const WizardNavigator = () => {
  const screens = [
    { name: "WizardScreen1", title: "Step 1" },
    { name: "WizardScreen2", title: "Step 2" },
    { name: "WizardScreen3", title: "Step 3" },
    { name: "WizardScreen4", title: "Step 4" },
  ];

  return (
    <Stack.Navigator
      initialRouteName="WizardScreen1"
      screenOptions={({ navigation }) => ({
        header: () => {
          const routeIndex = navigation.getState().index;
          const currentRouteName =
            navigation.getState().routes[routeIndex].name;
          const currentStep =
            screens.findIndex((screen) => screen.name === currentRouteName) + 1;
          return (
            <WizardHeader
              currentStep={currentStep}
              totalSteps={screens.length}
            />
          );
        },
      })}
    >
      <Stack.Screen
        name="WizardScreen1"
        component={WizardScreen1}
        options={{ title: screens[0].title }}
      />
      <Stack.Screen
        name="WizardScreen2"
        component={WizardScreen2}
        options={{ title: screens[1].title }}
      />
      <Stack.Screen
        name="WizardScreen3"
        component={WizardScreen3}
        options={{ title: screens[2].title }}
      />
      <Stack.Screen
        name="WizardScreen4"
        component={WizardScreen4MultiSelect}
        options={{ title: screens[2].title }}
      />
    </Stack.Navigator>
  );
};

export default WizardNavigator;
