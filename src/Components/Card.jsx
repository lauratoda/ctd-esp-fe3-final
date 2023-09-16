import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'
import doctorImg from "/images/doctor.jpg?url";

const Card = ({dentist}) => {

  const {dispatch} = useDentistStates()
  
  const addFav = () => {
    dispatch ({type: 'ADD_FAV', payload: dentist})

  }

  return (    
    <div className="card-container">
      <div className="card">
        <Link to= {'/dentist/' + dentist.id}>
          <div className="divImgDoctor">
            <img className="imgDoctor" src={doctorImg}  alt="imagen de un doctor"/>
          </div>
          <h3>{dentist.name}</h3>
          <h3>{dentist.username}</h3>
        </Link>
        <button onClick={addFav} className="favButton">Favorito</button>
      </div>      
    </div>
  )
}

export default Card