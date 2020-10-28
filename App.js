import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View, Alert } from "react-native"
import { Button, Heading } from "./src/components"

export default function App() {
  const onPress = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },

        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: true }
    )

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button
          onPress={onPress}
          variant='outline'
          colour='dark'
        >
          I'm pressable
        </Button>
      </View>
      <View style={styles.box}>
        <Heading level='h1'>Heading h1</Heading>
        <Heading level='h2'>Heading h2</Heading>
        <Heading level='h3'>Heading h3</Heading>
        <Heading level='h4'>Heading h4</Heading>
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
    width: "80%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
})
