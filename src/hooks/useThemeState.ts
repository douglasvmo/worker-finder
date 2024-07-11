import { Theme } from "@react-navigation/native";
import React from "react";
import { Appearance } from "react-native";

export default function useThemeState() {
  const schemeName = Appearance.getColorScheme();
  const [dark, setDark] = React.useState(schemeName === "dark");

  return {
    dark,
    colors: {
      primary: dark ? "#18202E" : "#6759FF",
      background: dark ? "#29303C" : "#FFFFFF26",
      card: dark ? "#18202E" : "#FFFFFF",
      text: dark ? "#fff" : "#000",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
    setDark,
  };
}
