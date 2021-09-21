import { useCallback, useEffect, useState, useMemo } from "react";

const set = new Set();

export default function List() {
  const [contador, setContador] = useState(1);

  const handleSetContador = useCallback(() => {
    setContador((preState) => preState + 1);
    set.add(handleSetContador);
  }, []);

  useEffect(() => {
    async function setUserRepositories() {
      await localStorage.setItem("user-repositories", JSON.stringify({}));
    }
    setUserRepositories();
  }, []);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={handleSetContador}>+</button>
    </div>
  );
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

      const number = useMemo(() => {
      return (132786178236 * 123981023)
      },[])
      console.log(number)

      const handleSetContador = useCallback(()=> {
        setContador((preState) => preState + 1)
        set.add(handleSetContador)
      }, [])
*/
