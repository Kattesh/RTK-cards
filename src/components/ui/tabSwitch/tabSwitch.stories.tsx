import { Meta, StoryObj } from '@storybook/react'

import { TabsSwitch } from './tabsSwitch.tsx'

const meta = {
  title: 'Components/TabSwitch',
  component: TabsSwitch,
  tags: ['autodocs'],
} satisfies Meta<typeof TabsSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const TabSwitchDefault: Story = {
  args: {
    label: 'Tab-Switcher',
    tabs: [
      { value: 'tab1', title: 'Switcher', disabled: false },
      { value: 'tab2', title: 'Switcher', disabled: false },
      { value: 'tab3', title: 'Switcher', disabled: false },
    ],
  },
}
