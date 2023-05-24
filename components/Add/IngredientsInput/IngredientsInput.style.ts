import { StyleSheet } from "react-native";
import { FONT } from "../../../constants";



const styles = StyleSheet.create({
    container:{
        margin: 12,
    },
    header:{
        fontSize: 18,
        fontFamily: FONT.bold,
        marginBottom: 10,
    },
    textInputView: {
        display: 'flex',
        flexDirection: "row",
    },
    textInput: {
        marginLeft: 5,
        marginBottom: 5,
        fontFamily: FONT.regular
    }
    
})

export default styles;