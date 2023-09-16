import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDentistStates } from '../Context/Context'

const Dentist = () => {

    const {state, dispatch} = useDentistStates()
    const {id} = useParams()
    const {name, phone, email, website} = state.dentist
    console.log(id)
    const url = 'https://jsonplaceholder.typicode.com/users/'+id

    
    useEffect (() => {
      fetch(url)      
      .then(res=> res.json())
      .then(data => {
        dispatch({type: 'GET_DENTIST', payload: data})
      })
    }, [])    

  return (
    <div className="dentist-detail">
      <h1>Detail Dentist id </h1>


        <div className="card-detail">
              <h3>Nombre: {name}</h3>
              <h3>Teléfono: {phone}</h3>
              <h3>Email: {email}</h3>
              <h3>Sitio Web:{website}</h3>
        </div>

    </div>
  )
}

export default Dentist