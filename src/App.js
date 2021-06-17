import React, {useEffect, useState} from 'react'
import './App.css';
import Login from "./componentes/Login";
import Player from './componentes/player/Player'
import {guardarToken} from './componentes/spotify'
function App() {
  const [token, setToken] = useState('');
  useEffect(() => {
    //Guardo el token que me genera en la url el api y la guardo en el localstorage
    guardarToken();
    //obtengo el token que guardé previamente en el localstorage
    const tokenLocal = localStorage.getItem('token');
    //lo guardo en el state de token :8
    setToken(tokenLocal);

  }, []);
  
  return (
    <div className="app">{
      //sí existe el token dentro del state, entra al app, si no, entra al spotify
      token 
        ? <Player></Player>
        : <Login />
      }
    </div>
  );
}

export default App;
