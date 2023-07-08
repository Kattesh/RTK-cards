import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './new-password.module.scss'
const schema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
})

type Form = z.infer<typeof schema>

type Props = {
  onSubmit: (data: Form) => void
}

export const NewPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<Form>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
    },
  })

  const onSubmit = handleSubmit(props.onSubmit)

  return (
    <>
      <Card className={s.card}>
        <Typography variant="large" className={s.title}>
          Create new password
        </Typography>
        <form onSubmit={onSubmit}>
          <ControlledTextField
            placeholder={'Password'}
            name={'password'}
            control={control}
            type={'password'}
            containerProps={{ className: s.input }}
          />
          <Typography variant="caption" className={s.caption}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button fullWidth type={'submit'}>
            Create New Password
          </Button>
        </form>
      </Card>
    </>
  )
}
