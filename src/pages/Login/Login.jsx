import { useContext } from 'react'
import useForm from '../../hooks/useForm'
import { loginUserService } from '../../services/userServices'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const result = await loginUserService(data)
      if (result.status === 200) {
        const token = result.data.token
        loginUser(token)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <div>Login</div>
  )
}

export default Login
