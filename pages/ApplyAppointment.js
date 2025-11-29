import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView } from "react-native";
import styles from "../Style";

const API_URL = "https://pawroutes-backend.onrender.com/api/appointments/";

export default function ApplyAppointment({ navigation }) {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [serviceDropdownVisible, setServiceDropdownVisible] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [timeDropdownVisible, setTimeDropdownVisible] = useState(false);

  const submit = () => {
    if (!petName || !ownerName || !serviceType || !date || !time) {
      alert("Error", "Please fill in all required fields.");
      return;
    }

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pet_name: petName,
        owner_name: ownerName,
        service_type: serviceType,
        appointment_date: date,
        appointment_time: time,
        notes: notes,
        status: "Pending"
      })
    })
      .then(() => {
        alert("🐾 Appointment Submitted!");
        navigation.navigate("Homepage");
      })
      .catch(() => alert("Error submitting appointment."));
  };

  const fillToday = () => {
    const today = new Date();
    setDate(today.toISOString().slice(0, 10));
  };

  const fillTime = (option) => {
    const now = new Date();
    switch (option) {
      case "now":
        setTime(now.toTimeString().slice(0, 8));
        break;
      case "midnight":
        setTime("00:00:00");
        break;
      case "6am":
        setTime("06:00:00");
        break;
      case "noon":
        setTime("12:00:00");
        break;
      case "6pm":
        setTime("18:00:00");
        break;
    }
    setTimeDropdownVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Book Appointment</Text>

      <TextInput style={styles.input} placeholder="Pet Name" onChangeText={setPetName} value={petName} />
      <TextInput style={styles.input} placeholder="Owner Name" onChangeText={setOwnerName} value={ownerName} />

      {/* Service Type dropdown */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setServiceDropdownVisible(!serviceDropdownVisible)}
      >
        <Text style={{ color: serviceType ? "#5C4A1E" : "#999" }}>
          {serviceType || "Service Type"}
        </Text>
      </TouchableOpacity>
      {serviceDropdownVisible && (
        <View style={{ width: "85%", marginBottom: 10 }}>
          {["Bath", "Haircut", "Nail Trim", "Full Grooming"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.smallButton, { marginVertical: 2 }]}
              onPress={() => {
                setServiceType(option);
                setServiceDropdownVisible(false);
              }}
            >
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Date input with Today button */}
      <View style={styles.rowInputButton}>
        <TextInput
          style={[styles.input, { flex: 1, height: 50, marginRight: 5 }]}
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
        <TouchableOpacity
          style={[styles.smallButton, { height: 50, justifyContent: "center" }]}
          onPress={fillToday}
        >
          <Text style={styles.buttonText}>Today</Text>
        </TouchableOpacity>
      </View>

      {/* Time input with dropdown */}
      <View style={styles.rowInputButton}>
        <TextInput
          style={[styles.input, { flex: 1, height: 50, marginRight: 5 }]}
          placeholder="Time (HH:MM:SS)"
          value={time}
          onChangeText={setTime}
        />
        <TouchableOpacity
          style={[styles.smallButton, { height: 50, justifyContent: "center" }]}
          onPress={() => setTimeDropdownVisible(!timeDropdownVisible)}
        >
          <Text style={styles.buttonText}>⏰</Text>
        </TouchableOpacity>
      </View>

      {timeDropdownVisible && (
        <View style={{ width: "85%", marginBottom: 10 }}>
          {["now", "midnight", "6am", "noon", "6pm"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.smallButton, { marginVertical: 2 }]}
              onPress={() => fillTime(option)}
            >
              <Text style={styles.buttonText}>
                {option === "now"
                  ? "Now"
                  : option === "midnight"
                  ? "Midnight"
                  : option === "6am"
                  ? "6 AM"
                  : option === "noon"
                  ? "Noon"
                  : "6 PM"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Notes input */}
      <TextInput
        style={styles.input}
        placeholder="Notes (optional)"
        onChangeText={setNotes}
        value={notes}
      />

      <Button title="Submit" color="#FFB84C" onPress={submit} />
    </ScrollView>
  );
}
