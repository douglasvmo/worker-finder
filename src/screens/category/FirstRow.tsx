import Air from "../../../assets/icons/air.svg";
import Beauty from "../../../assets/icons/beauty.svg";
import Appliance from "../../../assets/icons/appliance.svg";
import { View, StyleSheet } from "react-native";
import CategoryButton from "../../components/CategoryButton";

export const categories = [
  { caption: "AC Repair", Icon: Air, backgroundColor: "#FFBC99" },
  { caption: "Beuaty", Icon: Beauty, backgroundColor: "#CABDFF" },
  { caption: "Appliance", Icon: Appliance, backgroundColor: "#B1E5FC" },
];

type TProps = {
  textColor?: string;
};

export default function FirstRow({ textColor }: TProps) {
  return (
    <View style={style.row}>
      {categories.map((it) => (
        <CategoryButton
          key={it.caption}
          title={it.caption}
          titleColor={textColor}
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
