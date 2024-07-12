import Paint from "../../../assets/icons/paint.svg";
import Clean from "../../../assets/icons/clean.svg";
import Plumb from "../../../assets/icons/plumb.svg";
import { View, StyleSheet } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { useNavigation } from "@react-navigation/native";
import routes from "../../commun/routes";

export const categories = [
  { caption: "Painting", Icon: Paint, backgroundColor: "#B5EBCD" },
  { caption: "Cleaning", Icon: Clean, backgroundColor: "#FFD88D" },
  { caption: "Plumbing", Icon: Plumb, backgroundColor: "#CBEBA4" },
];

type TProps = {
  textColor?: string;
};

export default function SecondRow({ textColor }: TProps) {
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
