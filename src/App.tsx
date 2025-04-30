import './App.css'
import FacebookLoginButton from './components/FacebookLoginButton'

function App() {

  FB.getLoginStatus((response) => {
    console.log(response)
  })

  return (
    <>
    <FacebookLoginButton/>
    </>
  )
}

export default App
