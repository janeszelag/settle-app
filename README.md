## Settle

This repo is a WIP 🔨 cross-platform native application/progressive web app made with expo. I am building version 2 of a previous project of mine called Settle which aims to help its users manage and cope with the symptoms of Test Anxiety.

## Development Log 👁👄👁

- Aiming to keep track of technical decisions/things I learn along the way here

### 10/26/2020 🍁

- Continued styling `Button`, including web specific styles
- React Native StyleSheet API has no concept of hover, active, visited, focused, used a library called [react-native-web-hooks](https://www.npmjs.com/package/react-native-web-hooks) to create pseudo class styles (via [this guide](https://blog.expo.io/css-pseudo-class-effects-in-expo-for-web-56649f88eb6b)), seems to be working great 😀
- Before moving onto tests, I think I will try to refactor Button using `styled components` as expo is suppose to support them (and I love them💕)
- Also want to add more accessibilty/understand how it works with `Pressable` and RN in general
- Will need to install an android emulator to check styles on andriod since my own phone is iOS, not sure if it is worth installing an iOS simulator though...
- After installed I want to look at the `android_ripple` prop in `Pressable`

### 10/25/2020 🍁

- Initialized the project using expo's guide, using npm instead of yarn
- Plan on making a small UI library first to practise my front-end skills/better learn react native
- Will be using Storybook to develop my components, followed the [expo guide](https://github.com/expo/examples/tree/master/with-storybook) on using Storybook
- Decided to go with the first option in the guide: running it via Storybook CLI (versus expo CLI), chose this as I am more familiar with Storybook-React as oppose to Storybook-React native
- Will see how this plays out when I add web support as I have yet to do that
- Had to install `@core.js` as a devDependency which was not in the docs 👀 (maybe they assume I've already added web support)
- Created a basic `Button` using the new react native [`Pressable` component](https://reactnative.dev/docs/pressable): "Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children"
- I didn't like RN's button component, hate that the label is in all caps, could have went with `TouchableOpacity` but RN is pushing the new `Pressable API`
- Need to explore the other props of `Pressable` like `onLongPress` ect. to figure out focus states...
- Before moving on to making more components I want to explore tesing with react native....would be good to look at something like Native Paper for example of tests/libraries
- Styling wise I am confused why `minWidth`/`auto width` wasn't working for me at larger view ports....says it is supported by react native web...🤷🏼‍♀️
