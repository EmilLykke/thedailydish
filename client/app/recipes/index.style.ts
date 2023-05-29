import { StyleSheet } from "react-native";
import { FONT } from "../../constants";

const styles = (num?:number) => StyleSheet.create({
    scrollView: {
        width: "100%",

    },
    recipeListContainer:{
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    errorBox: {
        backgroundColor: "#e63946",
        width: 200,
        height: 100,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        
      },
      errorText: {
        color: "white",
        fontFamily: FONT.bold,
        letterSpacing: 1,
        fontSize: 20,
    }
})

export default styles;