import {View, TouchableOpacity, Image  } from "react-native"
import { images } from "../../constants"

import styles from "./LeftHead.style"

type Props = {}

export default function LeftHead({}: Props) {
  return (
    <View>
        <TouchableOpacity style={styles.container}>
              <Image
              style={styles.image}
              source={images.profile}
              resizeMode="contain"
              />
        </TouchableOpacity>
    </View>
  )
}