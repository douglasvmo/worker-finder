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
          <TouchableOpacity
            style={style.item}
            key={it.caption}
            onPress={() => navigation.navigate(it.route as never)}
          >
            <View
              style={[
                style.iconWeaper,
                { backgroundColor: it.backgroundColor },
              ]}
            >
              <it.Icon height={40} />
            </View>
            <Text>{it.caption}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={style.item}
          onPress={() => navigation.navigate(routes.CATEGORY as never)}
        >
          <View
            style={[
              style.iconWeaper,
              {
                borderColor: colors.border,
                backgroundColor: colors.background,
              },
            ]}
          >
            <Icon name="arrowright" size={32} />
          </View>
          <Text>See All</Text>
        </TouchableOpacity>
      </ScrollView>
    </Card>
  );
}

const style = StyleSheet.create({
  item: {
    marginHorizontal: 10,
  },

  iconWeaper: {
    height: 58,
    width: 58,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 15,
  },
});
