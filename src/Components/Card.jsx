import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'

const Card = ({dentist}) => {

  const {dispatch} = useDentistStates()
  const addFav = () => {
    dispatch ({type: 'ADD_FAV', payload: dentist})

  }


  return (
    <div>
      <Link to= {'/dentist/' + dentist.id}>
        <h3>Nombre: {dentist.name}</h3>
        <h3>Nombre de Usuario: {dentist.username}</h3>
      </Link>
      <button onClick={addFav}>Favorito</button>
    </div>
  )
}

export default Card