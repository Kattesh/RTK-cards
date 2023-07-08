import { ComponentProps } from 'react'

import avatar from '../../../assets/avatar-test/Avatar-test.svg'

import s from './avatar.module.scss'

export type AvatarProps = {
  name?: string
  src: ComponentProps<'img'>['src']
  size?: ComponentProps<'img'>['width']
}

export const Avatar = ({ name, src = avatar, size = 36 }: AvatarProps) => {
  return <img className={s.avatar} src={src} alt={`${name} avatar`} width={size} height={size} />
}
