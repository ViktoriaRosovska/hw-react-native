import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import SignUpForm from "../src/components/SignUpForm";
import { GlobalStyles } from "../GlobalStyles";

export default function RegistrationScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/photoBG.jpg")}
      resizeMode="cover"
      style={GlobalStyles.backgroundImage}
      imageStyle={{ minHeight: 812 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ ...GlobalStyles.form, ...GlobalStyles.rounded }}
        >
          <SignUpForm />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
