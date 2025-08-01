import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { NavigationContainer } from "@react-navigation/native";
import Home from "./index";
import Liked from "./liked";
import Library from "./library";

// here we want slider navbar for top ...
// so for this we have to use default native tab navigator
const Tab = createMaterialTopTabNavigator();

export default function NestedTabsLayout() {
  return (
    // @ts-ignore
    // <NavigationContainer independent={true}>
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={Home} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
