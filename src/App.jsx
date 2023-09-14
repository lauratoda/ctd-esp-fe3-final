import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Favs from './Pages/Favs'
import Dentist from './Pages/Dentist'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dentist/:id' element={<Dentist/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
