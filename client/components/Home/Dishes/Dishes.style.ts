import { StyleSheet } from "react-native";
import { FONT } from "../../../constants";


const styles = (num?:number, ball?:number) => StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight: 10,
        
    },
    headContainer:{
        justifyContent: "center",
        width: "100%"
    },
    headerContainer:{
        width: "100%",
        flex:1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 15,
    },
    headers:{
        fontFamily: "CalibriBold",
        fontSize: 24,
        color: num === 1 ? "#588E41" : "#B5B5B5",
        
    },
    ballContainer:{
        alignItems: "center"
    },
    ballView: {
        opacity: ball === 1 ? 1 : 0,
        width: 7.5,
        height: 7.5,
        borderRadius: 30,
        backgroundColor: "#588E41",
        
    },
    dishesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",

    },

    errorBox: {backgroundColor: "#e63946",
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