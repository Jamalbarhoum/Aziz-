import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";

import axios from "axios"
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });


  const loginAndRegister = (data) => {
    console.log("data");
    // console.log({ name: name.value, email: email.value, password: password.value });
    console.log(data.password);



    axios
      .post("http://172.20.10.2:3000/users/register", {
        username: data.name,
        email: data.email,
        password_hash: data.password
      })
      .then((res) => {
        axios
          .post("http://172.20.10.2:3000/users/login", {
            email: email,
            password: password,
          })
          .then((res) => {

            console.log(res.data);
            navigation.reset({
              index: 0,
              routes: [{ name: "HomeScreen" }],
            });
          })
          .catch((err) => {
            console.log(err);


          });
      })
      .catch((err) => {
        if (
          err.response.data.message === "The email or username already exists"
        ) {
          axios
            .post("http://172.20.10.2:3000/users/login", {
              email: email,
              password: password,
            })
            .then((res) => {

              console.log(res.data);

              navigation.reset({
                index: 0,
                routes: [{ name: "HomeScreen" }],
              });

            })
            .catch((err) => {
              console.log(err);

            });
        } else {
          console.log(err);
        }
      });
  };

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });

      return;
    }
    loginAndRegister({ name: name.value, email: email.value, password: password.value });
    console.log({ name: name.value, email: email.value, password: password.value });


  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome.</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Next
      </Button>
      <View style={styles.row}>
        <Text>I already have an account !</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
