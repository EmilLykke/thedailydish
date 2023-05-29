import { useEffect, useState } from "react";

import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from "./index.style";
import axios from "axios";
import jwt_decode from "jwt-decode"; 
import RecipeListView from "../../components/Recipes/RecipeListView/RecipeListView";
import { getAccessToken } from "../../constants/accessToken";

export default function Recipes() {
  const router = useRouter();

  const [recipes, setRecipes] = useState([])
  const [token, setToken] = useState<string>()
  const [t, setT] = useState<number>(1)

  const url = "http://192.168.86.213:5000/recipes/"


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
        axios.post(url,data, config).then(data => setRecipes(data.data));
      } else {
        setT(t*-1)
      }
    }


    useEffect(()=>{
      getAccessToken().then(data=>setToken(data)).then(()=>getRecipe(token))
    },[t])

  function handleNavi(id:string){
    router.push("/recipes/"+id.toString())
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
      <ScrollView style={styles().scrollView}>
        <View style={styles().recipeListContainer}>
        {recipes.map((item, index)=>(<RecipeListView key={index} title={item.title} image={item.image} id={item._id} handlePress={handleNavi}/>))}
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}
