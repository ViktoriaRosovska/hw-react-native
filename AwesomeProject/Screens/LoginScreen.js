import { ImageBackground, View } from "react-native";
import SignInForm from "../src/components/SignInForm";
import { GlobalStyles } from "../GlobalStyles";

export default function LoginScreen() {
  return (
    <View style={GlobalStyles.container}>
      <ImageBackground
        source={require("../assets/images/photoBG.jpg")}
        resizeMode="cover"
        style={GlobalStyles.backgroundImage}
      >
        <SignInForm />
      </ImageBackground>
    </View>
  );
}
