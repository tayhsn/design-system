import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  Toast,
  ToastProps,
  ToastProvider,
  ToastViewport,
} from '@tayhsn-ui/react'
import { useState } from 'react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(false)

      args.open = isOpen
      args.onOpenChange = setIsOpen

      return (
        <ToastProvider swipeDirection="right" duration={4000}>
          <Button onClick={() => setIsOpen(true)}>Click to schedule</Button>
          {Story()}

          <ToastViewport />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    content: 'Quarta-feira, 23 de Outubro ás 16h',
  },
}
