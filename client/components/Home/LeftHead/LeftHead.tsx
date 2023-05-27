import { View, TouchableOpacity, Image } from "react-native";
import { images } from "../../../constants";

import styles from "./LeftHead.style";
import { useRouter } from "expo-router";

type Props = {};

export default function LeftHead({}: Props) {
  const router = useRouter();

  function handlePress(){
    router.push("/login")
  }

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Image
          style={styles.image}
          source={images.profile}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
