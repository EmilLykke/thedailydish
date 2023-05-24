import { useEffect, useState } from "react";

import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Stack, useNavigation, useRouter } from "expo-router";
import { useRoute } from '@react-navigation/native';
import styles from "./index.style";
import axios from "axios";
import jwt_decode from "jwt-decode"; 

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
  const route = useNavigation();
  console.log(route)
  const [url, setUrl] = useState("http://192.168.86.213:5000/recipes/")
  const [recipe, setRecipe] = useState<Recipe>()
  const temp_jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1pbCIsInVzZXJ1aWQiOiJiNTE2ZWEwZS1jMmJlLTQzYjEtYTFkZC04MTgxNzBiMzYyYzgiLCJpYXQiOjE2ODQ5NTY5NDIsImV4cCI6MTY4NDk1ODE0Mn0.TIB4M0MQPf4oWYa1iVAE0DtiIDvbw4PBbMS_VpGaLDE"
  
    const config = {
      headers:{
        Authorization: "Bearer " + temp_jwt,
      }
    };

    const data = {
      useruid: JSON.parse(JSON.stringify(jwt_decode(temp_jwt))).useruid,
    }
    
  // useEffect(() => {
  //   if(route.path != undefined){
  //     setUrl("http://192.168.86.213:5000/recipes/"+route.path?.toString().split("recipes/")[1]);
  //   }
  //   else{
  //     console.log("hej")
  //   }
  // },[])
    
  // useEffect(() => {
  //   if(url !== "http://192.168.86.213:5000/recipes/"){
  //     axios.post(url,data,config).then(data => setRecipe(data.data));
  //   }
    
  // },[url])
  
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <View >
       <Text>{recipe?.title}</Text>
       <Text>{recipe?.comment}</Text>
       <Text>{recipe?.comment}</Text>
      </View>
      
    </SafeAreaView>
  );
}
