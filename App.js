import { StatusBar } from "expo-status-bar"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import MyTabs from "./MyTabs"
import { View, Platform } from "react-native"
import { gunmetal } from "./src/styles/colors"

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      {Platform.OS !== "web" && (
        <View
          style={{ backgroundColor: gunmetal, height: 25 }}
        />
      )}
      <NavigationContainer>
        <MyTabs />
        <StatusBar style='auto' />
      </NavigationContainer>
    </>
  )
}
