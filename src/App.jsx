import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from '../../KacchiBhaiCopy/src/Components/Footer/Footer.jsx'

function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
