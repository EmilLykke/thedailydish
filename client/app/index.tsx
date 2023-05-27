import { useEffect, useState } from "react";

import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import LeftHead from "../components/Home/LeftHead/LeftHead";
import Overview from "../components/Home/Overview/Overview";
import styles from "./index.style";
import Dishes from "../components/Home/Dishes/Dishes";
import RightHead from "../components/Home/RightHead/RightHead";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff"}}>
      <Stack.Screen
      
        options={{
          headerStyle: { 
            backgroundColor: "#ffffff",
          },
          headerShadowVisible: false,
          headerLeft: () => <LeftHead />,
          headerRight: () => <RightHead />,
          headerTitle: "",
        }}
        
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().introContainer}>
          <Text style={styles(1).intro}>Dish</Text>
          <Text style={styles().intro}>Market</Text>
        </View>

        {/* Overview section */}
        <Overview />
        
        {/* Dishes section */}
        <Dishes />
        <Text>Coming soon</Text>

      </ScrollView>
    </SafeAreaView>
  );
}
