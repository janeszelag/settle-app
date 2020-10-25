import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../components/Button'

storiesOf('My Button', module)
    .add('My Button - contained variant, dark mode ', () => {
        return <Button mode='dark' >I'm pressable</Button>
    })
    .add('My Button - outlined variant, dark mode ', () => {
        return <Button variant='outline' mode='dark'>I'm pressable</Button>
    })
    .add('My Button - contained variant', () => {
        return <Button>I'm pressable</Button>
    })
    .add('My Button - outlined variant ', () => {
        return <Button variant='outline'>I'm pressable</Button>
    })