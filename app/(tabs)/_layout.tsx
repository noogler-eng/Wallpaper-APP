import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

// name represent the location of the file
// tabBarActiveTintColor represents the color of the active tab
// using tabs so now we dont need to use the Stack component,
// slot is not needed here
export default function TabsLayout() {
  return (
      <View style={{ flex: 1 }}>
        <Tabs screenOptions={{ tabBarActiveTintColor: "red" }}>
          <Tabs.Screen
            name="(tabs)"
            options={{ title: "For You", headerShown: false }}
          />
          <Tabs.Screen
            name="account"
            options={{ title: "Account", headerShown: false }}
          />
          <Tabs.Screen
            name="explore"
            options={{ title: "Explore", headerShown: false }}
          />
        </Tabs>
      </View>
  );
}
