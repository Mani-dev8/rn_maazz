// WizardScreen2.js
import React from "react";
import { View, Text, Button } from "react-native";

const WizardScreen2 = ({ navigation }) => {
  return (
    <View>
      <Text>Wizard Screen 2</Text>
      <Button title="Previous" onPress={() => navigation.goBack()} />
      <Button
        title="Next"
        onPress={() => navigation.navigate("WizardScreen3")}
      />
    </View>
  );
};

export default WizardScreen2;
