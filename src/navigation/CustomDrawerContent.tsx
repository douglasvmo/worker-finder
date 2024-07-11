import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SwitchToggle from "../components/SwitchToggle";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const { colors, dark, setDark } = useTheme();

  return (
    <View style={[style.drawer, { backgroundColor: colors.primary }]}>
      <View></View>
      <View style={[style.bottom]}>
        <SwitchToggle
          onPress={() => {
            setDark((prev) => !prev);
          }}
          value={dark}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  drawer: {
    flex: 1,
    justifyContent: "space-between",
  },
  top: {},
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
