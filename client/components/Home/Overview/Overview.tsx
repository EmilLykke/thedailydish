import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import { images } from "../../../constants";
import styles from "./Overview.style";
import Arrow from "../../../assets/icons/svgs/Arrow";
type Props = {};

export default function Overview({}: Props) {


  const router = useRouter();

  function handleNavi(){
    router.push("/recipes");
  }

  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.imageContainer} onPress={handleNavi}>
        <ImageBackground
          style={styles.image}
          source={images.pizza}
          resizeMode="cover"
        >
           
          <View style={styles.imageView}>
            <Text style={styles.imageText}>Overview</Text>
            <View style={styles.arrowView}>
              <Arrow />
            </View>
          </View>
          
        </ImageBackground>
      </TouchableOpacity>

      
    </View>
  );
}

