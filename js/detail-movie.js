/*  Capturo la query String, la paso a un objeto maniupulable, capturo el id*/
let qs= location.search;
let qsObj= new URLSearchParams(qs);
let idPelicula= qsObj.get('idPelicula')

/* api key y el endpoint de detalle de peliculas*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let peliculaDetalle= `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${api_key}language=en-US`

/* Capturo elementos*/
let img= document.querySelector(".img-detalle-pelicula");

fetch(peliculaDetalle)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data)
    return data
})
.catch(function (error) {
    return error
})


/*NO ME ESTA TOMANDO LA API KEY< ME DICE ERROR. */


