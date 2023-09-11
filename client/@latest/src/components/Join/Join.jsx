import React, {useRef} from 'react'
import {Manager} from 'socket.io-client'

export default function Join({setChatVisibility}) {

    const usernameRef = useRef()
    const handleSubmit = () => {
        const username = usernameRef.current.value
        if(!username.trim()){console.log("Erro")}
        console.log(username);
        setChatVisibility(true)
        const manager = new Manager('http://localhost:3001')
        const socket = manager.socket('/')
        socket.emit('set_username', username)
    }

  return (
    <div>
        <h1>JOIN:</h1>
        <input type="text" ref={usernameRef} placeholder='Nome de Usuário' name="" id="" /> 
        <button onClick={()=>handleSubmit()}>Entrar</button>
    </div>
  )
}
