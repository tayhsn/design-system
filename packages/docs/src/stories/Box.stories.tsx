import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@tayhsn-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Lorem ipsum dolor sit amet....</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
