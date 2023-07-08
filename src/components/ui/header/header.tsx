import Logo from '../../../assets/icons/logo.tsx'
import { Avatar } from '../avatar'
import { Button } from '../button'
import { ContentContainer } from '../content-container'
import { Typography } from '../typography'

import s from './header.module.scss'

type HeaderPropsType = {
  isLoggedIn: boolean
  name?: string
  avatarSrc?: string
}

export const Header = ({ isLoggedIn = true, name = 'Ivan', avatarSrc }: HeaderPropsType) => {
  const loginOrAvatarContent = !isLoggedIn ? (
    <Button>Sign In</Button>
  ) : (
    <div className={s.avatarContainer}>
      <Typography className={s.name} variant={'subtitle1'}>
        {name}
      </Typography>
      <Avatar src={avatarSrc} />
    </div>
  )

  return (
    <div className={s.header}>
      <ContentContainer>
        <div className={s.headerContainer}>
          <Logo />
          {loginOrAvatarContent}
        </div>
      </ContentContainer>
    </div>
  )
}
