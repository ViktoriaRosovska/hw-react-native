import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import SignInForm from "../src/components/SignInForm";
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
          <SignInForm />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
