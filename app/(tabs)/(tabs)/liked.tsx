import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

// website uses react-dom
// app uses react-native to reder things
// view ~ div
// text ~ p
// this page will be rendered at app/index.tsx
// expo-router will automatically create a route for this file
export default function Liked() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Liked</Text>
    </View>
  );
}
