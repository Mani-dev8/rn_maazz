import React from "react";
import { View, Text, Button } from "react-native";

const WizardScreen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Wizard Screen 1</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate("WizardScreen2")}
      />
    </View>
  );
};

export default WizardScreen1;
