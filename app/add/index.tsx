import { useCallback, useEffect, useState } from "react";

import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from "./index.style";
import TitleInput from "../../components/Add/TitleInput/TitleInput";
import ImageInput from "../../components/Add/ImageInput/ImageInput";
import IngredientsInput from "../../components/Add/IngredientsInput/IngredientsInput";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Add() {
  const router = useRouter();
  const [images, setImages] = useState<any>(null);
  const [uploaded, setUploaded] = useState<number>(1);

  useEffect(()=>{
    if(images!=null){
      setUploaded(0);
    }
  }, [images])

  const handlePress = useCallback(() =>{
    launchImageLibrary({mediaType: "photo"}, setImages);
  },[])
  
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
      <TitleInput />
      {/* Image - Square with dotted line and images svg in middle */}
      <ImageInput press={handlePress} uploaded={uploaded}/>
      <Image 
        style={{width: 300, height: 150, resizeMode: "contain", }}
        source={{uri: images?.assets[0].uri}}
        />      
      {/* Ingredients - like a todo - NOTIONS todo */}
      <IngredientsInput />
      {/* Steps - like a todo - NOTIONS todo */}
      {/* Save button */}


    </SafeAreaView>
  );
}
