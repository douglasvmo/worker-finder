import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import SubTitleRow from "../../components/SubTitleRow";

export default function Category() {
  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <View style={[style.mainCard, { backgroundColor: colors.card }]}>
        <SubTitleRow title="All Categories" />
        <FirstRow textColor={colors.text} />
        <SecondRow textColor={colors.text} />
        <ThirdRow textColor={colors.text} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 7,
  },
  mainCard: {
    height: "94%",
    width: "94%",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});
