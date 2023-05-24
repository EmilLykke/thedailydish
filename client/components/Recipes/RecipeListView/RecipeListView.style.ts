import { StyleSheet } from "react-native";


import { FONT } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        
    },
    
    imageContainer: {
        width: 200,
        height:200,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 2,
    },
    image: {
        borderRadius: 15,
        width: "100%",
        height:"100%",
        
    },
    imageView: {
        padding: 10,
        justifyContent: "center",
        alignSelf: "baseline",
        backgroundColor: "#212121",
        margin: 10,
        borderRadius: 3,
    },
    imageText: {
        fontSize: 25,
        fontFamily: FONT.regular,
        color: "#fff",
        textShadowColor: "#000",
        textShadowRadius: 4,
        textShadowOffset: {width: 2, height:3},
    },
   
})

export default styles;