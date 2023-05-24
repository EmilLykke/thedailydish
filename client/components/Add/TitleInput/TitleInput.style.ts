import { StyleSheet } from "react-native";


import { FONT } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        margin: 12,
       
    },
    input: {
        height: 40,
        
        fontSize: 32,
        borderBottomWidth: 1,
        paddingBottom: 10,
        color: "#000",
        fontFamily: FONT.regular, 
    },
    
})

export default styles;