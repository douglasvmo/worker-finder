import { PropsWithChildren } from "react";
import { StyleSheet, View, Text } from "react-native";
import RowTag from "./RowTag";

type TProps = {
  title: string;
};

export default function SubTitleRow(props: PropsWithChildren<TProps>) {
  return (
    <View style={style.row}>
      <RowTag />
      <Text style={style.title}>{props.title}</Text>
      <View style={style.wrapper}>{props.children}</View>
    </View>
  );
}

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
  },
  wrapper: {
    marginLeft: "auto"
  },
});
