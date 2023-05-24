import { useCallback, useEffect, useState } from "react";

import { SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from "./index.style";
import TitleInput from "../../components/Add/TitleInput/TitleInput";
import ImageInput from "../../components/Add/ImageInput/ImageInput";
import IngredientsInput from "../../components/Add/IngredientsInput/IngredientsInput";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CookingStepsInput from "../../components/Add/CookingStepsInput/CookingStepsInput";
import SubmitButton from "../../components/Add/SubmitButton/SubmitButton";
import CommentInput from "../../components/Add/CommentInput/CommentInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import jwt_decode from "jwt-decode"; 

export default function Add() {
  const router = useRouter();

  // TITLE LOGIC
  const [titleInput, setTitleInput] = useState('');

  function handleSetTitleInput(title:string){
    setTitleInput(title);
  }

  // UPLOAD IMAGE LOGIC 
  // https://github.com/react-native-image-picker/react-native-image-picker
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


  // INGREDIENT LIST LOGIC 
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
  
  function handleIngredientsChange(ingredient:string, key:number){
    let targetIndex = ingredients.findIndex(item => item.key === key)
    let ingredientObj = {ingredient: ingredient}
    let targetObject = {...ingredients[targetIndex], ...ingredientObj}
    let newingredients = [...ingredients.slice(0, targetIndex), targetObject, ...ingredients.slice(targetIndex+ 1)]

    setIngredients(newingredients);

  }


  // COOKING STEPS LOGIC  
  const [steps, setSteps] = useState([{key: 0, step: ""}]);
  
  useEffect(()=>{
    steps.map((item)=>{
      if(item.key == steps.length-1 && item.step.length > 0){
        setSteps([
          ...steps,
          {
            key: item.key+1,
            step: ""
          }
        ])
      } else if(item.key == steps.length-2 && item.step.length < 1){
        let targetIndex = steps.findIndex(data => data.key === item.key+1);
        let newsteps = [...steps.slice(0, targetIndex)];
        setSteps(newsteps);
      }
    })
  },[steps])
  
  function handleStepsChange(step:string, key:number){
    let targetIndex = steps.findIndex(item => item.key === key)
    let stepObj = {step: step}
    let targetObject = {...steps[targetIndex], ...stepObj}
    let newsteps = [...steps.slice(0, targetIndex), targetObject, ...steps.slice(targetIndex+ 1)]

    setSteps(newsteps);

  }
  

  // COMMENT INPUT
  const [commentInput, setCommentInput] = useState('');

  function handleSetCommentInput(comment:string){
    setCommentInput(comment);
  }


 const temp_jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1pbCIsInVzZXJ1aWQiOiJiNTE2ZWEwZS1jMmJlLTQzYjEtYTFkZC04MTgxNzBiMzYyYzgiLCJpYXQiOjE2ODQ5NTU2OTMsImV4cCI6MTY4NDk1Njg5M30.T32qyWE7nQi7TeeX8K9fdn6fW6ZrZnjmwTeFvQKWTaE"

  // SUBMIT BUTTON
  async function handleSubmit(){
    const url = "http://192.168.86.213:5000/recipes/add"
  
    const config = {
      headers:{
        Authorization: "Bearer " + temp_jwt,
      }
    };

    const data = {
      useruid: JSON.parse(JSON.stringify(jwt_decode(temp_jwt))).useruid,
      title: titleInput,
      image: images?.assets[0].uri,
      ingredients: ingredients,
      cookingSteps: steps,
      comment: commentInput,
    }
    

    const result = await axios.post(url,data, config);
    console.log(result.data)    
    
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
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      {/* Title */}
      <TitleInput handleChange={handleSetTitleInput} text={titleInput}/>
      {/* Image - Square with dotted line and images svg in middle */}
      <ImageInput press={handlePress} uploaded={uploaded}/>
      <Image 
        style={styles(uploaded).image}
        source={{uri: images?.assets[0].uri}}
        />      
      {/* Ingredients - like a todo - NOTIONS todo */}
      <IngredientsInput handleChange={handleIngredientsChange} ingredients={ingredients}/>
      {/* Steps - like a todo - NOTIONS todo */}
      <CookingStepsInput handleChange={handleStepsChange} steps={steps}/>

      {/* Comment */}
      <CommentInput handleChange={handleSetCommentInput} text={commentInput} />

      {/* Save button */}
      <SubmitButton handleSubmit={handleSubmit}/>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
