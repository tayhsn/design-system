import { keyframes, styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  minWidth: '13.125rem',
  height: '2.75rem',

  padding: '0 $2',

  backgroundColor: '$gray900',
  borderRadius: 5,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[data-state=delayed-open][data-side=top] ': {
    animationName: slideDownAndFade,
  },
  '&[data-state=delayed-open][data-side=right]': {
    animationName: slideLeftAndFade,
  },
  '&[data-state=delayed-open][data-side=bottom]': {
    animationName: slideUpAndFade,
  },
  '&[data-state=delayed-open][data-side=left]': {
    animationName: slideRightAndFade,
  },

  p: {
    fontWeight: '$medium',
    lineHeight: '$short',
    fontFamily: '$details',
    letterSpacing: -0.09,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
