let qs = location.search
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get("idPelicula")
let idSerie= qsObj.get('idSerie');


let api_key = "a999f9c45003fc79555aea4968543ddf";
let pelicula = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${api_key}&language=en-US`
let urlProveedores = `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers?api_key=${api_key}`
let serieDetalle= `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${api_key}&language=en-US`;

/*generos peliculas*/

fetch(pelicula)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        if (data.results.length > 0) {
            let arrayPeliculas = data.results
            let allPeliculas = ""
            for (let i = 0; i < 5; i++) {
                allPeliculas += 
                resultados.innerHTML = allPeliculas;
            }
            
        } else {
            h2resbusq.innerText = ` No hay resultados para su búsqueda...`

        }

    })
    .catch(function (error) {
        return error
    })

    /*generos series*/
    fetch(serie)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        if (data.results.length > 0) {
            let arrayserie = data.results
            let allserie = ""
            for (let i = 0; i < 5; i++) {
                allPeliculas += 
                resultados.innerHTML = allPeliculas;
            }
            
        } else {
            h2resbusq.innerText = ` No hay resultados para su búsqueda...`

        }

    })
    .catch(function (error) {
        return error
    })