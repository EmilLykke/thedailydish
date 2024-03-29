import { View, TextInput } from "react-native";
import styles from "./TitleInput.style";
type Props = {
  handleChange: (data:string) => void,
  text:string
};

export default function CommentInput({handleChange, text}: Props) {



  return (
    <View style={styles.container}>
     <TextInput
        style={styles.input}
        onChange={(data: any)=>handleChange(data.nativeEvent.text)}
        value={text}
        placeholder="Title"
        placeholderTextColor="#919191"
      />
      
    </View>
  );
}

