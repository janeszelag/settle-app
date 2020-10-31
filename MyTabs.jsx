import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, View, Platform } from "react-native"
import {
  Button,
  Heading,
  Paragraph,
  Card,
} from "./src/components"
import {
  white,
  gunmetal,
  unbleachedSilk
} from './src/styles/colors'

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Card variant='pink'>
          <Paragraph>Home!</Paragraph>
          <Button colour='dark'>I'm pressable</Button>
        </Card>
      </View>
      <View style={styles.box}>
        <Heading level='h1'>Heading h1</Heading>
      </View>
      <View style={{ width: "90%" }}>
        <Paragraph>
          This is some paragraph text at size medium. By default
          it is left aligned.
        </Paragraph>
      </View>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>This will be your profile and settings.</Paragraph>
    </View>
  )
}

function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>This will be an about section.</Paragraph>
    </View>
  )
}

const Tab = Platform.OS === 'web' ? createMaterialTopTabNavigator() : createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Feed'
      tabBarOptions={{
        activeTintColor: Platform.OS === 'web' ? gunmetal : unbleachedSilk,
        inactiveTintColor: Platform.OS === 'web' ? gunmetal : white,
        activeBackgroundColor: gunmetal,
        inactiveBackgroundColor: gunmetal,
        showLabel: Platform.OS === 'web' ? true : false
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='home-variant'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='account-outline'
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name='About'
        component={AboutScreen}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='cactus'
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
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
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
})


export default MyTabs