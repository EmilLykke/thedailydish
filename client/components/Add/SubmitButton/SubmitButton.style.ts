import { StyleSheet } from "react-native";


import { FONT } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        margin: 12,
        
        
    },
    buttonView:{
        borderWidth: 1,
        borderRadius: 25,
        padding: 10,
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 24,
        color: "#000",
        fontFamily: FONT.regular, 
    },
    
})

export default styles;