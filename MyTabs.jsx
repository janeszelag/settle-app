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
  unbleachedSilk,
  darkCedarChest,
  cedarChest,
  grey, lightGunmetal
} from './src/styles/colors'

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Card>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button colour='dark'>I'm pressable</Button>
            <View style={{ padding: 10 }} />
            <Button colour='orange' variant='outline'>I'm pressable</Button>
            <Heading level='h1'>Heading h1</Heading>
            <View style={{ padding: 10 }} />
          </View>
          <Paragraph>
            This is some paragraph text at size medium. By default
            it is left aligned.
            </Paragraph>
        </Card>
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
        showLabel: Platform.OS === 'web' ? true : false,
        showIcon: true,
        tabStyle: Platform.OS === 'web' ? { flexDirection: 'row-reverse' } : undefined,
        style: Platform.OS === 'web' ? { backgroundColor: white } : undefined

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
              size={Platform.OS === 'web' ? 24 : size}
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
              name='account'
              color={color}
              size={Platform.OS === 'web' ? 24 : size}
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
              size={Platform.OS === 'web' ? 24 : size}
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
    backgroundColor: lightGunmetal,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  box: {
    width: "90%",

    alignItems: "center",
    justifyContent: "center",

  },
})


export default MyTabs