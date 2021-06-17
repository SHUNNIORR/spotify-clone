import React,{useState, useEffect} from 'react';
import './Favoritos.css'
import {getUserFavs} from '../../../spotify';
export const Favoritos = () => {
    //obtengo el token
    const token = JSON.parse(localStorage.getItem('token'));
    //creo el array de favs
    const [favs, setFavs] = useState([]);
    //obtengo el listado de canciones favoritas del usuario y las guardo en la variable favs
    const getFavoritos = async () =>{
        const response = await getUserFavs(token.access_token);
        setFavs(response.items);
        console.log(favs);
    }
    //obtengo las canciones favoritas cada que renderiza el componente
    useEffect(() => {
        getFavoritos();
        
    }, [])
    return (
        <div>
            <div className="fav-titulo-contenedor">
                <h1 className="titulo">Tus favoritos</h1>
            </div>
            
            <ul className="song-list">
                {
                    
                    favs.map((favorito)=>{
                        
                        return(
                            
                            <li key={favorito.track.id} className="list-item" >
                                <img className="list-item-img" alt={favorito.track.name} src={favorito.track.album.images[0].url}>
                                </img>
                                <div className="list-item-info">
                                    <h2>{favorito.track.name} </h2>
                                    <p>{favorito.track.artists[0].name}</p> 
                                </div>
                                
                            </li>
                        )
                    
                    })
                }
            </ul>
        </div>
    )
}

export default Favoritos
