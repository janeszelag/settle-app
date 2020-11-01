import { StatusBar } from "expo-status-bar"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import MyTabs from "./MyTabs"
import { StyleSheet, View, Platform } from "react-native"

export default function App() {
  return (
    <>
      {Platform.OS !== "web" && (
        <View
          style={{ backgroundColor: "#293241", height: 25 }}
        />
      )}
      <NavigationContainer>
        <MyTabs />
        <StatusBar style='auto' />
      </NavigationContainer>
    </>
  )
}
