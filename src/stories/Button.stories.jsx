import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../components'

storiesOf('My Button', module)
    .add('My Button - contained variant, dark colour ', () => {
        return <Button colour='dark' >I'm pressable</Button>
    })
    .add('My Button - outlined variant, dark colour ', () => {
        return <Button variant='outline' colour='dark'>I'm pressable</Button>
    })
    .add('My Button - contained variant orange', () => {
        return <Button>I'm pressable</Button>
    })
    .add('My Button - outlined variant orange ', () => {
        return <Button variant='outline'>I'm pressable</Button>
    })