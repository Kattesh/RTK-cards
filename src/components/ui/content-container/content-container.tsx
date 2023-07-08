import { FC, ReactNode } from 'react'

import s from './content-container.module.scss'

export const ContentContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={s.container}>{children}</div>
}
