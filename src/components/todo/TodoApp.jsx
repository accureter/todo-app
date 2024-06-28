import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className='TodoApp'>
      Todo Management Application
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  )
}

function LoginComponent() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailedMessage, setShowFailedMessage] = useState(false)

  function handleSubmit() {
      if (username==='accureter' && password === 'password') {
        setShowSuccessMessage(true)
        setShowFailedMessage(false)
      }else {
        setShowFailedMessage(true)
        setShowSuccessMessage(false)
      }
  }

  return(
    <div className='Login'>
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
  return(
    <div className='Welcome'>
      Welcome Component
    </div>
  )
}