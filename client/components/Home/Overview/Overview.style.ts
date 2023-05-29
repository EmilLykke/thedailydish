import { StyleSheet } from "react-native";


import { FONT } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000000",
        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowOffset: {width: 0, height:3},
        borderRadius: 15,
        width: "95%",
        height:184,
        marginLeft: 10,
        marginBottom: 50,
    },
    link:{
        width: 600,
        height:"100%",
    },
    imageContainer: {
        width: "100%",
        height:"100%",
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
        width: "100%",
        height:"100%",
        padding: 15
    },
    imageText: {
        fontSize: 25,
        paddingLeft:3,
        fontFamily: FONT.regular,
        color: "white",
        textShadowColor: "#000000",
        textShadowRadius: 10,
        textShadowOffset: {width: 0, height:3},
    },
    arrowView: {
        position: "absolute",
        bottom: 12,
        right: 8,
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: "white",
        shadowColor: "#000000",
        shadowOpacity: 0.50,
        shadowRadius: 5,
        shadowOffset: {width: 0, height:3},
        alignItems: "center",
        justifyContent: "center"
    },
    arrow: {
        width: "100%",
        height:"100%",
        backgroundColor: "white",
    }
})

export default styles;