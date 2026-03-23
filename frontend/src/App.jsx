import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import ResetPasswordRequestScreen from './Screens/ResetPasswordRequestScreen/ResetPasswordRequestScreen'
import AuthContextProvider from './context/AuthContext'


const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/' element={<LoginScreen />} />
      <Route 
        path="/reset-password-request" 
        element={<ResetPasswordRequestScreen/>}
      />
      
        <Route 
          path='/home' 
        />
    </Routes>
  )
}

export default App