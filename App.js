import { StatusBar } from "expo-status-bar"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import MyTabs from "./MyTabs"
import { StyleSheet, View, Platform } from "react-native"

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}
