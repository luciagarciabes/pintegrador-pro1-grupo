/* Capturo la qs, api key*/
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idGenero = qsObj.get('idGenero');
let api_key = "a999f9c45003fc79555aea4968543ddf";

console.log(idGenero);

/* Endpoints*/ 
let urlPeliculas= `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGenero}&with_watch_monetization_types=flatrate`

let urlSeries= `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${idGenero}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`


/* Capturo elementos*/
let detallegenerospeliculas= document.querySelector(".detallegenerospeliculas");
let detallegenerosseries= document.querySelector(".detallegenerosseries");
let h2Peliculas= document.querySelector(".h2dgpeliculas");
let h2Series= document.querySelector(".h2dgseries");


/* Fetch generos peliculas*/
fetch(urlPeliculas)
.then(function (respuesta) {
    return respuesta.json()
    
})
.then(function (data) {
    console.log(data.results)
    peliculas= data.results
    if (peliculas =! null){
        contenido=""
        for (let i = 0; i < 5; i++) {
            contenido+= ` <li>
            <a href="./detail-movie.html?idPelicula=${peliculas[i].id}"><img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}"
                    alt="${peliculas[i].title}" height="250px">
                <ul class="lista_anidada">
                    <li class="li_piedefoto">${peliculas[i].title} </li>
                    <li class="li_piedefoto"> Estreno: ${peliculas[i].release_date}</li>
                    <li class="vermas"> Ver más </li>
            </a> </ul>
    </li>`   
        }
    detallegenerospeliculas.innerHTML= contenido;

    } else {

    }
   

   
    
})
.catch(function (error) {
    return error
    
})

 /*generos series*/

 fetch(urlSeries)
 .then(function (respuesta) {
     return respuesta.json()
     
 })
 .then(function (data) {
     console.log(data)
     
 })
 .catch(function (error) {
     return error
     
 })
 