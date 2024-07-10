import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export default function Row(props: PropsWithChildren) {
  return <View style={style.row}>{props.children}</View>;
}

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
});
