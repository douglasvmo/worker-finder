import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from "../commun/routes";
import TabNavigation from "./TabNavigation";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name={routes.DRAWER_HOME} component={TabNavigation} />
    </Drawer.Navigator>
  );
}
