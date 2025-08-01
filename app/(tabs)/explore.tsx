import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, Text, View } from "react-native";
// @ts-ignore
import headerImage from "@/assets/images/headerImage.png";

import { UseWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import ImageCard from "@/components/ImageCard";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import BottomSheetComponent from "@/components/BottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";

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

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: 8,
            }}
          >
            <FlatList
              data={wallpapers}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <ImageCard
                  wallpaperImg={item}
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
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
