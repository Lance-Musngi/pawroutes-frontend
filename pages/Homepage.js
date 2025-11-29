import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../Style";
import { Ionicons } from "@expo/vector-icons";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Admin Login */}
      <TouchableOpacity
        style={styles.adminBtn}
        onPress={() => navigation.navigate("AdminLogin")}
      >
        <Text style={styles.adminBtnText}>Admin</Text>
      </TouchableOpacity>

      <Ionicons name="paw" size={80} color="#FF8FAB" style={{ marginTop: 50 }} />

      <Text style={styles.title}>Paws & Routes</Text>
      <Text style={styles.subtitle}>Pet Grooming Scheduler</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ApplyAppointment")}
      >
        <Text style={styles.buttonText}>🐾 Apply for Appointment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AppointmentList")}
      >
        <Text style={styles.buttonText}>📅 View Appointments</Text>
      </TouchableOpacity>
    </View>
  );
}
