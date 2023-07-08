import { useState } from 'react'

import { useForm } from 'react-hook-form'

import Edit from '../../../assets/icons/edit.tsx'
import { Avatar } from '../../ui/avatar'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './profile.module.scss'

type ProfilePropsType = {
  avatarSrc?: string
  name?: string
  email?: string
}

export const Profile = ({
  avatarSrc,
  name = 'Ivan',
  email = 'example@gmail.com',
}: ProfilePropsType) => {
  const [editMode, setEditMode] = useState(false)

  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: name,
    },
  })
  const changeName = handleSubmit(data => {
    alert(JSON.stringify(data))
    setEditMode(false)
  })

  const profileInfoRender = !editMode ? (
    <>
      <div className={s.nameContainer}>
        <Typography className={s.name} variant={'h1'}>
          {name}
        </Typography>
        <Edit
          className={s.edit}
          onClick={() => {
            setEditMode(true)
          }}
        />
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button variant={'secondary'} className={s.logoutButton}>
        Logout
      </Button>
    </>
  ) : (
    <form onSubmit={changeName}>
      <ControlledTextField
        label={'Nickname'}
        className={s.changeNameField}
        control={control}
        name={'name'}
      />
      <Button className={s.changeNameButton} fullWidth type={'submit'} onClick={changeName}>
        Save Changes
      </Button>
    </form>
  )

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'}>
        Personal Information
      </Typography>
      <Avatar src={avatarSrc} size={96} />
      {profileInfoRender}
    </Card>
  )
}
