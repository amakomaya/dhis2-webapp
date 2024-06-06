import { Outlet } from 'react-router-dom'
import './assets/App.css'
import Footer from './home/Footer'


function App() {
  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
