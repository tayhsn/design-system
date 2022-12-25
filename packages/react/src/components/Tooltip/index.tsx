import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { Text } from '../Text'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps {
  message: string
  children: ReactNode
}

export function Tooltip({ message, children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Root {...props}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal>
        <TooltipContent sideOffset={10}>
          <Text size="sm">{message}</Text>
          <TooltipArrow />
        </TooltipContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}

Tooltip.displayName = 'Tooltip'

export const TooltipProvider = TooltipPrimitive.Provider
