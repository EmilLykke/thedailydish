import { View, TouchableOpacity } from "react-native";

import styles from "./RightHead.style";
import PlusRound from "../../../assets/icons/svgs/PlusRound";
import { useRouter } from "expo-router";

type Props = {};

export default function LeftHead({}: Props) {
  const router = useRouter()

  function handlePress(){
    router.push("/add")
  }

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <PlusRound />
      </TouchableOpacity>
    </View>
  );
}
