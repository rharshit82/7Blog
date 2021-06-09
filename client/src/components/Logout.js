import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = ({ setIsAuth }) => {
  const history = useHistory()
  useEffect(() => {
    localStorage.removeItem('userInfo')
    setIsAuth(false)
    history.push('/login')
  }, [history, setIsAuth])
  return <>Hi</>
}

export default Logout
