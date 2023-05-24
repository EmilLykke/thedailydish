import { View, TextInput, Text} from "react-native";
import styles from "./IngredientsInput.style";
import ShoppingCart from "../../../assets/icons/svgs/ShoppingCart";
type Props = {
  ingredients: Array<any>,
  handleChange: (data: any, index: number)=>void,
};

export default function IngredientsInput({ingredients, handleChange}: Props) {


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ingredients:</Text>     
        {ingredients.map((data: any, index:number)=>(
          <View key={index} style={styles.textInputView}>
            <ShoppingCart />
            <TextInput
            key={index} 
            value={data.ingredient}
            placeholder="New ingredient..."
            placeholderTextColor="#919191"
            style={styles.textInput}
            onChange={(data:any)=>handleChange(data.nativeEvent.text, index)}
            />
          </View>
        ))}
        
    </View>
  );
}

