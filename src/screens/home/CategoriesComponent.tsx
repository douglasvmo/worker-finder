import Card from "../../components/Card";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import routes from "../../commun/routes";

import Air from "../../../assets/icons/air.svg";
import Beauty from "../../../assets/icons/beauty.svg";
import Appliance from "../../../assets/icons/appliance.svg";
import Icon from "react-native-vector-icons/AntDesign";
import CategoryButton from "../../components/CategoryButton";

const categories = [
  {
    caption: "AC Repair",
    Icon: Air,
    backgroundColor: "#FFBC99",
    route: routes.CATEGORY,
  },
  {
    caption: "Beuaty",
    Icon: Beauty,
    backgroundColor: "#CABDFF",
    route: routes.CATEGORY,
  },
  {
    caption: "Appliance",
    Icon: Appliance,
    backgroundColor: "#B1E5FC",
    route: routes.CATEGORY,
  },
];

export default function CategoriesComponent() {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Card>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((it) => (
          <CategoryButton
            key={it.caption}
            title={it.caption}
            titleColor={colors.text}
            onPress={() => navigation.navigate(it.route as never)}
            backgroundColor={it.backgroundColor}
            borderColor={it.backgroundColor}
          >
            <it.Icon width={40} />
          </CategoryButton>
        ))}

        <CategoryButton
          title="See All"
          titleColor={colors.text}
          onPress={() => navigation.navigate(routes.CATEGORY as never)}
          backgroundColor={colors.background}
          borderColor={colors.border}
        >
          <Icon name="arrowright" size={32} color={colors.text} />
        </CategoryButton>
      </ScrollView>
    </Card>
  );
}
