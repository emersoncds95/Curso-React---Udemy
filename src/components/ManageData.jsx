import { useState } from "react"

function ManageData(){
    let someData = 10

    const [number, setNumber] = useState(15)
    return(
        <>
            <p>Valor: {someData}</p>
            <button onClick={() =>(someData = 10)}>Mudar Variavel</button>
            <p>Valor: {number}</p>
            <button onClick={() =>(setNumber(number*2))}>Mudar Variavel</button>
        </>
    )
}
export default ManageData