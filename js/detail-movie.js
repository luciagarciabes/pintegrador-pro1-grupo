/*  Capturo la query String, la paso a un objeto maniupulable, capturo el id*/
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula')

/* api key y el endpoint de detalle de peliculas y proveedores*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let peliculaDetalle = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${api_key}&language=en-US`
let urlProveedores = `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers?api_key=${api_key}`


/* Capturo elementos*/
let img = document.querySelector(".img-detalle-titulos");
let textoDetalleMmovie = document.querySelector(".texto-detalle-movie");
let nombreDetallePelicula = document.querySelector(".nombre-detalle-pelicula")

let estreno= document.querySelector(".estreno")
let duracion= document.querySelector(".duracion")
let rating= document.querySelector(".rating")
let sinopsis= document.querySelector(".sinopsis")
let geneross= document.querySelector(".generos")
let botonagregarfav= document.querySelector(".botonagregarfav")
let verrecomendaciones= document.querySelector(".verrecomendaciones")

let listaPlataformas = document.querySelector(".lista_plataformas")
let recomendaciones = document.querySelector(".verrecomendaciones")



/*Fetch de detalle peliculas */
fetch(peliculaDetalle)
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (data) {
        console.log(data)

        let pelicula = data
        let infoGeneros = ""
        let generos = pelicula.genres
        for (let i = 0; i < generos.length; i++) {
            infoGeneros +=  `<a class="generosboton" href="./detail-genres.html?idGenero=${generos[i].id}"> ${generos[i].name}</a>` 
        }

        nombreDetallePelicula.innerText = pelicula.original_title
        img.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
        estreno.innerText= pelicula.release_date;
        duracion.innerText= `Duración  ${pelicula.runtime} minutos`;
        rating.innerText= pelicula.vote_average;
        sinopsis.innerText= pelicula.overview;
        geneross.innerHTML=  ` Generos: ${infoGeneros}`;
        botonagregarfav.innerHTML= `<a class="botonfav" href="./favorite.html?idPelicula=${pelicula.id}"> Agregar a favoritos </a> `
        verrecomendaciones.innerHTML= `<a  class="botonfav botonrecomendacion"> Ver recomendaciones </a> `

    })
    .catch(function (error) {
        return error
    })


/* Fetch para los proveedores*/
fetch(urlProveedores)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data2) {
    console.log(data2.results);

    if (data2.results.MX != undefined) {
        console.log(data2.results.MX.buy);
        let arrayProveedores = data2.results.MX.buy;
        let contenidoProveedores = ""

        for (let i = 0; i < arrayProveedores.length; i++) {
            contenidoProveedores += `<li> 
                                        <h3> ${arrayProveedores[i].provider_name}</h3>
                                        <img class="imagenesproveedores" src="https://image.tmdb.org/t/p/w500${arrayProveedores[i].logo_path}" alt="${arrayProveedores[i].provider_name}">
                                    </li>`
                                }
                            
    listaPlataformas.innerHTML= contenidoProveedores

    } else {
        listaPlataformas.innerText = "no hay proveedores"; 
    }

})
.catch(function (error) {
    return error
})







