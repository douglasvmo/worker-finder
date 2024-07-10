import { ScrollView, StyleSheet, View } from "react-native";
import TopComponent from "./TopComponent";
import OfferComponent from "./OfferComponent";
import CategoriesComponent from "./CategoriesComponent";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <TopComponent name="Ashfak" title="What you are looking for today" />
      <OfferComponent />
      <CategoriesComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
