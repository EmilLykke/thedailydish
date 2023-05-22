import { StyleSheet } from "react-native";

import { FONT } from "../../../constants";

const styles = (num?:number, ball?:number) => StyleSheet.create({
    container:{
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

   
})

export default styles;