import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TopComponent from "./TopComponent";

export default function Home() {
  return (
    <View style={styles.container}>
      <TopComponent name="Ashfak" title="What you are looking for today" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
