import { View, Text, TouchableOpacity} from "react-native";
import styles from "./ImageInput.style";
import ImageIcon from "../../../assets/icons/svgs/ImageIcon";

type Props = {
  press: () => void,
  uploaded: number,
};

export default function ImageInput({press, uploaded}: Props) {
  
  return (
    <View style={styles(uploaded).container}>
     <TouchableOpacity onPress={press} style={styles().uploadView}>
      <View >
        <ImageIcon />
      </View>
     </TouchableOpacity>
    </View>
  );
}

