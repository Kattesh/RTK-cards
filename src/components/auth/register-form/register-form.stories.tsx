import type { Meta, StoryObj } from '@storybook/react'

import { RegisterForm } from './register-form.tsx'

const meta = {
  title: 'Auth/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
