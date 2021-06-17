import React,{useState, useEffect} from 'react'
import './ListSongs.css'
import {getSongs} from '../../spotify'
export const ListSongs = ({busqueda}) => {
    //obtengo el token
    const token = JSON.parse(localStorage.getItem('token'));
    //creo un arreglo donde se guardarán las canciones
    const [songs, setSongs] = useState([])
    //obtenemos las canciones del api mediante lo que le pasemos a buscar y lo guardamos en el state de songs
    const getSong = async ()=>{
        const response= await getSongs(token.access_token,busqueda);
        setSongs(response.items)     
        
    }
    //ejecutamos la función cada vez que el parametró de busqueda cambie
    useEffect(() => {
        getSong(busqueda);
        
    }, [busqueda])
    return (
        <div>
            <ul className="song-list">
                {
                    
                    songs.map((song)=>{
                        
                        return(
                            
                            <li key={song.id} className="list-item" >
                                <img className="list-item-img" alt={song.name} src={song.album.images[0].url}>
                                </img>
                                <div className="list-item-info">
                                    <h3>{song.name} </h3>
                                    <p>{song.artists[0].name}</p> 
                                </div>
                                 
                            </li>
                        )
                       
                    })
                }
            </ul>
        </div>
    )
}

export default ListSongs
