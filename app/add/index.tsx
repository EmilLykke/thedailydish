import { useState } from "react";

import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native";
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
      {/* Title */}
      {/* Image - Square with dotted line and images svg in middle */}
      {/* Ingredients - like a todo - NOTIONS todo */}
      {/* Steps - like a todo - NOTIONS todo */}
      {/* Save button */}


      <Text>ADD</Text>
    </SafeAreaView>
  );
}
