import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../Style";

const API_URL = "https://pawroutes-backend.onrender.com/api/appointments/";

export default function AppointmentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(setData);
  }, []);

  const renderStatusTag = (status) => {
    if (status === "Pending") return <View style={styles.statusTagPending}><Text style={styles.statusText}>Pending</Text></View>;
    if (status === "Completed") return <View style={styles.statusTagCompleted}><Text style={styles.statusText}>Completed</Text></View>;
    return <View style={styles.statusTagCancelled}><Text style={styles.statusText}>Cancelled</Text></View>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Appointments</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.pet_name}</Text>
            {renderStatusTag(item.status)}
            <Text>Owner: {item.owner_name}</Text>
            <Text>Service: {item.service_type}</Text>
            <Text>Date: {item.appointment_date}</Text>
            <Text>Time: {item.appointment_time}</Text>
          </View>
        )}
      />
    </View>
  );
}
