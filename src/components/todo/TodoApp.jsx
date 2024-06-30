import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className='TodoApp'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LoginComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/welcome/:username' element={<WelcomeComponent />} />
          <Route path='/todos' element={<ListTodosComponent />} />

          <Route path='*' element={<ErrorComponent />} />
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
      <div>
        Your todos. <Link to='/todos'>Go here</Link>
      </div>
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

function ListTodosComponent() {

  const today = new Date()
  const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

  const todos = [
    {id: 1, descrpition: 'Learn AWS', done: false, targetDate:targetDate},
    {id: 2, descrpition: 'Learn Full Stack Development', done: false, targetDate:targetDate},
    {id: 3, descrpition: 'Learn DevOps', done: false, targetDate:targetDate}
  ]

  return(
    <div className='ListTodos'>
      <h1>Things You want to do!</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Descrpition</td>
              <td>Is Done?</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(
                todo => (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.descrpition}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toLocaleDateString()}</td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}