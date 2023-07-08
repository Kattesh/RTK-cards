import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './forgot-password.module.scss'

const schema = z.object({
  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .nonempty('Enter email')
    .min(5, 'Email must be at least 5 characters'),
})

type Form = z.infer<typeof schema>

export const ForgotPassword = () => {
  const { control, handleSubmit } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  })

  const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'}>
        Forgot your password?
      </Typography>
      <form onSubmit={onSubmit}>
        <ControlledTextField control={control} name={'email'} label={'Email'} />
        <Typography className={`${s.description} ${s.emailInputPrompt}`} variant={'body2'}>
          {'Enter your email address and we will send you further \n instructions'}
        </Typography>
        <Button className={s.button} type={'submit'} fullWidth>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.description} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography className={s.link} variant={'link1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
