import { EmailIcon } from 'assets/Icons/EmailIcon'
import { PasswordIcon } from 'assets/Icons/PasswordIcon'
import { InputText } from 'components/InputText'
import { FormControl, TitlePage } from 'styles/ContainerPages'
import { ContainerStylePageLogin } from './style'

import LogoImg from '../../assets/img/imgLogo.svg'

import { useState } from 'react'
import { Logo } from 'components/Logo'
import { Button } from 'components/Button'

export const Login = () => {
  const [value, setValue] = useState({
    email: '',
    password: ''
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
    <ContainerStylePageLogin>
      <Logo src={LogoImg} height={100} width={60} className="img_logo" />
      <TitlePage>Login</TitlePage>
      <FormControl>
        <InputText
          variant="inputForm"
          iconForm={<EmailIcon />}
          placeholder="Email:"
          name="email"
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
      </FormControl>
      <Button onClick={() => console.log('Logado')} className="button">
        Login In
      </Button>
      <div className="login_next">
        <a>Cadastra-se!</a>
        <a>Esqueci minha Senha</a>
      </div>
    </ContainerStylePageLogin>
  )
}
