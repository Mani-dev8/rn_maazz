// WizardScreen4MultiSelect.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // You may need to install the @expo/vector-icons package

const options = [
  { name: "Photography", icon: "camera" },
  { name: "Shopping", icon: "cart" },
  { name: "Karaoke", icon: "musical-notes" },
  { name: "Yoga", icon: "fitness" },
  { name: "Cooking", icon: "restaurant" },
  { name: "Tennis", icon: "tennisball" },
  { name: "Running", icon: "walk" },
  { name: "Swimming", icon: "water" },
  { name: "Art", icon: "brush" },
  { name: "Traveling", icon: "airplane" },
  { name: "Extreme", icon: "flame" },
  { name: "Music", icon: "musical-note" },
  { name: "Drink", icon: "wine" },
  { name: "Video games", icon: "game-controller" },
];

const WizardScreen4MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    const index = selectedOptions.indexOf(option);
    if (index !== -1) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        selectedOptions.includes(item) && styles.selectedOption,
      ]}
      onPress={() => toggleOption(item)}
    >
      <Ionicons
        name={item.icon}
        size={24}
        color={selectedOptions.includes(item) ? "white" : "red"}
      />
      <Text
        style={[
          styles.optionText,
          selectedOptions.includes(item) && styles.selectedOptionText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={options}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  optionContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: "50%",
  },
  selectedOption: {
    backgroundColor: "red",
  },
  optionText: {
    marginLeft: 10,
    color: "black",
  },
  selectedOptionText: {
    color: "white",
  },
});

export default WizardScreen4MultiSelect;
