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
    input: {
        height: 100,
        borderColor: "#919191",
        padding: 10,
        borderWidth: 1,
        fontSize: 18,
        borderRadius: 8,
        paddingBottom: 10,
        color: "#000",
        fontFamily: FONT.regular, 
    },
    
})

export default styles;