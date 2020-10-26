import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button } from "./src/components"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button variant='outline' colour='dark'>
          I'm pressable
        </Button>
      </View>
      <View style={styles.box}>
        <Button variant='outline'>I'm pressable</Button>
      </View>
      <View style={styles.box}>
        <Button colour='dark'>I'm pressable</Button>
      </View>
      <View style={styles.box}>
        <Button>I'm pressable</Button>
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  box: {
    width: "60%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
})
