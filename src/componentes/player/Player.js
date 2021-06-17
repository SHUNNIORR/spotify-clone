import React,{useEffect, useState, Fragment} from 'react'
import Body from './Body/Body';
import {getUserData} from '../spotify';


const Player = () => {
    //se crea un objeto donde se va a guardar la información del usuario
    const [userInfo, setUserInfo] = useState({});
    //se obtiene el token del localstorage
    const _token =  JSON.parse(localStorage.getItem('token'));

    //obtenemos los datos del usuario de la api y los guardamos en el state de userInfo
    const getUserInfo = async ()=>{
        const userInfo= await getUserData(_token.access_token);
        setUserInfo(userInfo);
       
    }
    //ejecutamos la función cada que se monte el componente
    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <Fragment>
            
               <div className="body-container">
                    
                    
                    <Body 
                        name={userInfo.display_name || "Nombre"}
                        img = { userInfo.images ? userInfo.images[0].url : 'https://img.pngio.com/user-png-image-royalty-free-stock-png-images-for-your-design-user-png-512_512.png'}
                        
                    ></Body >
                    
               </div>
               
                
            
            
        </Fragment>
        
    )
}

export default Player
