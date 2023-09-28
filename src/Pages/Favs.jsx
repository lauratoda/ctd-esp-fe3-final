import React from 'react'
import { useDentistStates } from '../Context/Context'
import Card from '../Components/Card'
import { toast } from 'react-toastify';
import styles from './Favs.module.scss'

const Favs = () => {

  const { state, dispatch } = useDentistStates()

  const removeAllFavorites = () => {
    // Elimina todos los favoritos del estado
    dispatch({ type: 'REMOVE_ALL_FAVS' });

    // Elimina todos los favoritos del almacenamiento local
    localStorage.removeItem('favs');

    // Muestra un mensaje o realiza cualquier otra acción necesaria
    toast.info('Todos los favoritos han sido eliminados', { autoClose: 2000 });
  };


  return (
    <div className={styles.favContainer}>
      <h1>Favs</h1>
      <div className="card-grid">
        {state.favs.length === 0 ? (
          <p>No se han seleccionado favoritos.</p>
        ) : (
          state.favs.map(fav => <Card dentist={fav} key={fav.id} />)
        )}
      </div>
      <div className={styles.favButtonContainer}>
        {state.favs.length > 0 && (
          <button className={styles.favButton} onClick={removeAllFavorites}>
            Eliminar todos los favoritos
          </button>
        )}
      </div>
    </div>
  )
}


export default Favs

