import React from 'react'
import { useDentistStates } from '../Context/Context'
import Card from '../Components/Card'

const Favs = () => {

const {state} = useDentistStates()

  return (
    <div>
      {state.favs.map(fav => <Card dentist={fav} key={fav.id}/>)}
    </div>
  )
}

export default Favs