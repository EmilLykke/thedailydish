import { View, Text, ImageBackground,TouchableOpacity } from "react-native"
import styles from "./RecipeListView.style"
import {useWindowDimensions} from 'react-native';


type Props = {
    title: string,
    image: string,
    handlePress: (id:string)=>void,
    id: string,
}

export default function RecipeListView({title, image, handlePress, id}: Props) {

  const {height, width} = useWindowDimensions();
  // console.log(Math.floor(width))
  return (
    
    <TouchableOpacity style={styles(width).imageContainer} onPress={() => handlePress(id)}>
    <ImageBackground
      style={styles().image}
      source={{uri: image}}
      resizeMode="cover"
    >
    <View style={styles().imageView}>
        <Text style={styles().imageText}>{title}</Text>
    </View>

    </ImageBackground> 
    
  </TouchableOpacity>
  )
}