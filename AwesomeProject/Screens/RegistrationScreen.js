import { ImageBackground, View } from "react-native";
import SignUpForm from "../src/components/SignUpForm";
import { GlobalStyles } from "../GlobalStyles";
import AddAvatar from "../src/components/AddAvatar";

export default function RegistrationScreen() {
  return (
    <View style={GlobalStyles.container}>
      <ImageBackground
        source={require("../assets/images/photoBG.jpg")}
        resizeMode="cover"
        style={GlobalStyles.backgroundImage}
      >
        <AddAvatar />
        <SignUpForm />
      </ImageBackground>
    </View>
  );
}
