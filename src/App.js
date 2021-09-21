import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
 
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

  const [showList, setShowList] = useState(true)

  return (
    <div className="App">
      <h1>Ola</h1>
      {showList && <List/>} 
    </div>
  );
}

export default App;
