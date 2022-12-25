import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@tayhsn-ui/react'
import { CalendarX } from 'phosphor-react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    message: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Box as="label" css={{ display: 'flex' }}>
            {Story()}
          </Box>
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    message: '26 de Outubro - Disponível',
    children: (
      <Button>
        <CalendarX size={22} />
        Hover me
      </Button>
    ),
  },
}
