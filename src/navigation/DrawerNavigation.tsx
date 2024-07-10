import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from "../commun/routes";
import TabNavigation from "./TabNavigation";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.DRAWER_HOME} component={TabNavigation} />
    </Drawer.Navigator>
  );
}
