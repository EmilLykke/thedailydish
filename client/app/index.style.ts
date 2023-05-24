import { StyleSheet } from "react-native";

const styles = (num?:number) => StyleSheet.create({
    introContainer: {
        flex: 1,
        padding: 15,
        position: "relative",
        justifyContent: "center",
        flexDirection: "row",
    },
    intro:{
        fontSize: 28,
        fontFamily: num === 1 ? "CalibriBold" : "CalibriRegular",
        margin: 5
    },
    header: {
        zIndex: -1,
    }
})

export default styles;