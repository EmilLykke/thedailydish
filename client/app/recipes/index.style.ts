import { StyleSheet } from "react-native";

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
})

export default styles;