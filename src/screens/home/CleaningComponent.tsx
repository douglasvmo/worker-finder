import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../../components/Card";
import Row from "../../components/SubTitleRow";
import Button from "../../components/Button";
import { useTheme } from "@react-navigation/native";
import RowTag from "../../components/RowTag";
import SubTitleRow from "../../components/SubTitleRow";

export function CleaningComponent() {
  const { colors } = useTheme();
  return (
    <Card>
      <SubTitleRow title="Cleaning Services">
        <Button
          title="See All"
          textColor={colors.text}
          style={{ borderWidth: 1, borderColor: colors.border }}
        />
      </SubTitleRow>

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
  stretchWrapper: {
    margin: 8,
  },
  stretch: {
    width: 140,
    height: 155,
    resizeMode: "stretch",
    borderRadius: 10,
    marginBottom: 8,
  },
  taskText: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
    textAlign: "center",
  },
});
