import { StyleSheet } from "react-native";
import { FONT } from "../../../constants";


const styles = (num?:number) => StyleSheet.create({
    container:{
        display: num === 1 ? "flex" : "none",
    },
    text: {
        fontFamily: FONT.regular,
    }
    
    
})

export default styles;