import { View, TouchableOpacity, Text } from "react-native";
import styles from "./SubmitButton.style";
type Props = {
  handleSubmit: ()=>void,
};

export default function SubmitButton({handleSubmit}: Props) {


  return (
    <View style={styles.container}>
     
     <TouchableOpacity style={styles.buttonView} onPress={handleSubmit}>
       <View>
        <Text style={styles.text}>Save recipe</Text>
       </View>
     </TouchableOpacity>

      
    </View>
  );
}

