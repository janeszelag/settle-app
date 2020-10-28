import React from 'react'
import { storiesOf } from '@storybook/react'

import { Paragraph } from '../components'

storiesOf('Paragraph', module)
  .add('Paragraph - small', () => {
    return <Paragraph size='small'>wow</Paragraph>
  })
  .add('Paragraph - medium', () => {
    return <Paragraph align='left'>wow</Paragraph>
  })
  .add('Paragraph - large', () => {
    return <Paragraph size='large'>wow</Paragraph>
  })
  .add('Paragraph - large, bold', () => {
    return <Paragraph size='large' bold={true}>wow</Paragraph>
  })
