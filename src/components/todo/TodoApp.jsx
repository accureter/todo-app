import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className='TodoApp'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LoginComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}></Route>
          <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
          <Route path='*' element={<ErrorComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function LoginComponent() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailedMessage, setShowFailedMessage] = useState(false)

  const navigate = useNavigate()

  function handleSubmit() {
      if (username === 'accureter' && password === 'password') {
        setShowSuccessMessage(true)
        setShowFailedMessage(false)
        navigate(`/welcome/${username}`)
      }else {
        setShowFailedMessage(true)
        setShowSuccessMessage(false)
      }
  }

  return(
    <div className='Login'>
      <h1>Time to Login!</h1>
      {showSuccessMessage && <div className='successMessage'>Authenticated Sucessfully</div>}
      {showFailedMessage && <div className='errorMessage'>Authentication Failed. Please check your credentials.</div>}
      <div className='LoginForm'>

        <div>
          <label>User Name</label>
          <input type='text' name='username' placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>

        <div>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>

        <div>
          <button type='button' name='login' onClick={handleSubmit}>Login</button>
        </div>

      </div>
    </div>
  )
}

function WelcomeComponent() {

  const { username } = useParams()

  return(
    <div className='Welcome'>
      <h1>Welcome {username}</h1>
      <div>Welcome Component</div>
    </div>
  )
}

function ErrorComponent() {
  return(
    <div className='Error'>
      <h1>404 Error</h1>
    </div>
  )
}