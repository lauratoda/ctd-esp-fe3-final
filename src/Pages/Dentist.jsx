import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
    <div>
      <h3>{name}</h3>
      <h3>{phone}</h3>
      <h3>{email}</h3>
      <h3>{website}</h3>
 
    </div>
  )
}

export default Dentist