import { StyleSheet, View } from "react-native";
import Button from "./Button";
export default function AddAvatar() {
  return (
    <View style={styles.container}>
      <Button title="+" styleProp={styles.AddButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",

    position: "absolute",
    top: 203,
    left: 128,
    zIndex: 100,
  },
  AddButton: {
    button: {
      position: "absolute",
      right: -13,
      bottom: 13,
      borderRadius: "50%",
      width: 25,
      height: 25,
      borderColor: "#FF6C00",
      borderWidth: 2,
      backgroundColor: "white",
      //   flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    text: {
      color: "#FF6C00",
      fontSize: 20,
      lineHeight: 20,
    },
  },
});
