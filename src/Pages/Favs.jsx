import React from 'react'
import { useDentistStates } from '../Context/Context'
import Card from '../Components/Card'

const Favs = () => {

const {state, dispatch} = useDentistStates()

const addToFavs = (fav) => {
  // Verificar si el dentista ya está en localStorage antes de agregarlo
  if (!state.favs.some(f => f.id === fav.id)) {
    dispatch({ type: 'ADD_FAV', payload: fav });
  } else {
    alert('Este dentista ya está en tus favoritos.');
  }
}

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map(fav => <Card dentist={fav} key={fav.id}/>)}
      </div>
    </>

  )
}

export default Favs