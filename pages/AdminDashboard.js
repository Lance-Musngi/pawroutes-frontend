import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity, Alert, ScrollView } from "react-native";
import styles from "../Style";

const API_URL = "https://pawroutes-backend.onrender.com/api/appointments/";

export default function AdminDashboard({ navigation }) {
  const [data, setData] = useState([]);

  // Fetch appointments
  const fetchAppointments = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Error fetching appointments:", err));
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Update status
  const updateStatus = (id, status) => {
    fetch(API_URL + id + "/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then(() => {
        alert("Status Updated!");
        fetchAppointments(); // Refresh data
      })
      .catch(err => console.error("Error updating status:", err));
  };

  // Logout (web-safe)
const logout = () => {
  // Ask for confirmation
  const confirmLogout = window.confirm("Are you sure you want to logout?");
  
  if (confirmLogout) {
    // Show success message
    window.alert("✅ Successfully logged out!");
    
    // Navigate to Homepage and reset stack
    navigation.reset({
      index: 0,
      routes: [{ name: "Homepage" }],
    });
  }
};

  // Render status tag
  const renderStatusTag = (status) => {
    if (status === "Pending")
      return (
        <View style={styles.statusTagPending}>
          <Text style={styles.statusText}>Pending</Text>
        </View>
      );
    if (status === "Completed")
      return (
        <View style={styles.statusTagCompleted}>
          <Text style={styles.statusText}>Completed</Text>
        </View>
      );
    return (
      <View style={styles.statusTagCancelled}>
        <Text style={styles.statusText}>Cancelled</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {/* Logout button */}
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Admin Dashboard</Text>

      <FlatList
        data={data.sort((a, b) => a.id - b.id)} // first come, first serve
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 20,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: "#FFDE8F",
              width: "100%", // rectangular
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 5,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#5C4A1E", marginBottom: 5 }}>
              {item.pet_name}
            </Text>
            {renderStatusTag(item.status)}
            <Text>Owner: {item.owner_name}</Text>
            <Text>Service: {item.service_type}</Text>
            <Text>Date: {item.appointment_date}</Text>
            <Text>Time: {item.appointment_time}</Text>
            {item.notes ? <Text>Notes: {item.notes}</Text> : null}

            {/* Status Buttons */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
              <Button title="Mark Pending" color="#FFDE8F" onPress={() => updateStatus(item.id, "Pending")} />
              <Button title="Completed" color="#77DD77" onPress={() => updateStatus(item.id, "Completed")} />
              <Button title="Cancelled" color="#FF6961" onPress={() => updateStatus(item.id, "Cancelled")} />
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}
