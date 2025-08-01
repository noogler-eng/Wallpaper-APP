import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, Text, View } from "react-native";
// @ts-ignore
import headerImage from "@/assets/images/headerImage.png";

import { UseWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { useState } from "react";
import BottomSheetComponent from "@/components/BottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";
import SplitView from "@/components/SplitView";

export default function Explore() {
  const wallpapers = UseWallpaper();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ParallaxScrollView
        headerImage={
          <Image
            source={headerImage}
            style={{
              flex: 1,
              height: 300,
              width: "100%",
              resizeMode: "cover",
            }}
          />
        }
        headerBackgroundColor={{ dark: "#fff", light: "#fff" }}
      >
        <View style={{ padding: 16, backgroundColor: "white" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
            Explore Wallpapers
          </Text>
          <SplitView
            wallpapers={wallpapers}
            setSelectedWallpaper={setSelectedWallpaper}
          />
        </View>
      </ParallaxScrollView>
      {selectedWallpaper && (
        <BottomSheetComponent
          image={selectedWallpaper}
          onClose={() => {
            setSelectedWallpaper(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}
