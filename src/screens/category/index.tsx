import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import Row from "../../components/SubTitleRow";
import RowTag from "../../components/RowTag";
import SubTitleRow from "../../components/SubTitleRow";

export default function Category() {
  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <View style={[style.mainCard, { backgroundColor: colors.card }]}>
        <SubTitleRow title="All Categories" />
        <FirstRow />
        <SecondRow />
        <ThirdRow />
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
