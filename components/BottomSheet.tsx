import React, { useCallback, useRef, useMemo } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";

export default function BottomSheetScreen({
  onClose,
  image,
}: {
  onClose: () => void;
  image?: Wallpaper;
}) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("Sheet changed to index:", index);
  }, []);

  console.log("Image URL:", image?.url);

  return (
    <BottomSheet
      onClose={onClose}
      ref={bottomSheetRef}
      index={1}
      snapPoints={["95%"]}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      // disable the handle indicator
      handleIndicatorStyle={{ height: 0 }}
    >
      <BottomSheetView style={styles.sheetContent}>
        {image?.url && (
          <View
            style={{
              width: "100%",
              height: 600,
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              padding: 20,
            }}
          >
            <Image
              source={{ uri: image.url }}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                borderRadius: 8,
              }}
            />
            <Button
              title={"download image"}
              onPress={() => {
                console.log("Downloading image:", image.url);
              }}
            />
          </View>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    width: "100%",
  },
  backgroundText: {
    fontSize: 24,
    textAlign: "center",
    width: "100%",
  },
  sheetContent: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  sheetText: {
    fontSize: 18,
  },
});
