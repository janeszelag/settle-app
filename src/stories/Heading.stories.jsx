import React from 'react'
import { storiesOf } from '@storybook/react'

import { Heading } from '../components'

storiesOf('Heading', module)
  .add('Heading - h1', () => {
    return <Heading level='h1'>Heading Text</Heading>
  })
  .add('Heading - h2', () => {
    return <Heading level='h2'>Heading Text</Heading>
  })
  .add('Heading - h3', () => {
    return <Heading level='h3'>Heading Text</Heading>
  })
  .add('Heading - h4', () => {
    return <Heading level='h4'>Heading Text</Heading>
  })