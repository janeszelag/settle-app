import React from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, View, Platform, useWindowDimensions } from "react-native"
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
  grey,
  lightGunmetal,
  lightGrey, steelTeal, cadmiumOrange, lightTeal
} from './src/styles/colors'

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Card variant='teal'>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button colour='dark'>I'm pressable</Button>
            <View style={{ padding: 10 }} />
            <Button colour='orange' >I'm pressable</Button>

          </View>
          <View style={{ padding: 10 }} />
          <Heading level='h1'>Heading h1</Heading>
          <View style={{ padding: 10 }} />
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

function ProgressScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>This will be your progress.</Paragraph>
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

const Tab = createMaterialTopTabNavigator()

function MyTabs() {

  const windowWidth = useWindowDimensions().width
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarPosition={Platform.OS !== 'web' ? 'bottom' : 'top'}
      tabBarOptions={{
        activeTintColor: '#b9eeee',
        inactiveTintColor: white,
        activeBackgroundColor: gunmetal,
        inactiveBackgroundColor: gunmetal,
        showLabel: Platform.OS === 'web' && windowWidth >= 764 ? true : false,
        labelStyle: { textTransform: 'none', fontSize: 16 },
        showIcon: true,
        indicatorStyle: { backgroundColor: steelTeal, height: Platform.OS === 'web' ? 4 : 0 },
        tabStyle: Platform.OS === 'web' ? { flexDirection: 'row' } : undefined,
        style: { backgroundColor: gunmetal }

      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='home-variant'
              color={color}
              size={Platform.OS === 'web' ? 20 : 24}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Progress'
        component={ProgressScreen}
        options={{
          tabBarLabel: "My Progress",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='google-analytics'
              color={color}
              size={Platform.OS === 'web' ? 20 : 24}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='account'
              color={color}
              size={Platform.OS === 'web' ? 20 : 24}
            />
          )
        }}
      />
      <Tab.Screen
        name='About'
        component={AboutScreen}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='cactus'
              color={color}
              size={Platform.OS === 'web' ? 20 : 24}
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
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: '100%'
  },
  box: {
    width: "90%",

    alignItems: "center",
    justifyContent: "center",

  },
})


export default MyTabs