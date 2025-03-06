import React, { useState } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, Text, View, TextInput, StyleSheet, Alert, } from "react-native";

const Register = () => {
  const router = useRouter();
  const[inputs, setInputs] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    if (!inputs.password || !inputs.firstName || !inputs.lastName || !inputs.confirmPassword || !inputs.email) {
      setErrorMessage("Please ensure all text fields are filled in");
      console.log("Some of the user information was missing");
      return;
    } else if (inputs.password !== inputs.confirmPassword) {
      setErrorMessage("Passwords do not match ");
      console.log("Password and confirmpassword do not match");
      return;
    }
    // if password looks good router push to login page
    // implement fire base auth logic here
    console.log("Successfully registered");
    console.log(inputs)
    router.push("/");
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
          value = {inputs.firstName}
          onChangeText={(text) => setInputs({...inputs, firstName: text})}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={inputs.lastName}
          onChangeText={(text) => setInputs({...inputs, lastName: text})}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={inputs.email}
          onChangeText={(text) => setInputs({...inputs, email: text})}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={inputs.password}
          onChangeText={(text) => setInputs({...inputs, password: text})}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          value={inputs.confirmPassword}
          onChangeText={(text) => setInputs({...inputs, confirmPassword: text})}
          style={styles.input}
        />

        { /* for registering users as well as sending user to login page if they chose */}
        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.button, { marginBottom: 10 }]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/");
          }}
        >
          <text style={styles.textSecondary}>Returning user? Login.</text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// style sheet
const styles = StyleSheet.create({
  // set everything to center
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0F1E",
  },
  // "card" the centered box that all the components sit inside of 
  card:{
    backgroundColor: '#1E293B', 
    borderWidth: 1,
    borderColor: '#334155',
    padding: '3%',
    alignItems: 'center',
    borderRadius: 25,
  },
  // the "login" text
  headerText: {
    color: "white",
    fontSize: 25,
  },
  // centering header
  header: {
    alignItems: "flex-start",
    paddingBottom: 15,
  },
  // input boxes
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
  // register button
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
  // button text
  buttonText: {
    color: "#F8FAFC",
    fontWeight: "bold",
    textAlign: "center",
  },
  // text for user to switch to login
  textSecondary: {
    color: "#CBD5E1",
    marginTop: 10,
    textAlign: "center",
  },
});

export default Register;