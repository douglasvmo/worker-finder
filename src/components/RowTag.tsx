import { StyleSheet, View } from "react-native";

export default function RowTag() {
  return <View style={style.tag}></View>;
}

const style = StyleSheet.create({
  tag: {
    backgroundColor: "#CABDFF",
    borderRadius: 4,
    margin: 4,
    height: 20,
    width: 4,
  },
});
