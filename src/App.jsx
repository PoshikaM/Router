import './App.css'
import About from './Components/About'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Contact" element={<Contact/>} />
      <Route exact path="*" element={<h1>404 Error Page Not Found</h1>} />
    </Routes>
    </div>
  )
}

export default App
