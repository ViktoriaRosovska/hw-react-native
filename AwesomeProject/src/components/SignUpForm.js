import { Text, TextInput } from "react-native";
import { GlobalStyles } from "../../GlobalStyles";
import Button from "./Button";
import AddAvatar from "./AddAvatar";
import { useState } from "react";

export default function SignUpForm() {
  const [login, setLogin] = useState("");
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  return (
    <>
      <AddAvatar />
      <Text style={{ ...GlobalStyles.title }}>Реєстрація</Text>
      <TextInput
        style={[GlobalStyles.input, isLoginFocused && GlobalStyles.inputFocused, GlobalStyles.marginBottom.mb16]}
        placeholder="Логін"
        name="login"
        value={login}
        onFocus={() => setIsLoginFocused(true)}
        onBlur={() => setIsLoginFocused(false)}
        onChange={() => setLogin(value)}
      />
      <TextInput
        style={[GlobalStyles.input, isEmailFocused && GlobalStyles.inputFocused, GlobalStyles.marginBottom.mb16]}
        name="email"
        value={email}
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
        onChange={() => setEmail(value)}
        placeholder="Адреса електронної пошти"
      />
      <TextInput
        style={[GlobalStyles.input, isPasswordFocused && GlobalStyles.inputFocused, GlobalStyles.marginBottom.mb43]}
        name="password"
        value={password}
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}
        onChange={() => setPassword(value)}
        placeholder="Пароль"
      />
      <Button title="Зареєстуватися" styleProp={GlobalStyles.formButton} />
      <Text>Вже є акаунт? Увійти</Text>
    </>
  );
}
