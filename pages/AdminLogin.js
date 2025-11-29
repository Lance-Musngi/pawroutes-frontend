import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../Style";

export default function AdminLogin({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (user === "admin" && pass === "admin123") {
      navigation.navigate("AdminDashboard");
    } else {
      alert("❌ Wrong credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>

      <TextInput style={styles.input} placeholder="Username" onChangeText={setUser} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPass} />

      <Button title="Login" color="#FF8FAB" onPress={login} />
    </View>
  );
}
