import { StyleSheet, View } from "react-native";

export default function Divider() {
  return <View style={style.divider}></View>;
}

const style = StyleSheet.create({
  divider: {
    height: 1,
    width: "auto",
    backgroundColor: "#000",
    marginVertical: 5
  },
});
