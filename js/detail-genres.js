/* Capturo la qs, api key*/
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idGenero = qsObj.get('idGenero');
let api_key = "a999f9c45003fc79555aea4968543ddf";

/* Endpoints*/
let urlPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGenero}&with_watch_monetization_types=flatrate`

let urlSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${idGenero}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`


/* Capturo elementos*/
let listagenerospeliculas = document.querySelector(".listagenerospeliculas");
let listagenerosseries = document.querySelector(".listagenerosseries");
let h2Peliculas = document.querySelector(".h2dgpeliculas");
let h2Series = document.querySelector(".h2dgseries");


/* Fetch generos peliculas*/
fetch(urlPeliculas)
    .then(function (respuesta) {
        return respuesta.json()

    })
    .then(function (data) {
        console.log(data.results)
        let peliculas = data.results;
        if (peliculas.length > 0) {
            let contenido = ""
            for (let i = 0; i < 5; i++) {
                contenido += ` <li class="cada_titulo">
                                        <a href="./detail-movie.html?idPelicula=${peliculas[i].id}"><img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}"
                                                alt="${peliculas[i].title}" height="250px">
                                            <ul class="lista_anidada">
                                                <li class="li_piedefoto">${peliculas[i].title} </li>
                                                <li class="li_piedefoto"> Estreno: ${peliculas[i].release_date}</li>
                                                <li class="vermas"> Ver más </li>
                                        </a> </ul>
                                </li>`
            };
            listagenerospeliculas.innerHTML = contenido;
        } else {
            listagenerospeliculas.innerHTML = `<h2 class="informacion h2nohaygenero"> No hay peliculas para el género seleccionado</h2>`

        }
    })
    .catch(function (error) {
        return error

    })

/* Fetch generos series*/

fetch(urlSeries)
    .then(function (respuesta) {
        return respuesta.json()

    })
    .then(function (data) {
        console.log(data.results)
        let series = data.results;
        if (series.length > 0) {
            let contenido2 = ""
            for (let i = 0; i < 5; i++) {
                contenido2 += `<li class="cada_titulo">
                            <a href="./detail-serie.html?idSerie=${series[i].id}"><img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${series[i].poster_path}" alt=" ${series[i].name}"   
                                height="250px">
                                <ul class="lista_anidada">
                                <li class="li_piedefoto"> ${series[i].name} </li>
                                <li class="li_piedefoto">Estreno: ${series[i].first_air_date} </li>
                                <li class="vermas"> Ver más </li>

                                </ul> </a>
                        </li>`
            };
            listagenerosseries.innerHTML = contenido2;
        } else {
            listagenerosseries.innerHTML = `<h2 class="informacion h2nohaygenero"> No hay series para el género seleccionado</h2>`
        }


    })
    .catch(function (error) {
        return error

    })
