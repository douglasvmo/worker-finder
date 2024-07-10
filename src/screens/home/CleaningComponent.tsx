import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../../components/Card";
import Row from "../../components/Row";
import Button from "../../components/Button";
import { useTheme } from "@react-navigation/native";

export function CleaningComponent() {
  const { colors } = useTheme();
  return (
    <Card>
      <Row>
        <Text style={style.title}>Cleaning Services</Text>
        <Button
          title="See All"
          textColor={colors.text}
          style={{ borderWidth: 1, borderColor: colors.border }}
        />
      </Row>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={style.stretchWrapper}>
          <Image
            style={style.stretch}
            source={require("../../../assets/img/clean1.png")}
          />
          <Text style={style.taskText}>Home Cleaning</Text>
        </View>
        <View style={style.stretchWrapper}>
          <Image
            style={style.stretch}
            source={require("../../../assets/img/clean2.png")}
          />
          <Text style={style.taskText}>Carpet Cleaning</Text>
        </View>
      </ScrollView>
    </Card>
  );
}

const style = StyleSheet.create({
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
  },
  stretchWrapper: {
    margin: 8,
  },
  stretch: {
    width: 140,
    height: 155,
    resizeMode: "stretch",
    borderRadius: 10,
    marginBottom: 8
  },
  taskText: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
    textAlign: "center"
  },
});
