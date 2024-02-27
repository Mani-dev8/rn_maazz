import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { theme } from "../assets/theme";
import { LeftChevronIcon } from "../assets/Icon";
import PrimaryButton from "../components/PrimaryButton";
export default function CalenderScreen() {
  const [selected, setSelected] = useState("");
  return (
    <View style={{ alignItems: "center" }}>
      <StatusBar backgroundColor={"white"} />
      <Calendar
        style={{ width: 320, marginBottom: 30 }}
        theme={{
          dotColor: theme.colors.primaryRed,
          selectedDayBackgroundColor: theme.colors.primaryRed,
          todayTextColor: "#A7202460",
          arrowColor: theme.colors.primaryRed,
        }}
        renderArrow={(direction) => {
          if (direction === "left") {
            return <LeftChevronIcon width={10} height={10} />;
          } else {
            return (
              <LeftChevronIcon
                width={10}
                height={10}
                style={{ transform: [{ rotate: "180deg" }] }}
              />
            );
          }
        }}
        hideDayNames
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        renderHeader={(date) => {
          const currentDate = new Date(date);
          const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          const month = monthNames[currentDate.getMonth()];
          return (
            <View>
              <Text style={{ color: "black", textAlign: "center" }}>
                Birthday
              </Text>
              <Text
                style={{
                  color: theme.colors.primaryRed,
                  textAlign: "center",
                  fontSize: 34,
                  fontWeight: "bold",
                }}
              >
                {date.getFullYear()}
              </Text>
              <Text
                style={{ color: theme.colors.primaryRed, textAlign: "center" }}
              >
                {month}
              </Text>
            </View>
          );
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
      <PrimaryButton title="Save" />
    </View>
  );
}
