import React from 'react'
import { useDentistStates } from '../Context/Context'
import Card from '../Components/Card'

const Home = () => {

    const {state} = useDentistStates()

  return (
    <div>
        {state.dentists.map(dentist => (<Card dentist={dentist} key={dentist.id}/>))}
    </div>
  )
  
}

export default Home