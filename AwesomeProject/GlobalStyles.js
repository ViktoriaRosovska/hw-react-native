import { Platform, StyleSheet } from "react-native";

export const stylesByPlatform = Platform.select({
  ios: { fontFamily: "Roboto-Regular, Roboto-Medium, Roboto-Bold" },
  android: { fontFamily: "Roboto-Regular, Roboto-Medium, Roboto-Bold" },
});

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    // alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  text: {
    ...stylesByPlatform,
    color: "#000000",
  },
  title: {
    fontFamily: "Roboto-Medium",
    lineHeight: 35.16,
    fontSize: 30,
    letterSpacing: 0.01,
    textAlign: "center",
    marginBottom: 33,
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    // height: 549,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 263,
  },
  rounded: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    padding: 16,
    color: "#000000",
    lineHeight: 18.75,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
  },
  formButton: {
    button: {
      width: "100%",
      borderRadius: 100,
      marginBottom: 16,
      color: "#FF6C00",
      paddingBottom: 16,
      backgroundColor: "#FF6C00",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 16,
      paddingHorizontal: 32,
      elevation: 3,
    },
    text: {
      fontSize: 16,
      fontWeight: "400",
      fontFamily: "Roboto-Regular",
      lineHeight: 19,
      letterSpacing: 0,
      color: "white",
    },
  },
});
