import { View, Text, TouchableOpacity} from "react-native";
import styles from "./ImageInput.style";

type Props = {
  press: () => void,
  uploaded: number,
};

export default function ImageInput({press, uploaded}: Props) {
  
  return (
    <View style={styles(uploaded).container}>
     <TouchableOpacity onPress={press}>
      <View>
        <Text style={styles().text}>Please upload image</Text>
      </View>
     </TouchableOpacity>
    </View>
  );
}

