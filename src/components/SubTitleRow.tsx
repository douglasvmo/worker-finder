import { PropsWithChildren } from "react";
import { StyleSheet, View, Text } from "react-native";
import RowTag from "./RowTag";
import { useTheme } from "@react-navigation/native";

type TProps = {
  title: string;
};

export default function SubTitleRow(props: PropsWithChildren<TProps>) {
  const { colors } = useTheme();
  return (
    <View style={style.row}>
      <RowTag />
      <Text style={[style.title, { color: colors.text }]}>{props.title}</Text>
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
    marginLeft: "auto",
  },
});
