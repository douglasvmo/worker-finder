import { useTheme } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

type TProps = {
  textColor?: string;
};

export default function Title(props: PropsWithChildren<TProps>) {
  return (
    <Text style={[style.title, { color: props.textColor }]}>
      {props.children}
    </Text>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: "Inter-Bold",
    marginBottom: 14,
  },
});
