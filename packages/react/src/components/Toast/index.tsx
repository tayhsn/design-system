import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Close, ToastContainer, ToastViewportStyled } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  content: string
}

export function Toast({ title, content, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastPrimitive.Title asChild>
        <Heading size="sm">{title}</Heading>
      </ToastPrimitive.Title>

      <ToastPrimitive.Description asChild>
        <Text size="sm">{content}</Text>
      </ToastPrimitive.Description>

      <Close asChild>
        <X weight="bold" size={20} color="#A9A9B2" />
      </Close>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'

export const ToastProvider = ToastPrimitive.Provider

export const ToastViewport = ToastViewportStyled
