import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'
import doctorImg from "/images/doctor.jpg?url";
import { toast } from 'react-toastify';
import styles from './Card.module.scss'

const Card = ({ dentist }) => {

  const { state, dispatch } = useDentistStates()

  const isFavorite = state.favs.some(fav => fav.id === dentist.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(dentist); // Llama a la función para eliminar favorito
    } else {
      addFavorite(dentist); // Llama a la función para agregar favorito
    }
  };

  const addFavorite = (dentist) => {
    const updatedFavs = [...state.favs, dentist];
    localStorage.setItem('favs', JSON.stringify(updatedFavs)); // Actualiza el localStorage
    toast.success('Agregado a Favoritos', { autoClose: 2000 });
    dispatch({ type: 'ADD_FAV', payload: dentist });
  };

  const removeFavorite = (dentist) => {
    const updatedFavs = state.favs.filter(fav => fav.id !== dentist.id);
    localStorage.setItem('favs', JSON.stringify(updatedFavs)); // Actualiza el localStorage
    toast.warn('Eliminado de Favoritos', { autoClose: 2000 });
    dispatch({ type: 'REMOVE_FAV', payload: dentist });
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <Link className={styles.aCard} to={'/dentist/' + dentist.id}>
          <div className={styles.divImgDoctor}>
            <img className={styles.imgDoctor} src={doctorImg} alt="imagen de un doctor" />
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