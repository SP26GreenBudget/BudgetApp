import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button, TextInput } from "react-native";
import { useRouter } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); 

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    console.log("Logging in...");
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerText}>
          Login:
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/auth/Register')}>
          <Text style={styles.textSecondary}>New User? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0F1E",
  },
  card:{
    backgroundColor: '#1E293B', 
    borderWidth: 1,
    borderColor: '#334155',
    padding: '3%',
    alignItems: 'center',
    borderRadius: 25,
  },
  headerText: {
    color: "white",
    fontSize: 25,
  },
  header: {
    alignItems: "flex-start",
    paddingBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    width: 300,
    color: "#F8FAFC",
    backgroundColor: "#1E293B",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3B82F6",
    borderRadius: 4,
    height: 50,
    width: 100,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#F8FAFC",
    fontWeight: "bold",
    textAlign: "center",
  },
  textSecondary: {
    color: "#CBD5E1",
    marginTop: 10,
    textAlign: "center",
  },
});

export default Login;
