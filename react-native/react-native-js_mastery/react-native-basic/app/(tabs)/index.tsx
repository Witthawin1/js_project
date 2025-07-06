import { useEffect } from "react";
import { Link } from "expo-router";
import { Text, View, Platform } from "react-native";

export default function Index() {
  useEffect(() => {
    if (Platform.OS === "web") {
      document.title = "MovieFlix";
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-5xl text-dark-200">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link
        href={{
          pathname: "/movie/[id]",
          params: { id: "avengers" },
        }}
      >
        Avenger movies
      </Link>
    </View>
  );
}
