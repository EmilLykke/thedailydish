import { View, Text, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";
import styles from "./TitleInput.style";
import { useState } from "react";
type Props = {};

export default function TitleInput({}: Props) {


  const router = useRouter();
  const [text, onChangeText] = useState('');


  return (
    <View style={styles.container}>
     
     <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Title"
        placeholderTextColor="#919191"
      />

      
    </View>
  );
}

