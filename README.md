## Settle

This repo is a WIP 🔨 cross-platform native application/progressive web app made with expo. I am building version 2 of a previous project of mine called Settle which aims to help its users manage and cope with the symptoms of Test Anxiety.

## Development Log 👁👄👁

- Aiming to keep track of technical decisions/things I learn along the way here

### 11/02/2020 🍂

- Built `Card` component, only three variants currently but I can add more
- Chose to go with react-navigation for routing, the web support is experimental but so far it's working
- For iOS and android there is a bottom nav made with `createBottomTabNavigator`, great thing about expo is it comes with `react-native-vector-icons`, allows me to use the `MaterialCommunityIcons` for my nav bars (and elsewhere in the project, may have to source more unique icons for some of my pages though)
- For web there is a top nav made with `createMaterialTopTabNavigator` because a bottom nav looked weird, the cool thing is, they use the same code 💥, depending on the platform I just define the `TabNavigator` as either bottom or MaterialTop
- I need to play around with the animations in web though bc right now its a little much
- I plan to have a `StackNavigator` within the `HomeScreen` with the different pages for meditations, workthroughs, thinking traps, what is test anxiety, and another `StackNavigator` within the `ProfileScreen` for the progress stuff, settings, profile info and log out options.....will keep working on this now to set up these routes and see how the `back` functionality works
- Need to research authentication flows and how that works in a native app
- I think I will make some fixtures of dummy data and build the UI that way before making any data calls anyway so I think authentication will be at the very end but it's good I start learning about it now
- I plan to do the static pages first, I will probably want some kind of `expand-collapse component`, I don't know yet if I should build that myself....most likely I will go with a library (maybe UI-kittens)
- Also need to look at responsive RN libraries, I could build my own `box` for sure but I don't think I want to build my own `flex-grid` type of component (I can always go back and make my own to practise)

### 10/28/2020 🍁

- Built `Heading` and `Paragraph` components using `styled-componets`
- With `Heading`, because the font size relies on the hook `useWindowDimensions` (no media queries in RN), the styled component has to be declared within the functional component, and not outside as is usually preferred...might need to read up on this but of course a hook can only be called within a functional component so I see no way around right now..interestingly this would be the same for StyleSheets and those `react-native-web-hooks` I think, would be good to find an example and confirm
- Will move onto card next, and start looking into expo and fonts

### 10/27/2020 🍁

- Tried refactoring with `styled components` but some of the functionality was lost when it came to the hooks from react-native-web-hooks (which I am using to create pseudo class styles for the buttons when on web), their examples use the `StyleSheet API` and I suspect the `useHover` ect. are not working properly with the `styled components`, the state is not being updated somehow...or maybe I am passing things in the wrong way...will mull it over
- For future components that are simpler or don't have web specific styles I could try again
- Set up jest following expo's guide and ran into a problem, kept getting `SyntaxError: Cannot use import statement outside a module`
- After trying out a few different online solutions, I eventually figured out that it was because my Button file was `.jsx` 💀🤢, followed [this article](https://levelup.gitconnected.com/setting-up-jest-under-expo-to-work-with-jsx-files-ba35a51bc25a) and added a transform to my jest configuration...I have always used `.jsx` when developing in react so I found this all very weird and annoying
- Added a `npm run test:u` script that removes old snapshots
- Added `Prop Types` to `Button` also
- Ready to move onto making basic `Card`, `Heading` and `Paragraph` components...need to start looking at how to load fonts and icons using expo
- Might start looking into an already built component libary like UI kittens (not native paper bc it sucks), will have to theme them though
- I also want to create a bottom nav component with `react-navigation`....I think I am still confused on how that would work on web...need to read up on this more, would I have a seperate nav for web? can it use navigation orrrrr?

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
