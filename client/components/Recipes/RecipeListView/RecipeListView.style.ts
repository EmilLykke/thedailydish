import { StyleSheet } from "react-native";


import { FONT } from "../../../constants";



const styles = (width?: number, height?: number) => StyleSheet.create({
    container:{
        
    },
    
    imageContainer: {
        width: width*0.4,
        height: width*0.4,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 2,
        margin: 10,

        shadowColor: "#000000",
        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowOffset: {width: 0, height:3},
    },
    image: {
        borderRadius: 15,
        width: "100%",
        height:"100%",
        
    },
    imageView: {
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        justifyContent: "center",
        alignSelf: "baseline",
        borderBottomRightRadius: 15,
        backgroundColor: "white",
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 5,
        shadowOpacity: 0.2

    },
    imageText: {
        fontSize: 18,
        fontFamily: FONT.bold,
        color: "#000",

    },

    
   
})

export default styles;