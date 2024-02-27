// WizardScreen3.js
import React from "react";
import { View, Text, Button } from "react-native";

const WizardScreen3 = ({ navigation }) => {
  return (
    <View>
      <Text>Wizard Screen 3</Text>
      <Button title="Previous" onPress={() => navigation.goBack()} />
      <Button
        title="NEXT"
        onPress={() => navigation.navigate("WizardScreen4")}
      />
    </View>
  );
};

export default WizardScreen3;
