import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import styles from "../Style";

const API_URL = "https://pawroutes-backend.onrender.com/api/appointments/";

export default function AppointmentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Error fetching appointments:", err));
  }, []);

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
      <Text style={styles.title}>All Appointments</Text>

      <FlatList
        data={data.sort((a, b) => a.id - b.id)} // first come, first serve
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 20,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: "#FFDE8F",
              width: "100%", // make it rectangular
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
          </View>
        )}
      />
    </ScrollView>
  );
}
