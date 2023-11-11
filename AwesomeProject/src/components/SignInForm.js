import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../GlobalStyles";
import Button from "./Button";

export default function SignUpForm() {
  return (
    <View style={{ ...GlobalStyles.form, ...GlobalStyles.rounded, ...styles.formContainer }}>
      <Text style={{ ...GlobalStyles.title }}>Увійти</Text>
      <TextInput style={{ ...GlobalStyles.input, marginBottom: 16 }} placeholder="Адреса електронної пошти" />
      <TextInput style={{ ...GlobalStyles.input, marginBottom: 43 }} placeholder="Пароль" />
      <Button title="Увійти" styleProp={{ ...GlobalStyles.formButton }} />
      <Text>Немає акаунту? Зареєструватися</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 32,
    height: 489,
    marginTop: 323,
  },
});
