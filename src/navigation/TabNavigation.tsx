import routes from "../commun/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.TAB_HOME}
        component={Home}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
