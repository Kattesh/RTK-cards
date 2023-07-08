import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from './profile.tsx'

const meta = {
  title: 'Auth/Profile',
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
