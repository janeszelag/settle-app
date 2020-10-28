import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../components'

storiesOf('Button', module)
  .add('Button - contained variant, dark colour ', () => {
    return <Button colour='dark' >I'm pressable</Button>
  })
  .add('Button - outlined variant, dark colour ', () => {
    return <Button variant='outline' colour='dark'>I'm pressable</Button>
  })
  .add('Button - contained variant orange', () => {
    return <Button>I'm pressable</Button>
  })
  .add('Button - outlined variant orange ', () => {
    return <Button variant='outline'>I'm pressable</Button>
  })