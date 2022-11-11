/*  API keys y los endpoints*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
let seriesPopulares= `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`
let loMasVisto= `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`

/* capturamos los elementos*/ 
let lista_principal_peliculas= document.querySelector(".lista_principal_peliculas");
let lista_principal_series= document.querySelector(".lista_principal_series");
let lista_principal_masvisto= document.querySelector(".lista_principal_masvisto");


/* Fetch para la seccion de peliculas*/
fetch(peliculasPopulares)
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (data) {
    console.log(data.results);
    let peliculas= data.results;

    let contenido1= ""
    for (let i = 0; i < 5; i++) {
        contenido1+= `<li class="cada_titulo">
                        <a href="./detail-movie.html?idPelicula=${peliculas[i].id}"> 
                        <img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}" alt="${peliculas[i].title}"
                            height="250px">
                        <ul class="lista_anidada">
                            <li class="li_piedefoto"> ${peliculas[i].title}</li>
                            <li class="li_piedefoto">Estreno: ${peliculas[i].release_date}</li>
                            <li class="vermas"> Ver más </li>
                        </ul>
                        </a>
                    </li>`
    };
    lista_principal_peliculas.innerHTML= contenido1
    return data
})
.catch(function (error) {
    return error
})



/* Fetch para la seccion de series*/
fetch(seriesPopulares)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data.results);
    let series= data.results

    let contenido2= ""
    for (let i = 0; i < 5; i++) {
      contenido2+= `<li class="cada_titulo">
                        <a href="./detail-serie.html?idSerie=${series[i].id}"><img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${series[i].poster_path}" alt=" ${series[i].name}"   
                            height="250px">
                            <ul class="lista_anidada">
                            <li class="li_piedefoto"> ${series[i].name} </li>
                            <li class="li_piedefoto">Estreno: ${series[i].first_air_date} </li>
                            <li class="vermas"> Ver más </li>

                            </ul> </a>
                    </li>`
                    /* no sabemos donde encontrar el link para poner el path de las fotos #######*/
    }
    lista_principal_series.innerHTML= contenido2
    return data
})
.catch(function (error) {
    return error
})




/* Fetch para la seccion de mas vistos*/
fetch(loMasVisto)
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (data) {
    console.log(data.results);
    topRated= data.results;
    contenido3= ""
    

    for (let i = 0; i < 5; i++) {
       contenido3+=  `<li class="cada_titulo">
                            <a href="./detail-movie.html?idPelicula=${topRated[i].id}"> <img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${topRated[i].poster_path}" alt="${topRated[i].original_title}"
                                height="250px">
                                <ul class="lista_anidada">
                                <li class="li_piedefoto"> ${topRated[i].original_title}</li>
                                <li class="li_piedefoto">Estreno:  ${topRated[i].release_date} </li>
                                <li class="vermas"> Ver más </li>
                                </ul>
                            </a>
                      </li>`
        
    }
    lista_principal_masvisto.innerHTML=  contenido3;
    return data
})
.catch(function (error) {
    return error
})



