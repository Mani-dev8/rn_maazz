import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WizardHeader = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wizard Progress</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressText}>{`${currentStep}/${totalSteps}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  progressBarContainer: {
    width: "80%",
    height: 10,
    backgroundColor: "#E0E0E0",
    marginTop: 5,
    marginBottom: 5,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2196F3",
  },
  progressText: {
    fontSize: 14,
  },
});

export default WizardHeader;
