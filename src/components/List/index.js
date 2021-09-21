import { useCallback, useEffect, useState } from "react"

const set = new Set()

export default function List(){
  const [contador, setContador] = useState(1)
      
      function handleSetContador(){
        setContador((preState) => preState + 1)
        set.add(handleSetContador)
      }

      console.log(set.size)

      return(
        <div>
          <h1>Contador: { contador}</h1>
          <button onClick={ handleSetContador} >+</button>
        </div>
      )
}


/*
    useEffect(() =>{     
      return () => {
        console.log("atualizou")
      }
      }, [contador])

      useEffect(() => {
        return () => {
          console.log("desmontou")
        }
      }, [])
*/