import { useTheme } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props: PropsWithChildren) {
  const { colors } = useTheme();
  return (
    <View style={[style.card, { backgroundColor: colors.card }]}>
      {props.children}
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});
