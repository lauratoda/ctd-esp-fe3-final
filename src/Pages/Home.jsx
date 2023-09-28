import React from 'react'
import { useDentistStates } from '../Context/Context'
import Card from '../Components/Card'
import { useEffect } from 'react'

const Home = () => {

  const { state } = useDentistStates()

  return (
    <main className="">
      <h1>Home</h1>

      <div className='card-grid'>
        {state.dentists.map(dentist => (<Card dentist={dentist} key={dentist.id} />))}
      </div>
    </main>
  )
}

export default Home