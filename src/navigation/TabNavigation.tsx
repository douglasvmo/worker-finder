import routes from "../commun/routes";
import Category from "../screens/category";
import Home from "../screens/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.CATEGORY} component={Category} />
    </Tab.Navigator>
  );
}
