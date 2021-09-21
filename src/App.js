import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import api from "./services/api";


function App() {
  const [userName, setUserName] = useState("MatheusGorga");
  const [userData, setUserData] = useState([]);

useEffect(() =>{
  const localStorageuserData = localStorage.getItem('@reactapp:GITHUB_USER_DATA')
  setUserData(JSON.parse(localStorageuserData))
}, [])

 async function getUserGitHubData(){
   const {data} = await api.get(userName)
   localStorage.setItem('@reactapp:GITHUB_USER_DATA', JSON.stringify(data))
   setUserData(data)
  }


  return (
    <div className="App">
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={getUserGitHubData} > 🔍Pesquisar</button>

      <div>
      <h3>{userData.name}</h3>
      <img src={userData.avatar_url}/>
      </div>

    </div>
  );
}

export default App;

/*function maisContador(){
    setTimeout(() => {
      setContador( (preCounter) => preCounter + 1)
    }, 2000)
  }
  function menosContador(){
    setTimeout(() => {
      setContador( (preCounter) => preCounter - 1)
    }, 2000)
  }*/
