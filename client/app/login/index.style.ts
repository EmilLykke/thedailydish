import { StyleSheet } from "react-native";
import { FONT } from "../../constants";

const styles = (num?:number) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      inputContainer: {
        width: "70%",
        marginBottom: 20,
      },
      input: {
        
        fontFamily: FONT.regular,
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
      },
      loginButton: {
        width: "70%",
        backgroundColor: '#588E41',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      loginButtonText: {
        fontFamily: FONT.bold,
        color: 'white',
      },
})

export default styles;