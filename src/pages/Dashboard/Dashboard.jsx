import { useContext, useEffect, useState } from 'react'
import MainNavbar from '../../components/MainNavbar.jsx/MainNavbar'
import { AuthContext } from '../../context/AuthContext'
import { getSingleUser } from '../../services/userServices'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(user.id)
        if (result.status === 200) {
          setUserData(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard: ' + error.message)
      }
    }
    fetchUserData()
  }, [])

  return (
    <>
      <div>
        <MainNavbar />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
        <h2>Profile</h2>
        <p> Welcome {userData.first_name}</p>
      </div>
      <div>
        <h4>User Info:</h4>
        {
        userData?.first_name && <p className='first_name'> First Name: {userData.first_name}</p>
      }
        {
        userData?.last_name && <p className='last_name'> Last Name: {userData.last_name}</p>
      }
        {
        userData?.gender && <p className='gender'> Gender: {userData.gender}</p>
      }
        {
        userData?.email && <p className='email'> Email: {userData.email}</p>
      }
      </div>
    </>
  )
}

export default Dashboard
