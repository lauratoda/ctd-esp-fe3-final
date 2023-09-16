import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'
import doctorImg from "/images/doctor.jpg?url";

const Card = ({ dentist }) => {

  const { state, dispatch } = useDentistStates()

  const isFavorite = state.favs.some(fav => fav.id === dentist.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAV', payload: dentist });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <Link to={'/dentist/' + dentist.id}>
          <div className="divImgDoctor">
            <img className="imgDoctor" src={doctorImg} alt="imagen de un doctor" />
          </div>
          <h3>{dentist.name}</h3>
          <h3>{dentist.username}</h3>
        </Link>
        <button onClick={toggleFavorite} style={{ marginBottom: '22px', width: '80%' }} >
          {isFavorite ? 'REMOVE FAV' : 'ADD FAV'}
        </button>
      </div>
    </div>
  )
}

export default Card