import { Wallpaper } from "@/hooks/useWallpaper";
import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import ImageCard from "./ImageCard";

export default function SplitView({
  wallpapers,
  setSelectedWallpaper = (x: any) => {},
}: {
  wallpapers: Wallpaper[];
  setSelectedWallpaper?: any;
}) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
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
        contentContainerStyle={{ padding: 8 }}
      />
    </View>
  );
}
