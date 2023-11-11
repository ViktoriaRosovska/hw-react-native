import { Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../GlobalStyles";
import Button from "./Button";

export default function SignUpForm() {
  return (
    <View style={{ ...GlobalStyles.form, ...GlobalStyles.rounded }}>
      <Text style={{ ...GlobalStyles.title }}>Реєстрація</Text>
      <TextInput style={{ ...GlobalStyles.input, marginBottom: 16 }} placeholder="Логін" />
      <TextInput style={{ ...GlobalStyles.input, marginBottom: 16 }} placeholder="Адреса електронної пошти" />
      <TextInput style={{ ...GlobalStyles.input, marginBottom: 43 }} placeholder="Пароль" />
      <Button title="Зареєстуватися" styleProp={GlobalStyles.formButton} />
      <Text>Вже є акаунт? Увійти</Text>
    </View>
  );
}
