import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/homepage'
import Navbar from './components/navbar'
import Members from './pages/Members'
import PayPalButton from './pages/Paypal'
import ProtectedRoute from './ProtectedRoute'
import SendResedPassword from './pages/sendResetPassword'
import ResetPasswordForm from './pages/resetPassword'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="/send-reset-password" element={<SendResedPassword/>} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          <Route element={<ProtectedRoute/>}>
            <Route path='/members' element={<Members/>} />
            <Route path='/' element={<PayPalButton/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App