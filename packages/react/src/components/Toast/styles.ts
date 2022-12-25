import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastViewportStyled = styled(Toast.Viewport, {
  '--viewport-padding': 25,

  position: 'fixed',
  right: 32,
  bottom: 32,
})

export const ToastContainer = styled(Toast.Root, {
  boxSizing: 'border-box',

  width: '22.5rem',
  height: '5.125rem',
  padding: '$3 $5',

  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: 6,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',

  '&[data-state=open]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state=closed]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe=cancel]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe=end]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  h1: {
    color: '$white',
    fontWeight: '$bold',
    lineHeight: '$base',
  },

  p: {
    color: '$gray100',
  },
})

export const Close = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  right: 20.38,
  top: 20.38,

  cursor: 'pointer',
})
