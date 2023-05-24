import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    borderRadius: 50,
    width: 52,
    height: 52,
    position: 'relative',
    overflow: "hidden",
  },
  image: {
    width: 75,
    height: 200,
    position:"absolute",
    left: -15,
    top: 5
  }
});

export default styles;
