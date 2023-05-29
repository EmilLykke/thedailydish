import { View, Text, ImageBackground,TouchableOpacity } from "react-native"
import styles from "./RecipeListView.style"
import Corner from "../../../assets/icons/svgs/Corner"

type Props = {
    title: string,
    image: {uri: string},
    handlePress: (id:string)=>void,
    id: string,
}

export default function RecipeListView({title, image, handlePress, id}: Props) {
  return (
    
    <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress(id)}>
    <ImageBackground
      style={styles.image}
      source={image}
      resizeMode="cover"
    >

      <View style={styles.imageView}>
        <Text style={styles.imageText}>{title}</Text>
      </View>
      
    </ImageBackground>
  </TouchableOpacity>
  )
}