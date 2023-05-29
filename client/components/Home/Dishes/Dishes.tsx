import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { images } from "../../../constants";
import { Dimensions } from "react-native";
import axios from "axios";
import jwt_decode from "jwt-decode"; 
import { getAccessToken } from "../../../constants/accessToken";

import styles from "./Dishes.style";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import RecipeListView from "../../Recipes/RecipeListView/RecipeListView";
type Props = {};


export default function Overview({}: Props) {
  const router = useRouter();

  const [newDish, setNewDish] = useState(1);
  const [dish, setDish] = useState(0);
  const [ball1, setBall1] = useState(1);
  const [ball2, setBall2] = useState(0);

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
        axios.post(url,data, config).then(data => setRecipes(data.data.slice(0, 4))).catch(err => handleError(err.response.status));
      } else {
        setT(t*-1)
      }
    }

    function handleError(error: number){
      if(error === 403){
        setError(<View style={styles(1).errorBox}><Text style={styles().errorText}>An error occured</Text></View>)
      }
    }

    useEffect(()=>{
      getAccessToken().then(data=>setToken(data)).then(()=>getRecipe(token))
    },[t])
  


  const [dishes, setDishes] = useState<any>();
  const [error, setError] = useState<any>();

  
  function handleNavi(id:string){
    router.push("/recipes/"+id.toString())
  }

  function handleChange(type: any){
    if(type == "new"){
      setNewDish(1);
      setDish(0);
      setBall1(1);
      setBall2(0);
      setDishes(<Text>Coming soon</Text>)
    } else {
      setNewDish(0);
      setDish(1);
      setBall1(0);
      setBall2(1);
      setDishes(recipes.map((item, index)=>(<RecipeListView key={index} title={item.title} image={item.image} id={item._id} handlePress={handleNavi}/>)))
    }
  }
  
  return (
    <View style={styles().container}>
      <View style={styles().headContainer}>
        <View style={styles().headerContainer}>
          <TouchableOpacity onPress={()=>handleChange("new")} style={styles().ballContainer}>
            <Text style={styles(newDish).headers}>New Dishes</Text>
            <View style={styles(1,ball1).ballView}></View>
            </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleChange("dish")} style={styles().ballContainer}>
            <Text style={styles(dish).headers}>Dishes</Text>
            <View style={styles(0,ball2).ballView}></View>
            </TouchableOpacity>
        </View>
        <View style={styles().dishesContainer}>
          {dishes}
        </View>
      </View>
      {error !== undefined ? error : <Text></Text>}
      
    </View>
  );
}
