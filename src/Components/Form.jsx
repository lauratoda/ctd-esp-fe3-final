import { useState, useEffect } from 'react'
import styles from './Form.module.scss'

const Form = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const handleSubmit = () => {
        if (usuario.nombre.length >= 5 && validEmail.test(usuario.email)) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setShow(false);
                setUsuario({
                    nombre: '',
                    email: ''
                });
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [show]);

    return (
        <div>
            <div className={styles.formContainer}>
                <label>Nombre</label>
                <input type="text" value={usuario.nombre}
                    onChange={(event) => setUsuario({ ...usuario, nombre: event.target.value })}
                />
                <label>Email</label>
                <input type="text" value={usuario.email}
                    onChange={(event) => setUsuario({ ...usuario, email: event.target.value })}
                />
                <button className={styles.formButton} onClick={handleSubmit}>Enviar</button>
            </div>

            <div className={styles.formResponse}>
                {show && <p>Gracias {usuario.nombre}, te contactaremos cuando antes vía mail</p>}
                {error && <p style={{ color: 'red' }}>Por favor verifique su información nuevamente</p>}
            </div>
        </div>

    )
}

export default Form
