import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import FacebookGroupPosts from './components/FacebookGroupPosts'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Home from './pages/Home'

function App() {

  FB.getLoginStatus((response) => {
    console.log(response)
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/facebook" element={<FacebookGroupPosts appId='1806425476600064' groupId='639037939134393'/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
