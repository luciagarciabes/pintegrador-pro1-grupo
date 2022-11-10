/*  Capturo la query String, la paso a un objeto maniupulable, capturo el id*/
let qs= location.search;
let qsObj= new URLSearchParams(qs);
let idPelicula= qsObj.get('idPelicula')

/* api key y el endpoint de detalle de peliculas*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let peliculaDetalle= `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${api_key}&language=en-US`


/* Capturo elementos*/
let img= document.querySelector(".img-detalle-pelicula");
let textoDetalleMmovie= document.querySelector(".texto-detalle-movie");
let nombreDetallePelicula= document.querySelector(".nombre-detalle-pelicula")

fetch(peliculaDetalle)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data)
    let pelicula= data
    let contenido= `<ul>
                        <article class="flex">
                            <li><strong>${pelicula.release_date}</strong></li>
                            <li><strong>${pelicula.runtime} minutos </strong></li>
                            <li><strong>${pelicula.genres}</strong></li> .   
                        </article>

                        <li class="informacion">${pelicula.overview}</li>
                        <li class="informacion"><strong>Dirección:</strong> ${pelicula.production_companies}</li>
                        <li class="lifav"><a class="botonfav" href="./favorite.html"> Agregar a favoritos </a></li>

                    </ul>`
                    /* PROBLEMAS CON LOS GENEROS Y DIRECTORES */
    nombreDetallePelicula.innerText= pelicula.original_title
    textoDetalleMmovie.innerHTML= contenido;
    img.src=`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
    return data
})
.catch(function (error) {
    return error
})





