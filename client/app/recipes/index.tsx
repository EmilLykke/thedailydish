import { useEffect, useState } from "react";

import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from "./index.style";
import axios from "axios";
import jwt_decode from "jwt-decode"; 
import RecipeListView from "../../components/Recipes/RecipeListView/RecipeListView";

export default function Recipes() {
  const router = useRouter();

  const [recipes, setRecipes] = useState([])

  const temp_jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1pbCIsInVzZXJ1aWQiOiJiNTE2ZWEwZS1jMmJlLTQzYjEtYTFkZC04MTgxNzBiMzYyYzgiLCJpYXQiOjE2ODQ5NTQ0NzEsImV4cCI6MTY4NDk1NTY3MX0.gLqFl7uyT06ZjxwKYJrjEQOAs5p0uxVI5XbeKq74QDU"
  const url = "http://192.168.86.213:5000/recipes/"
  
    const config = {
      headers:{
        Authorization: "Bearer " + temp_jwt,
      }
    };

    const data = {
      useruid: JSON.parse(JSON.stringify(jwt_decode(temp_jwt))).useruid,
    }
    

    

  useEffect(() => {
    axios.post(url,data, config).then(data => setRecipes(data.data));
  },[])
  

  function handleNavi(id:string){
    router.push("/recipes/"+id);
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
      <View style={styles().recipeListContainer}>
        {recipes.map((item, index)=>(<RecipeListView key={index} title={item.title} image={item.image} id={item._id} handlePress={handleNavi}/>))}
      </View>
      
    </SafeAreaView>
  );
}
