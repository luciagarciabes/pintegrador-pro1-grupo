/*  Capturo la query String, la paso a un objeto maniupulable, capturo el id*/
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula')

/* api key y el endpoint de detalle de peliculas*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let peliculaDetalle = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${api_key}&language=en-US`
let urlProveedores = `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers?api_key=${api_key}`


/* Capturo elementos*/
let img = document.querySelector(".img-detalle-titulos");
let textoDetalleMmovie = document.querySelector(".texto-detalle-movie");
let nombreDetallePelicula = document.querySelector(".nombre-detalle-pelicula")
let listaPlataformas = document.querySelector(".lista_plataformas")


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
            infoGeneros += ' ' + generos[i]['name'] + ',  '
        }


        let contenido = `<ul>
                        <article class="flex">
                            <li><strong>${pelicula.release_date}</strong></li>
                            <li><strong> Duración: ${pelicula.runtime} minutos </strong></li>
                            <li> <strong> Rating:  ${pelicula.vote_average}</strong> </li> 
                        </article>

                        <li class="informacion">${pelicula.overview}</li>
                        <li class="informacion"> <strong> Géneros:    <a  class="generosboton" href="./detail-genres.html?idGenero="> ${infoGeneros} </strong> </a><li> 
                        <li class="lifav"> <a class="botonfav" href="./favorite.html?idPelicula=${pelicula.id}"> Agregar a favoritos </a> <a class="botonfav botonrecomendacion"> Ver recomendaciones </a> </li>
                        

                    </ul>`


        nombreDetallePelicula.innerText = pelicula.original_title
        textoDetalleMmovie.innerHTML = contenido;
        img.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
        return data


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

    if (data2.results.MX.buy.length > 0) {
        console.log(data2.results.MX.buy);
        let arrayProveedores = data2.results.MX.buy;
        let contenidoProveedores = ""

        for (let i = 0; i < arrayProveedores.length; i++) {
            contenidoProveedores += `<li> 
                                        <h3> ${arrayProveedores[i].provider_name}</h3>
                                        <img src="https://image.tmdb.org/t/p/w500${arrayProveedores.logo_path}" alt="${arrayProveedores[i.provider_name]}">
                                    </li>`
                                }
                            
    listaPlataformas.innerHTML= contenidoProveedores

    } else {
        Selection.innerText = "no hay proveedores"; 
    }

})
.catch(function (error) {
    return error
})


/* if data.results.MX undefined o if MX != "" */




