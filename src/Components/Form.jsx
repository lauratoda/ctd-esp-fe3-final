import { useState } from 'react'

const Form = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false) 

    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const handleSubmit = () => {
        if(usuario.nombre.length >= 5 && validEmail.test(usuario.email)){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

  return (
    <div>
        <label>Nombre completo</label>
        <input type="text" value={usuario.nombre}
            onChange={(event) => setUsuario({...usuario, nombre: event.target.value})}
        />
        <label>Email</label>
        <input type="text" value={usuario.email}
            onChange={(event) => setUsuario({...usuario, email: event.target.value})}
        />
        <button onClick={handleSubmit}>Enviar</button>
        {show && <h3>Gracias {usuario.nombre}, te contactaremos cuando antes vía mail</h3>}
        {error && <h4 style={{color: 'red'}}>Por favor verifique su información nuevamente</h4>}
    </div>
  )
}

export default Form