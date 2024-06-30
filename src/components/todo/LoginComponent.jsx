import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showFailedMessage, setShowFailedMessage] = useState(false)
  
    const navigate = useNavigate()

    const authContext = useAuth()
  
    function handleSubmit() {
        if (authContext.login(username, password)) {
          navigate(`/welcome/${username}`)
        }else {
          setShowFailedMessage(true)
        }
    }
  
    return(
      <div className='Login'>
        <h1>Login!</h1>
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

export default LoginComponent