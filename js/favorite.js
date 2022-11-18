let api_key = "a999f9c45003fc79555aea4968543ddf"
let recuperoStoragePeliculas = localStorage.getItem("favoritosPeliculas");
let recuperoStorageSeries = localStorage.getItem("favoritosSeries");

let favoritosPeliculas = JSON.parse(recuperoStoragePeliculas);
let favoritosSeries = JSON.parse(recuperoStorageSeries);

let listaPeliculas = document.querySelector(".ulFavsPeliculas");
let listaSeries = document.querySelector(".ulFavsSeries");
let pNoHayFavsPelis = document.querySelector(".nohayfavspelis")
let pNoHayFavsSeries = document.querySelector(".nohayfavsseries")




/*Peliculas */
let peliculasFavs = "";
if (favoritosPeliculas == null || favoritosPeliculas.length == 0) {
    pNoHayFavsPelis.innerHTML = `<p class="informacion h2nohaygenero"> No hay películas en favoritos </p>`

} else {
    for (let i = 0; i < favoritosPeliculas.length; i++) {
        let urlPelis = `https://api.themoviedb.org/3/movie/${favoritosPeliculas[i]}?api_key=${api_key}&language=en-US`

        fetch(urlPelis)
            .then(function (respuesta) {
                return respuesta.json()

            })
            .then(function (data) {
                console.log(data);

                peliculasFavs += `<li class="cada_titulo">
                                    <a href="./detail-movie.html?idPelicula=${data.id}"><img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt=" ${data.title}"   
                                        height="250px">
                                        <ul class="lista_anidada">
                                            <li class="li_piedefoto"> ${data.title} </li>
                                            <li class="li_piedefoto">Estreno: ${data.release_date} </li>
                                            <li class="vermas"> Ver más </li>

                                        </ul> </a>
                                </li>`
                listaPeliculas.innerHTML = peliculasFavs;
            })
            .catch(function (error) {
                return error

            })
    }
}

/* Series  */
let series = ""
if (favoritosSeries == null || favoritosSeries.length == 0) {
    pNoHayFavsSeries.innerHTML = `<p class="informacion h2nohaygenero"> No hay series en favoritos </p>`

} else {
    for (let i = 0; i < favoritosSeries.lenght; i++) {
        let urlSeries = `https://api.themoviedb.org/3/tv${favoritosSeries[i]}?api_key=${api_key}&language=en-US`

        fetch(urlSeries)
            .then(function (respuesta) {
                return respuesta.json()
            })
            .then(function (data) {
                console.log(data)
                series += `<li class="cada_titulo">
                            <a href="./detail-serie.html?idSerie=${data.id}"><img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt=" ${data.original_title}"   
                            height="250px">
                                <ul class="lista_anidada">
                                    <li class="li_piedefoto"> ${data.original_title} </li>
                                    <li class="li_piedefoto">Estreno: ${data.release_date} </li>
                                    <li class="vermas"> Ver más </li>

                                </ul> </a>
                    </li>`
                listaSeries.innerHTML = series;


            })
            .catch(function (error) {

            })

    }
}







