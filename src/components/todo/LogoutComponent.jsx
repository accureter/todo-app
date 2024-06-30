import { useAuth } from "./security/AuthContext"

function LogoutComponent() {

  const authContext = useAuth()

  authContext.logout()

    return(
      <div className='Logout'>
        <h1>You are logged out!</h1>
        <div>
          Thank's for using app.
        </div>
      </div>
    )
}

export default LogoutComponent