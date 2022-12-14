import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { registerUserService } from '../../services/userServices'

const Signup = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  })

  return (
    <div>Signup</div>
  )
}

export default Signup
// holi 🐢
