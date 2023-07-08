import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './register-form.module.scss'

const schema = z
  .object({
    email: z
      .string()
      .trim()
      .email('Invalid email address')
      .nonempty('Enter email')
      .min(5, 'Email must be at least 5 characters'),
    password: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type Form = z.infer<typeof schema>

export const RegisterForm = () => {
  const { handleSubmit, control } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  })

  const onSubmit = handleSubmit(data => alert(data))

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'}>
        Sign Up
      </Typography>
      <form onSubmit={onSubmit}>
        <ControlledTextField
          control={control}
          name={'email'}
          label={'Email'}
          containerProps={{ className: s.textField }}
        />
        <ControlledTextField
          control={control}
          name={'password'}
          label={'Password'}
          type={'password'}
          containerProps={{ className: s.textField }}
        />
        <ControlledTextField
          control={control}
          name={'confirmPassword'}
          label={'Confirm Password'}
          type={'password'}
          containerProps={{ className: s.textField }}
        />
        <Button type={'submit'} fullWidth className={s.button}>
          Sign Up
        </Button>
      </form>
      <Typography variant={'body2'} className={s.description}>
        Already have an account?
      </Typography>
      <Typography as={'a'} variant={'link1'} className={s.link}>
        Sign In
      </Typography>
    </Card>
  )
}
