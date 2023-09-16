import React from 'react'
import { useDentistStates } from '../Context/Context'
import Card from '../Components/Card'
import { useEffect } from 'react'

const Home = () => {

    const {state, dispatch} = useDentistStates()

    useEffect(() => {
      if (state.showAlreadyInFavoritesMessage) {
        // Ocultar el mensaje después de 3 segundos (ajusta el tiempo según tus necesidades)
        setTimeout(() => {
          dispatch({ type: 'HIDE_ALREADY_IN_FAVORITES_MESSAGE' });
        }, 3000);
      }
    }, [state.showAlreadyInFavoritesMessage, dispatch]);


  return (
    <main  className="">
      <h1>Home</h1>
      {state.showAlreadyInFavoritesMessage && (
        <p style={{ color: 'red', textAlign: 'center' }}>"Este elemento ya está en tus favoritos"</p>
      )}
      <div className='card-grid'>
        {state.dentists.map(dentist => (<Card dentist={dentist} key={dentist.id}/>))}
    </div>
    </main>
  )  
}

export default Home