import React, { useState } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, Text, View, TextInput, StyleSheet, Alert, } from "react-native";

const Register = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    if (!password || !firstName || !lastName || !confirmPassword || !confirmPassword) {
      setErrorMessage("Please ensure all text fields are filled in");
      console.log("Some of the user information was missing");
      return;
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match ");
      console.log("Password and confirmpassword do not match");
      return;
    }
    // if password looks good router push to login page
    // implement fire base auth logic here
    console.log("Successfully registered");
    console.log(name, email, password, confirmPassword);
    router.push("/auth/Login");
    return;
  };

  return (
    // add theme header later, above view
    // main view, contains name, user, pass, confirm pass.
    <View style={styles.container}>
      {/* card */}
      <View style={styles.card}>
        {/* header text */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Register:</Text>
        </View>

        {/* text inputs for variables */}
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.button, { marginBottom: 10 }]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/auth/Login");
          }}
        >
          <text style={styles.textSecondary}>Returning user? Login.</text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    paddingLeft: -50,
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

export default Register;
