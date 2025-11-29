import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity, Alert } from "react-native";
import styles from "../Style";

const API_URL = "https://pawroutes-backend.onrender.com/api/appointments/";

export default function AdminDashboard({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(setData);
  }, []);

  const updateStatus = (id, status) => {
    fetch(API_URL + id + "/", {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ status })
    }).then(() => alert("Status Updated!"));
  };

  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", style: "destructive", onPress: () => navigation.navigate("Homepage") }
      ]
    );
  };

  const renderStatusTag = (status) => {
    if (status === "Pending") return <View style={styles.statusTagPending}><Text style={styles.statusText}>Pending</Text></View>;
    if (status === "Completed") return <View style={styles.statusTagCompleted}><Text style={styles.statusText}>Completed</Text></View>;
    return <View style={styles.statusTagCancelled}><Text style={styles.statusText}>Cancelled</Text></View>;
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Admin Dashboard</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.pet_name}</Text>
            {renderStatusTag(item.status)}

            <Button title="Mark Pending" color="#FFDE8F" onPress={() => updateStatus(item.id, "Pending")} />
            <Button title="Completed" color="#77DD77" onPress={() => updateStatus(item.id, "Completed")} />
            <Button title="Cancelled" color="#FF6961" onPress={() => updateStatus(item.id, "Cancelled")} />
          </View>
        )}
      />
    </View>
  );
}
