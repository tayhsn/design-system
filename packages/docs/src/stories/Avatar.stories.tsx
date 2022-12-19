import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@tayhsn-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/tayhsn.png',
    alt: 'Tayanne Novais',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
