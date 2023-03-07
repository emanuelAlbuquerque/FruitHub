import { EmailIcon } from 'assets/Icons/EmailIcon'
import { PasswordIcon } from 'assets/Icons/PasswordIcon'
import { InputText } from 'components/InputText'
import { FormControl, TitlePage } from 'styles/ContainerPages'
import { ContainerStylePageRegister } from './style'

import LogoImg from '../../assets/img/imgLogo.svg'

import { useState } from 'react'
import { Logo } from 'components/Logo'
import { Button } from 'components/Button'
import { UserIcon } from 'assets/Icons/UserIcon'

export const Register = () => {
  const [value, setValue] = useState({
    user: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(prev => {
      const newValue = {
        ...prev,
        [e.target.name]: e.target.value
      }

      return newValue
    })
  }

  return (
    <ContainerStylePageRegister>
      <Logo src={LogoImg} height={100} width={60} className="img_logo" />
      <TitlePage>Register</TitlePage>
      <FormControl>
        <InputText
          variant="inputForm"
          iconForm={<UserIcon />}
          placeholder="User:"
          name="user"
          value={value.user}
          onChange={handleChange}
        />
        <InputText
          variant="inputForm"
          iconForm={<EmailIcon />}
          placeholder="Email:"
          name="email"
          type="email"
          value={value.email}
          onChange={handleChange}
        />
        <InputText
          variant="inputForm"
          iconForm={<PasswordIcon />}
          placeholder="Password:"
          name="password"
          type="password"
          value={value.password}
          onChange={handleChange}
        />
        <InputText
          variant="inputForm"
          iconForm={<PasswordIcon />}
          placeholder="Confirm Password:"
          name="confirmPassword"
          type="password"
          value={value.confirmPassword}
          onChange={handleChange}
        />
      </FormControl>
      <Button onClick={() => console.log('Logado')} className="button">
        Register
      </Button>
    </ContainerStylePageRegister>
  )
}
