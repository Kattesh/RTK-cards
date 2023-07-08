import { Meta, StoryObj } from '@storybook/react'

import { SliderRange } from './slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: SliderRange,
  tags: ['autodocs'],
} satisfies Meta<typeof SliderRange>

export default meta
type Story = StoryObj<typeof meta>

export const TabSwitchDefault: Story = {
  args: {
    max: 100,
    min: 0,
    step: 1,
    rangeValue: [0, 100],
  },
}
