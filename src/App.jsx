import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [retornoAPI, setRetornoAPI] = useState("");

  const getOla = async () => {
    await fetch('http://localhost:3002/ola')
          .then(response => response.json())
          .then(json => setRetornoAPI(JSON.stringify(json)))
          .catch(err => console.log('erro: ' + err))
  }

  return (
    <div>
      <h1>Retorno da API: {retornoAPI}</h1>
      <button onClick={() => getOla()}>Chamar a API</button>
    </div>
  );
}

export default App;
