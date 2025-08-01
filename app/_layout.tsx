import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// here the order of the screen matters
// as we are moving the tabs first the it goes inside that first
// if first screen was setting then home page is setting....
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="setting" options={{ headerTitle: "Setting" }} />
        </Stack>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
