import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!email || !password)
      setErrorMessage("Please enter both email and password.");
    return;
  };
  
  const toggleRegister = () => {};

  return (
    <view>
      <TextInput 
        placeholder="email" 
        value={email} 
        onChangeText={setEmail} 
      />

      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleRegister}>
        <Text>New user? Register.</Text>
      </TouchableOpacity>
    </view>
  );
};

const styles = StyleSheet.create({});

export default login;
