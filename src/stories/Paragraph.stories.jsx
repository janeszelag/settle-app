import React from 'react'
import { storiesOf } from '@storybook/react'

import { Paragraph } from '../components'

storiesOf('Paragraph', module)
  .add('Paragraph - small', () => {
    return <Paragraph size='small'>This is a paragraph in size small.</Paragraph>
  })
  .add('Paragraph - medium', () => {
    return <Paragraph align='left'>This is a paragraph in size medium.</Paragraph>
  })
  .add('Paragraph - large', () => {
    return <Paragraph size='large'>This is a paragraph in size large.</Paragraph>
  })
  .add('Paragraph - large, bold', () => {
    return <Paragraph size='large' bold={true}>This is a paragraph in size large and bold.</Paragraph>
  })
