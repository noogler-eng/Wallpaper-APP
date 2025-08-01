import { Wallpaper } from "@/hooks/useWallpaper";
import { Image, View, StyleSheet, Pressable } from "react-native";

export default function ImageCard({
  wallpaperImg,
  onPress,
}: {
  wallpaperImg: Wallpaper;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={{ flex: 1, margin: 4 }}>
        <Image
          source={{ uri: wallpaperImg.url }}
          style={styles.image}
          height={wallpaperImg.height}
          width={wallpaperImg.width}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
});
