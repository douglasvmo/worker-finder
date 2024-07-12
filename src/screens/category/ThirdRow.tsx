import Eletronic from "../../../assets/icons/eletronic.svg";
import Shift from "../../../assets/icons/shift.svg";
import MenSalom from "../../../assets/icons/mensalon.svg";
import { View, StyleSheet } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { useNavigation } from "@react-navigation/native";
import routes from "../../commun/routes";

export const categories = [
  { caption: "Electronics", Icon: Eletronic, backgroundColor: "#FB9B9B" },
  { caption: "Shifting", Icon: Shift, backgroundColor: "#F8B0ED" },
  { caption: "Men's Salon", Icon: MenSalom, backgroundColor: "#AFC6FF" },
];

type TProps = {
  textColor?: string;
};

export default function ThirdRow({ textColor }: TProps) {
  const navigation = useNavigation();
  return (
    <View style={style.row}>
      {categories.map((it) => (
        <CategoryButton
          key={it.caption}
          title={it.caption}
          titleColor={textColor}
          backgroundColor={it.backgroundColor}
          onPress={() => navigation.navigate(routes.SERVICES as never)}
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
