import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Favs from './Pages/Favs'
import Dentist from './Pages/Dentist'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {


  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dentist/:id' element={<Dentist/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
