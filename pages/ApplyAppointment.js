import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../Style";

const API_URL = "https://pawroutes-backend.onrender.com/api/appointments/";

export default function ApplyAppointment({ navigation }) {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const submit = () => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pet_name: petName,
        owner_name: ownerName,
        service_type: serviceType,
        appointment_date: date,
        appointment_time: time,
        status: "Pending",
        notes: ""
      })
    })
      .then(() => {
        alert("🐾 Appointment Submitted!");
        navigation.navigate("Homepage");
      })
      .catch(() => alert("Error submitting appointment."));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Appointment</Text>

      <TextInput style={styles.input} placeholder="Pet Name" onChangeText={setPetName} />
      <TextInput style={styles.input} placeholder="Owner Name" onChangeText={setOwnerName} />
      <TextInput style={styles.input} placeholder="Service Type" onChangeText={setServiceType} />
      <TextInput style={styles.input} placeholder="Date (YYYY-MM-DD)" onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Time (HH:MM)" onChangeText={setTime} />

      <Button title="Submit" color="#FFB84C" onPress={submit} />
    </View>
  );
}
