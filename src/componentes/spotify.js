export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "724faf6b6794407bac54560b60a629e8";

// los permisos que el api necesita para ejecutar funciones/peticiones
const scopes = [
  "user-library-read",
  "user-read-private",
  "user-read-email",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//función que obtiene el token que el api proporciona por medio de la url, lo retorna en un objeto
export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  }; 
//funcion que guarda el token en el localstorage
export let guardarToken = () => {
  const url = getTokenFromUrl();
  //sí existe un access token lo guarda en el localstorage si no no hace nada
  if (url.access_token){
    window.location.hash="";
    localStorage.setItem('token', JSON.stringify(url));
  }
}

//función que obtiene los datos del usuario
  export const getUserData = async(token) =>{
    const result = await fetch(`https://api.spotify.com/v1/me`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    const data = await result.json();
    localStorage.setItem('userData',JSON.stringify(data));
    return(data);
  }

  //Función que obtiene las canciones favoritas del usuario
  export const getUserFavs = async(token) =>{
    const result = await fetch(`https://api.spotify.com/v1/me/tracks?limit=10`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    const data = await result.json();
    localStorage.setItem('favTracks',JSON.stringify(data));
    console.log(data);
    return(data);
   
  }
  //cancion que obtiene las canciones que se le pidan mediante el parametro de search
  export const _getTracks = async (token, search) => {
    
    const limit = 10;

    const result = await fetch(`https://api.spotify.com/v1/search?query=${search}&type=track&offset=0&limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    localStorage.setItem('track',JSON.stringify(data));
    return( data  );
    //console.log(data);
}

//obtiene la canción que se pide buscar pasando cómo argumento la información del input
export const getSongs = async(token,buscar)=>{
  const {tracks} = await _getTracks(token, buscar);

  return(tracks);
  
}
//elimina el token, y recarga la página para que esta pueda recargar la vista del login y así cerrar sesión
export const cerrarSesion = () =>{
  localStorage.removeItem('token');
  window.location.hash="";
  window.location.reload();
}

//Almacena la url del login de autenticación de spotify para poder usarlo posteriormente en la autenticación
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20")}&response_type=token&show_dialog=true`;