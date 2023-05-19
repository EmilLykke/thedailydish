import { useState } from "react";

import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from "./index.style";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Text>Fedt man spa</Text>
    </SafeAreaView>
  );
}
