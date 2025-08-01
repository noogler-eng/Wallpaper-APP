import React, { useCallback, useRef, useMemo } from "react";
import { Text, StyleSheet, View, Image, Button, Pressable } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import Ionicons from "react-native-vector-icons/Ionicons";

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
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.sheetContent}>
        {image?.url && (
          <View
            style={{
              width: "100%",
              height: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 24,
              gap: 10,
              paddingTop: 10,
            }}
          >
            <Image
              source={{ uri: image.url }}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                borderRadius: 20,
              }}
            />
            <View style={styles.topbar}>
              <Ionicons
                name="close"
                size={24}
                onPress={onClose}
                style={{ color: "white" }}
              />
              <Ionicons
                name="share"
                size={24}
                onPress={() => {
                  console.log("Sharing image:", image.url);
                }}
                style={{ color: "white" }}
              />
            </View>

            {/* this is download button  */}
            <Pressable
              style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 8,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                width: "60%",
              }}
            >
              <Ionicons
                name="download"
                style={{
                  color: "white",
                }}
                size={20}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                onPress={() => {
                  console.log("Downloading image:", image.url);
                }}
              >
                {"download"}
              </Text>
            </Pressable>
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
  topbar: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingInline: 10,
    top: 0,
    left: 0,
  },
  sheetContent: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 20,
    paddingTop: 10,
  },
  sheetText: {
    fontSize: 18,
  },
});
