import './App.css'
import FacebookGroupPosts from './components/FacebookGroupPosts'

function App() {

  FB.getLoginStatus((response) => {
    console.log(response)
  })

  return (
    <>
    <FacebookGroupPosts appId='1806425476600064' groupId='639037939134393'/>
    </>
  )
}

export default App
