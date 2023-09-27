import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Favs from './Pages/Favs'
import Dentist from './Pages/Dentist'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useDentistStates } from './Context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { state } = useDentistStates();

  const bodyClass = state.theme ? '' : 'dark-theme';

  return (
    <div className="App">

        <Navbar />
        <div className={bodyClass}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dentist/:id' element={<Dentist />} />
          <Route path='/favs' element={<Favs />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        </div>
        <Footer />
        <ToastContainer />

    </div>
  )
}

export default App
