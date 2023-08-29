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

  const pegaDados = async () => {
    await fetch('http://localhost:3002/ola',
          {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
              "nome":"Ruan", 
              "profissao": "Engenheiro DevOps"
            })
          })
          .then(response => response.json())
          .then(json => setRetornoAPI(JSON.stringify(json)))
          .catch(err => console.log('erro: ' + err))
  }

  return (
    <div style={{ marginLeft: '10px' }}>
      <h1>Retorno da API: {retornoAPI}</h1>
      <button onClick={() => getOla()}>Request API</button><br/>
      <button onClick={() => pegaDados()}>Request API POST</button>
    </div>
  );
}

export default App;
