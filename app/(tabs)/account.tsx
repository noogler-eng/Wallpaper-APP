import BottomSheetComponent from "@/components/BottomSheet";
import { useState } from "react";
import { Text, View, Button } from "react-native";

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>account</Text>
      <Button
        title="Open Bottom Sheet"
        onPress={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <BottomSheetComponent
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </View>
  );
}
