import { StyleSheet } from "react-native";

const styles = (num?:number) => StyleSheet.create({
    recipeListContainer:{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
})

export default styles;