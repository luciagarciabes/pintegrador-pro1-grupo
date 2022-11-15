let api_key = "a999f9c45003fc79555aea4968543ddf";
let qs = location.search
let qsObj = new URLSearchParams(qs)
let pelicula = qsObj.get('busqueda')

let resultados = document.querySelector(".lista_principal");
let h2resbusq = document.querySelector(".h2resbusq");
let resultadoSeries = document.querySelector("#lista_series");
let h2resbusqSeries = document.querySelector("#h2resbusq");


let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${pelicula}&page=1&include_adult=false`
let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&query=${pelicula}&page=1&include_adult=false`

/* fetch para la sección de peliculas */
fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        if (data.results.length > 0) {
            let arrayPeliculas = data.results
            let allPeliculas = ""
            for (let i = 0; i < 5; i++) {
                allPeliculas += `<li>
                                <a href="./detail-movie.html?idPelicula=${arrayPeliculas[i].id}"> 
                                <img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${arrayPeliculas[i].poster_path}" alt="${arrayPeliculas[i].original_title}"
                                    height="250px">
                                <ul class="lista_anidada">
                                    <li class="li_piedefoto">${arrayPeliculas[i].original_title}</li>
                                    <li class="li_piedefoto">Estreno: ${arrayPeliculas[i].release_date}</li>
                                    <li class="vermas"> Ver más </li>

                                </ul>
                                </a> 
                            </li>`
                resultados.innerHTML = allPeliculas;
            }
            h2resbusq.innerText = `Usted buscó: "${pelicula}"`;
        } else {
            h2resbusq.innerText = ` No hay resultados para su búsqueda...`

        }

    })
    .catch(function (error) {
        return error
    })

/* fetch para la sección de series */

fetch(urlSeries)
    .then(function (respuesta) {
        return respuesta.json()
    }
    )
    .then(function (data) {
        if (data.results.length > 0) {
            let arraySeries = data.results
            let allSeries = ""
            for (let i = 0; i < 5; i++) {
                if (arraySeries[i].poster_path != null) {
                    allSeries += `<li>
                                    <a href="./detail-movie.html?idPelicula=${arraySeries[i].id}"> 
                                    <img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${arraySeries[i].poster_path}" alt="${arraySeries[i].name}"
                                        height="250px">
                                    <ul class="lista_anidada">
                                        <li class="li_piedefoto">${arraySeries[i].name}</li>
                                        <li class="li_piedefoto">Estreno: ${arraySeries[i].first_air_date}</li>
                                        <li class="vermas"> Ver más </li>

                                    </ul>
                                    </a> 
                                </li>`
                    resultadoSeries.innerHTML = allSeries;
                }
            }
            h2resbusqSeries.innerText = `Usted buscó: "${pelicula}"`;
        } else { h2resbusqSeries.innerText= ` No hay resultados para su búsqueda...`

        }
    } )
    .catch(function (error) {
        return error
    }
    )


