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


  const [ingredients, setIngredients] = useState([{key: 0, ingredient: ""}]);
  
  useEffect(()=>{
    ingredients.map((item)=>{
      if(item.key == ingredients.length-1 && item.ingredient.length > 0){
        setIngredients([
          ...ingredients,
          {
            key: item.key+1,
            ingredient: ""
          }
        ])
      } else if(item.key == ingredients.length-2 && item.ingredient.length < 1){
        let targetIndex = ingredients.findIndex(data => data.key === item.key+1);
        let newingredients = [...ingredients.slice(0, targetIndex)];
        setIngredients(newingredients);
      }
    })
  },[ingredients])
  
  function handleChange(ingredient:string, key:number){
    let targetIndex = ingredients.findIndex(item => item.key === key)
    let ingredientObj = {ingredient: ingredient}
    let targetObject = {...ingredients[targetIndex], ...ingredientObj}
    let newingredients = [...ingredients.slice(0, targetIndex), targetObject, ...ingredients.slice(targetIndex+ 1)]

    setIngredients(newingredients);

  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
        
      />
       <ScrollView showsVerticalScrollIndicator={false}>
      {/* Title */}
      <TitleInput />
      {/* Image - Square with dotted line and images svg in middle */}
      <ImageInput press={handlePress} uploaded={uploaded}/>
      <Image 
        style={{width: 300, height: 150, resizeMode: "contain", }}
        source={{uri: images?.assets[0].uri}}
        />      
      {/* Ingredients - like a todo - NOTIONS todo */}
      <IngredientsInput handleChange={handleChange} ingredients={ingredients}/>
      {/* Steps - like a todo - NOTIONS todo */}
      {/* Save button */}

      </ScrollView>
    </SafeAreaView>
  );
}
