import Paint from "../../../assets/icons/paint.svg";
import Clean from "../../../assets/icons/clean.svg";
import Plumb from "../../../assets/icons/plumb.svg";
import { View, StyleSheet } from "react-native";
import CategoryButton from "../../components/CategoryButton";

export const categories = [
  { caption: "Painting", Icon: Paint, backgroundColor: "#B5EBCD" },
  { caption: "Cleaning", Icon: Clean, backgroundColor: "#FFD88D" },
  { caption: "Plumbing", Icon: Plumb, backgroundColor: "#CBEBA4" },
];

export default function SecondRow() {
  return (
    <View style={style.row}>
      {categories.map((it) => (
        <CategoryButton
          key={it.caption}
          title={it.caption}
          backgroundColor={it.backgroundColor}
          onPress={() => {}}
        >
          <it.Icon />
        </CategoryButton>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 7,
  },
});
