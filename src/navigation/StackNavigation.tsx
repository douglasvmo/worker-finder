import { createStackNavigator } from "@react-navigation/stack";
import routes from "../commun/routes";
import Category from "../screens/category";
import DrawerNavigation from "./DrawerNavigation";
import Services from "../screens/services";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.HOME}
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={routes.CATEGORY} component={Category} />
      <Stack.Screen name={routes.SERVICES} component={Services} />
    </Stack.Navigator>
  );
}
