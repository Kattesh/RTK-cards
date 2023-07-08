import Email from '../../../assets/icons/email.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import s from './check-email.module.scss'

type Props = {
  email: string
}
export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Check your email
      </Typography>
      <div className={s.icon}>
        <Email />
      </div>
      <Typography variant="body2" className={s.instructions}>
        {`We’ve sent an Email with instructions to \n ${email}`}
      </Typography>
      <Button as={'a'} href={'/sing-in'} className={s.signInLink}>
        Back to Sign in
      </Button>
    </Card>
  )
}
