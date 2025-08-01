import { Text, View } from "react-native";
import SplitView from "@/components/SplitView";
import { UseWallpaper } from "@/hooks/useWallpaper";
import { SafeAreaView } from "react-native-safe-area-context";

// website uses react-dom
// app uses react-native to reder things
// view ~ div
// text ~ p
// this page will be rendered at app/index.tsx
// expo-router will automatically create a route for this file
export default function Library() {
  const wallpapers = UseWallpaper();

  console.log("Library wallpapers", wallpapers);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 12,
          display: "flex",
          justifyContent: "center",
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        Library
      </Text>{" "}
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <SplitView wallpapers={wallpapers} />
      </View>
    </SafeAreaView>
  );
}
