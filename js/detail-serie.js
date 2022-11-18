/*  Capturo la query String, la paso a un objeto maniupulable, capturo el id*/
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idSerie = qsObj.get('idSerie');

/* api key y el endpoint de detalle de series y proveedores*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let serieDetalle= `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${api_key}&language=en-US`;
let urlProveedores1 = `https://api.themoviedb.org/3/watch/providers/tv${idSerie}?api_key=${api_key}&language=en-US`

/* Capturo elementos */
let img = document.querySelector(".img-detalle-titulos");
let textoDetalleSerie = document.querySelector(".texto-detalle-serie");
let nombreDetalleSerie = document.querySelector(".nombre-detalle-serie")

let estreno = document.querySelector(".estreno")
let temporada = document.querySelector(".temporada")
let rating = document.querySelector(".rating")
let extra = document.querySelector(".extra")
let geneross = document.querySelector(".generos")
let botonagregarfav = document.querySelector(".botonagregarfav")
let botonrecomendacion = document.querySelector(".botonrecomendacion")
let ulverrecomendacionesSeries = document.querySelector(".ulverrecomendacionesSeries")


/*Fetch del detalle serie  */
fetch(serieDetalle)
    .then(function (respuesta) {
        return respuesta.json()
    }
    )
    .then(function (data) {
        let serie = data;
        /*console.log(serie);*/
        let infoGeneros = ""
        let generos = serie.genres
        for (let i = 0; i < generos.length; i++) {
            infoGeneros += `<a class="generosboton" href="./detail-genres.html?idGenero=${generos[i].id}"> ${generos[i].name}</a>`
        }

        nombreDetalleSerie.innerText = serie.name;
        img.src = `https://image.tmdb.org/t/p/w500${serie.poster_path}`
        estreno.innerText = serie.first_air_date;
        temporada.innerText = `temporadas ${serie.number_of_seasons}`
        rating.innerText = serie.vote_average;
        extra.innerText = serie.overview;
        geneross.innerHTML = `Géneros: ${infoGeneros}`
        botonagregarfav.innerHTML = `<a class="botonfav" href="./favorite.html?idSerie=${serie.id}"> Agregar a favoritos </a>`
        botonrecomendacion.innerHTML = `<a class="botonfav botonrecomendacion"> Ver recomendaciones </a>`

    })
    .catch(function (error) {
        return error
    }
    )






/*Fetch del Ver recomendaciones  */
fetch(urlRecomendaciones)
    .then(function (respuesta) {
        return respuesta.json()

    })
    .then(function (data) {
        console.log(data.results)
        let seriesRecomendadas = data.results;
        let contenidoRecomendaciones = "";

        for (let i = 0; i < 4; i++) {
            contenidoRecomendaciones += `<li class="cada_titulo">
                                    <a href="./detail-serie.html?idSerie=${seriesRecomendadas[i].id}"><img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${seriesRecomendadas[i].poster_path}" alt=" ${series[i].original_name}"   
                                        height="250px">
                                        <ul class="lista_anidada">
                                        <li class="li_piedefoto"> ${seriesRecomendadas[i].original_name} </li>
                                        <li class="li_piedefoto">Estreno: ${seriesRecomendadas[i].first_air_date} </li>
                                        <li class="vermas"> Ver más </li>

                                        </ul> </a>
                                </li>` };
        ulverrecomendacionesSeries.innerHTML = contenidoRecomendaciones

    })
    .catch(function (error) {
        return error

    })


    /* NO SE ME MUESTRA LA SECCION DE RECOMENDACIONES */

