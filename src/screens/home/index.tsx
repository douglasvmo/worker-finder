import { StyleSheet, View } from "react-native";
import TopComponent from "./TopComponent";
import OfferComponent from "./OfferComponent";

export default function Home() {
  return (
    <View style={styles.container}>
      <TopComponent name="Ashfak" title="What you are looking for today" />
      <OfferComponent />
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
