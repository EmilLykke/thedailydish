import { View, TextInput, Text} from "react-native";
import styles from "./CookingStepsInput.style";
import MenuBook from "../../../assets/icons/svgs/MenuBook";
type Props = {
  steps: Array<any>,
  handleChange: (data: any, index: number)=>void,
};

export default function CookingStepsInput({steps, handleChange}: Props) {


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cooking steps:</Text>     
        {steps.map((data: any, index:number)=>(
          <View key={index} style={styles.textInputView}>
            <MenuBook />
            <TextInput
            key={index} 
            value={data.step}
            placeholder="New step..."
            placeholderTextColor="#919191"
            style={styles.textInput}
            onChange={(data:any)=>handleChange(data.nativeEvent.text, index)}
            />
          </View>
        ))}
        
    </View>
  );
}

