import { useState } from "react"

const Contacto = () => {
    
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Submit del form")
        console.log(values)
    } 

    return (
        <div className="container my-5">
            <h2>Contacto</h2>

            <form onSubmit={handleSubmit}>
                <h4>Datos personaless</h4>

                <input 
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    placeholder="Nombre"
                    type={'text'}
                    className="form-control my-2"
                />

                <input 
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    type={'email'}
                    className="form-control my-2"
                />

                <input 
                    name="direccion"
                    value={values.direccion}
                    onChange={handleInputChange}
                    placeholder="Direccion"
                    type={'text'}
                    className="form-control my-2"
                />
                <hr></hr>
                
                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>
        </div>
    )
}

export default Contacto
