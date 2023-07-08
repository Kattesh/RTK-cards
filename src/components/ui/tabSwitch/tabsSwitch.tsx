import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import { Typography } from '../typography'

import s from './tabsSwitch.module.scss'

type TabType = {
  title: string
  value: string
  disabled?: boolean
}
type TabsPropsType = {
  label: string
  tabs: TabType[]
}
export const TabsSwitch: FC<TabsPropsType> = ({ tabs, label }) => {
  return (
    <>
      <Typography variant={'h1'} className={s.label}>
        {label}
      </Typography>
      <Tabs.Root className={s.root} defaultValue="tab1">
        <Tabs.List className={s.list} aria-label="tabs list">
          {tabs.map((tab, i) => (
            <Tabs.Trigger key={i} className={s.trigger} value={tab.value} disabled={tab.disabled}>
              <Typography variant={'body1'}>{tab.title}</Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </>
  )
}
