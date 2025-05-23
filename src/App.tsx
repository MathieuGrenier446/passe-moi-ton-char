import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import FacebookGroupPosts from './components/FacebookGroupPosts'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/facebook" element={<FacebookGroupPosts appId='1806425476600064' groupId='639037939134393'/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
