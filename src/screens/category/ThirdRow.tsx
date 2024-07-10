import Eletronic from "../../../assets/icons/eletronic.svg";
import Shift from "../../../assets/icons/shift.svg";
import MenSalom from "../../../assets/icons/mensalon.svg";
import { View, StyleSheet } from "react-native";
import CategoryButton from "../../components/CategoryButton";

export const categories = [
  { caption: "Electronics", Icon: Eletronic, backgroundColor: "#FB9B9B" },
  { caption: "Shifting", Icon: Shift, backgroundColor: "#F8B0ED" },
  { caption: "Men's Salon", Icon: MenSalom, backgroundColor: "#AFC6FF" },
];

export default function ThirdRow() {
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
