import { StyleSheet } from "react-native";
import { FONT } from "../../../constants";


const styles = (num?:number) => StyleSheet.create({
    container:{
        padding: 12,
        display: num === 1 ? "flex" : "none",
        
    },
    uploadView:{
        borderWidth: 4,
        borderColor: "#919191",
        width: "100%",
        height: 120,
        borderRadius: 10,
        borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: FONT.regular,
        color: "#919191",
    }
    
    
})

export default styles;