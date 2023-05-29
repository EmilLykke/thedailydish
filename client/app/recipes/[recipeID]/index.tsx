import { useEffect, useState } from "react";

import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import { Stack, useNavigation, useRouter, useSearchParams } from "expo-router";
import { useRoute } from '@react-navigation/native';
import styles from "./index.style";
import axios from "axios";
import jwt_decode from "jwt-decode"; 
import * as SplashScreen from "expo-splash-screen";
import { getAccessToken } from "../../../constants/accessToken";

SplashScreen.preventAutoHideAsync();

type Recipe = {
  _id:string,
  title:string,
  useruid:string,
  image:string,
  ingredients: Array<{key: number, ingredient: string}>,
  steps: Array<{key: number, step: string}>, 
  comment:string, 
}

export default function Recipes() {
  const {recipeID} = useSearchParams();
  
  const [url, setUrl] = useState("http://192.168.86.213:5000/recipes/")
  const [recipe, setRecipe] = useState<Recipe>()
  const [token, setToken] = useState<string>()

    
    useEffect(()=>{
      if(recipeID !== undefined){
        setUrl("http://192.168.86.213:5000/recipes/"+recipeID);
      } 
    },[recipeID])


    const [t, setT] = useState<number>(1)  
  
      function getRecipe(token: string){
        if(token !== undefined){
          const data = {
            useruid: JSON.parse(JSON.stringify(jwt_decode(token))).useruid,
          }
          const config = {
            headers:{
              Authorization: "Bearer " + token,
            }
          }
          axios.post(url,data, config).then(data => setRecipe(data.data));
        } else {
          setT(t*-1)
        }
      }
  


    useEffect(() => {
      if(recipeID !== undefined){
        getAccessToken().then(data=>setToken(data)).then(()=>getRecipe(token))
      }
    },[url, t])
  
  
    
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
        
      />
      <View >
        <Image style={{width: 100, height: 100}} source={{uri: recipe?.image}} />
        <Text>{recipe?.title}</Text>
        <Text>{recipe?.comment}</Text>
        <Text>{recipe?.comment}</Text>
      </View>
      
    </SafeAreaView>
  );
}
