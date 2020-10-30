import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { Card, Paragraph } from '../components'

storiesOf('Card', module)
  .add('Card - default variant', () => {
    return <View style={{ width: 300, height: 200 }}>
      <Card fullHeight={true} >
        <Paragraph>This is a card.</Paragraph>
        <Paragraph>The card has vertical and horizontal padding.</Paragraph>
        <Paragraph bold={true}>This is the default variant.</Paragraph>
      </Card>
    </View>

  })
  .add('Card - blue variant', () => {
    return <View style={{ width: 300, height: 200 }}>
      <Card variant='blue' fullHeight={true}>
        <Paragraph>This is a card.</Paragraph>
        <Paragraph>The card has vertical and horizontal padding.</Paragraph>
        <Paragraph bold={true}>This is the blue variant.</Paragraph>
      </Card>
    </View>

  })
  .add('Card - orange variant', () => {
    return <View style={{ width: 300, height: 200 }}>
      <Card variant='orange' fullHeight={true}>
        <Paragraph>This is a card.</Paragraph>
        <Paragraph>The card has vertical and horizontal padding.</Paragraph>
        <Paragraph bold={true}>This is the orange variant.</Paragraph>
      </Card>
    </View>

  })