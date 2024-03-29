import React, { useState } from 'react'

const FormularioInicioSesion = () => {
const [user, setUser] = useState("")
const [pass, setPass] = useState("")

// const onChangeUser = (e) => {
//   setUser(e.target.value)
// }
// const onChangePass = (e) => {
//   setPass(e.target.value)
// }

const onChange = (e) => {
  if (e.target.name === "usuario") {
    setUser(e.target.value)
  } else if( e.target.name === "password") {
    setPass(e.target.value)
  }
}

const onSubmit = (e) => {
  e.preventDefault()
  e.target.name === "dani" && e.target.name === "123" ? alert("si jalí") : alert(" no jala")
}

  return (
    <form action='' onSubmit={onSubmit}>
      <p>usuario:  {user}</p>
      <p>contraseña: {pass}</p>

      <div>

        <label htmlFor="usuario">Usuario</label>
        <input 
          type="text" 
          name="usuario" 
          id="usuario" 
          value={user}
          onChange={onChange}
          />

        <label htmlFor="password">Contraseña</label>
        <input 
          type="password"  
          name="password" 
          id="password" 
          value={pass}
          onChange={onChange}
          />
          
        <button 
          type='submit'

          >Iniciar sesión</button>
      </div>
    </form>
  )
}

export default FormularioInicioSesion
