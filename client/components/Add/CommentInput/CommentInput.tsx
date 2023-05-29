import { View, Text, TextInput } from "react-native";
import styles from "./CommentInput.style";

type Props = {
  handleChange: (data:string) => void,
  text:string
};

export default function CommentInput({handleChange, text}: Props) {



  return (
    <View style={styles.container}>
     <Text style={styles.header}>Comment:</Text>    
     <TextInput
        multiline={true}
        style={styles.input}
        onChange={(data: any)=>handleChange(data.nativeEvent.text)}
        value={text}
        placeholder="Comment"
        placeholderTextColor="#919191"
      />
      
    </View>
  );
}

