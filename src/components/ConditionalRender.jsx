import React, { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(false)

  const [name, setName] = useState("Emerson")


  return <div>
    <h1>Isso sera exibido?</h1>
   {x && <p>Se x for true, sim</p>}
   {!x && <p>Se x é falso</p>}
   <h1>IF ternario</h1>
   {name  === "João" ? (
    <div>
        <p>o nome é João</p>
    </div>
   ) : (
    <div>
        <p>Nome não Encontrado</p>
    </div>
   )}
   <button onClick={() => setName("João")}>Clica aqui</button>
  </div>
}

export default ConditionalRender
