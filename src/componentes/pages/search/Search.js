import React from 'react'
import  {useState} from 'react'
import './Search.css'
import ListSongs from '../List-songs/ListSongs'
export let buscar='amor';
export const Search = () => {
    const [search, setSearch] = useState({
        busqueda:''
    });

    

    const [error, actualizarError] = useState(false);
    const actualizarState = (e)=>{
        e.preventDefault();
        setSearch({
            ...search,
            [e.target.name]: e.target.value
            
        })
    }
    const submitBusqueda = (e) =>{
        e.preventDefault();
        //validar si está vacío
            if(busqueda.trim()===''){
                actualizarError(true);
                return;
            }
        //eliminar mensaje de error previo
        actualizarError(false);
        buscar= busqueda;
        //reiniciar form
            setSearch({
                busqueda:''
            });
        return(buscar);
        
        
    }
    //extraigo los valores de search para pasarlo cómo value
    const{busqueda}=search;
    return (
        <div>
            {  error ?<div className="error-container"><p className="error">Todos los campos son obligatorios</p> </div>: null}
            <form onSubmit={submitBusqueda}>
                <div className="container-input-search">
                    <div className="input-search">
                        <img width='40px' className="search-icon" alt="Search icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" value="" ></img>
                        <input
                             className="input" 
                             type="text" 
                             name="name" 
                             placeholder="Search a song"
                             name='busqueda'
                             value={busqueda}
                             onChange={actualizarState}
                        />

                    </div>
                    
                </div>
                
            </form>
           <ListSongs busqueda={buscar}></ListSongs>
        </div>
    )
}

export default Search
