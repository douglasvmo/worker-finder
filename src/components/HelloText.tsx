import { useTheme } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { Text, StyleSheet } from "react-native";

type TProps = {
  name: string;
};

export default function HelloText({ name }: TProps) {
  const { colors } = useTheme();

  return (
    <Text style={[style.name, { color: colors.border }]}>
      HELLO {name.toUpperCase()} 👋
    </Text>
  );
}

const style = StyleSheet.create({
  name: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },
});
