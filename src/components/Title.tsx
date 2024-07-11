import { useTheme } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

export default function Title(props: PropsWithChildren) {
  const { colors } = useTheme();
  return (
    <Text style={[style.title, { color: colors.text }]}>{props.children}</Text>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: "Inter-Bold",
    marginBottom: 14,
  },
});
