import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@tayhsn-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minus voluptatum deserunt aliquid debitis aut odio nihil quas autem saepe incidunt nulla porro iste necessitatibus impedit vel rem, ipsum ex.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
