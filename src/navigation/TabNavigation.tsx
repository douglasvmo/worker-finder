import routes from "../commun/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";

import HomeIcon from "../../assets/icons/home.svg";
import DocIcon from "../../assets/icons/doc.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import MessageIcon from "../../assets/icons/message.svg";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.TAB_HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name={routes.TAB_DOC}
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: DocIcon,
        }}
      />
      <Tab.Screen
        name={routes.TAB_NOTIFICATION}
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: NotificationIcon,
        }}
      />
      <Tab.Screen
        name={routes.TAB_MESSAGE}
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: MessageIcon,
        }}
      />
    </Tab.Navigator>
  );
}
