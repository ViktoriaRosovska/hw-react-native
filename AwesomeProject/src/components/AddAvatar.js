import { Image, StyleSheet, View } from "react-native";
import Button from "./Button";
import DeleteSvg from "./DeleteSvg";
import AddSvg from "./AddSvg";
import { useState } from "react";
export default function AddAvatar() {
  const [avatar, setAvatar] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {/* <Image source={require("../../assets/images/avatar.png")} style={styles.image} /> */}

        <Button title="" styleProp={styles.addButton}>
          <AddSvg />
        </Button>
        {/* <Button title="" styleProp={styles.deleteButton}>
          <DeleteSvg />
        </Button> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  addButton: {
    button: {
      position: "absolute",
      right: -20,
      bottom: 17,
      borderRadius: 25 / 2,
      width: 25,
      height: 25,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 0,
      paddingHorizontal: 0,
      transform: [{ rotate: "45deg" }],
    },
  },
  deleteButton: {
    button: {
      position: "absolute",
      right: -13,
      bottom: 20,
      borderRadius: 25 / 2,
      width: 25,
      height: 25,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
  },
});
