import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
 const onSuccess = (response) =>{
  console.log('Login success:', response)
  navigate('/')
 }

 const onFailure = (response) =>{
  console.log('Login Failed:', response)
 }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className='text-4xl font-bold text-orange-500 mb-6'>
        Iniciar sesión
      </h1>
      
      <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText='Sign in'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      />
      

    </div>
  )
}
export default Login