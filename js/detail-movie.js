/*  Capturo la query String, la paso a un objeto maniupulable, capturo el id*/
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula')

/* api key y el endpoint de detalle de peliculas y proveedores*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let peliculaDetalle = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${api_key}&language=en-US`
let urlProveedores = `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers?api_key=${api_key}`
let urlRecomendaciones = `https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${api_key}&language=en-US&page=1`
let urlReviews = `https://api.themoviedb.org/3/movie/${idPelicula}/reviews?api_key=${api_key}&language=en-US&page=1`
let urlTrailer = `https://api.themoviedb.org/3/movie/${idPelicula}/videos?api_key=${api_key}&language=en-US`

/* Capturo elementos*/
let img = document.querySelector(".img-detalle-titulos");
let textoDetalleMmovie = document.querySelector(".texto-detalle-movie");
let nombreDetallePelicula = document.querySelector(".nombre-detalle-pelicula")
let ulverrecomendaciones = document.querySelector(".ulverrecomendaciones")

let estreno = document.querySelector(".estreno")
let duracion = document.querySelector(".duracion")
let rating = document.querySelector(".rating")
let sinopsis = document.querySelector(".sinopsis")
let geneross = document.querySelector(".generos")
let botonagregarfav = document.querySelector(".botonagregarfav")
let botonrecomendacion = document.querySelector(".botonrecomendacion")

let listaPlataformas = document.querySelector(".lista_plataformas")
let recomendaciones = document.querySelector(".verrecomendaciones")
let seccionReviews= document.querySelector(".seccionReviews")
let seccionTrailer = document.querySelector(".seccionTrailer")





/* Fetch de detalle peliculas */
fetch(peliculaDetalle)
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (data) {
        /* console.log(data)*/

        let pelicula = data
        let infoGeneros = ""
        let generos = pelicula.genres
        for (let i = 0; i < generos.length; i++) {
            infoGeneros += `<a class="generosboton" href="./detail-genres.html?idGenero=${generos[i].id}"> ${generos[i].name}</a>`
        }

        nombreDetallePelicula.innerText = pelicula.original_title
        img.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
        estreno.innerText = pelicula.release_date;
        duracion.innerText = `Duración  ${pelicula.runtime} minutos`;
        rating.innerText = ` Rating: ${pelicula.vote_average}`;
        sinopsis.innerText = pelicula.overview;
        geneross.innerHTML = ` Generos: ${infoGeneros}`;
       
    })
    .catch(function (error) {
        return error
    })


/* Fetch para los proveedores */
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
                contenidoProveedores += `<li class="liproveedor"> 
                                        <h3> ${arrayProveedores[i].provider_name}</h3>
                                        <img class="imagenesproveedores" src="https://image.tmdb.org/t/p/w500${arrayProveedores[i].logo_path}" alt="${arrayProveedores[i].provider_name}">
                                    </li>`
            }

            listaPlataformas.innerHTML = contenidoProveedores

        } else {
            listaPlataformas.innerText = "no hay proveedores";
        }

    })
    .catch(function (error) {
        return error
    })




/* Fetch para Ver recomendaciones */
fetch(urlRecomendaciones)
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (data) {
        console.log(data)
        let pelisRecomendadas = data.results;

        let contenidoRecomendaciones = ""
        for (let i = 0; i < 4; i++) {
            contenidoRecomendaciones += `<li class="cada_titulo">
                                    <a href="./detail-movie.html?idPelicula=${pelisRecomendadas[i].id}"> 
                                    <img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${pelisRecomendadas[i].poster_path}" alt="${pelisRecomendadas[i].original_title}"
                                        height="250px">
                                    <ul class="lista_anidada">
                                        <li class="li_piedefoto"> ${pelisRecomendadas[i].original_title}</li>
                                        <li class="li_piedefoto">Estreno: ${pelisRecomendadas[i].release_date}</li>
                                        <li class="vermas"> Ver más </li>
                                    </ul>
                                    </a>
                                </li>`
        };

        ulverrecomendaciones.innerHTML = contenidoRecomendaciones


    })
    .catch(function (error) {
        return error
    })




    /* Seccion de recomendaciones */
let muestraRecomendaciones= false;

botonrecomendacion.addEventListener('click', function(e) {
    e.preventDefault();

    if (muestraRecomendaciones) {
        ulverrecomendaciones.style.display = 'none';
        botonrecomendacion.innerText = 'Ver recomendaciones'
        muestraRecomendaciones = false;
    } else {
        ulverrecomendaciones.style.display = 'flex';
        botonrecomendacion.innerText = 'Ocultar recomendaciones'
        muestraRecomendaciones = true;
    }
})


/* Favoritos*/ 
let favoritosPeliculas= [];
let recuperoStorage= localStorage.getItem("favoritosPeliculas")

if (recuperoStorage != null) {
    favoritosPeliculas= JSON.parse(recuperoStorage)
}

if (favoritosPeliculas.includes(idPelicula)) {
    botonagregarfav.innerText= "Quitar de favoritos"
}

botonagregarfav.addEventListener("click", function (e) {
    e.preventDefault()
    if (favoritosPeliculas.includes(idPelicula)) {
        let indice= favoritosPeliculas.indexOf(idPelicula)
        favoritosPeliculas.splice(indice, 1)
        botonagregarfav.innerText= "Agregar a favoritos"
    } else {
        favoritosPeliculas.push(idPelicula)
        botonagregarfav.innerText= "Quitar de favoritos"
    }
    let favToString= JSON.stringify(favoritosPeliculas)
    localStorage.setItem("favoritosPeliculas", favToString)
    
})


/* Sección Reviews */
 fetch(urlReviews)
 .then(function (respuesta) {
     return respuesta.json()
 })
 .then(function (data) {
    console.log(data.results)
    let pelisReviews = data.results;
    let infoReviews=""
    for (let i = 0; i <3; i++) {
        infoReviews+= ` <article class="reviews">
                            <h2 class="informacion"> ${pelisReviews[i].author} </h2>
                            <p class="sinopsis">  ${pelisReviews[i].content}</p>
                        </article>
                    `
    }
    seccionReviews.innerHTML= infoReviews;
    
 })

 .catch(function (error) {
     return error
 })


/* Sección Videos */
fetch(urlTrailer)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data.results)

    let pelisTrailer = data.results;
    let infoTrailer = ""

    if (pelisTrailer != undefined || pelisTrailer != null || pelisTrailer.length != 0) {


        seccionTrailer.innerHTML = infoTrailer

    } else {
        seccionTrailer.innerText = <p class="informacion">"No hay Trailer disponible"</p>
    }

})
.catch(function (error) {
    
})

