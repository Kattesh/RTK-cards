import type { Meta, StoryObj } from '@storybook/react'

import AvatarPic from '../../../assets/avatar-test/Avatar-test.svg'

import { Avatar } from './avatar.tsx'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: AvatarPic,
  },
}
