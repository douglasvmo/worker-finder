import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

export default function Title(props: PropsWithChildren) {
  return <Text style={style.title}>{props.children}</Text>;
}

const style = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    marginBottom: 14
  },
});
