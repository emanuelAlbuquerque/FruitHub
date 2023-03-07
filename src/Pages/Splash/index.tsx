import { ContainerStylePageSplash } from './style'
import { Logo } from '../../components/Logo'
import LogoImg from '../../assets/img/imgLogo.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export const Splash = () => {
  let navigate = useNavigate()
  const [seconds, setSeconds] = useState(10)
  const passingTime = setInterval(Time, 1000)

  function Time() {
    if (seconds === 5) {
      navigate('/login')
      clearInterval(passingTime)
    }
    setSeconds(seconds - 1)
  }

  return (
    <ContainerStylePageSplash seconds={seconds}>
      <Logo src={LogoImg} />
      <h1>Fruit Hub</h1>
    </ContainerStylePageSplash>
  )
}
