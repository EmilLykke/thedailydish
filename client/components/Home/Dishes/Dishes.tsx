import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { images } from "../../../constants";
import { Dimensions } from "react-native";

import styles from "./Dishes.style";
import { useState } from "react";
type Props = {};


export default function Overview({}: Props) {

  const [newDish, setNewDish] = useState(1);
  const [dish, setDish] = useState(0);
  const [ball1, setBall1] = useState(1);
  const [ball2, setBall2] = useState(0);

  var width = Dimensions.get('window').width; //full width
  var height = Dimensions.get('window').height; //full height
  
  function handleChange(type: any){
    if(type == "new"){
      setNewDish(1);
      setDish(0);
      setBall1(1);
      setBall2(0);
    } else {
      setNewDish(0);
      setDish(1);
      setBall1(0);
      setBall2(1);
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
      </View>
      
    </View>
  );
}
