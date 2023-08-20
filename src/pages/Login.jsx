import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  return (
    <>
    <LoginForm/>
    <p className='text-center mt-3'>Don't you have an account? <span className='text-danger' role='button' onClick={()=>navigate("/register")}>Sign Up</span></p>
  </>)
}

export default Login