import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '../../../react/src/index'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gustavobreack3257.png',
    alt: 'Gustavo Costa',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
}
