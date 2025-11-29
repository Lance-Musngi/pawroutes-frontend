import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from "./pages/Homepage";
import ApplyAppointment from "./pages/ApplyAppointment";
import AppointmentList from "./pages/AppointmentList";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

const Stack = createNativeStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">

        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="ApplyAppointment" component={ApplyAppointment} />
        <Stack.Screen name="AppointmentList" component={AppointmentList} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
