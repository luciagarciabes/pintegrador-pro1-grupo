/*  Capturo la query String, la paso a un objeto maniupulable, capturo el id*/
let qs= location.search;
let qsObj= new URLSearchParams(qs);
let idSerie= qsObj.get('idSerie');

/* api key y el endpoint de detalle de series*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let serieDetalle= `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${api_key}&language=en-US`;

/* Capturo elementos */ 
let img= document.querySelector(".img-detalle-serie");
let textoDetalleSerie= document.querySelector(".texto-detalle-serie");
let nombreDetalleSerie= document.querySelector(".nombre-detalle-serie")

fetch(serieDetalle)
.then(function (respuesta) {
    return respuesta.json()
}
)
.then(function (data) {
    console.log(data);
    let serie= data;
    let contenido=`<ul>
                        <article class="flex">
                            <li><strong>${serie.first_air_date}</strong></li>
                            <li><strong>${serie.number_of_seasons} temporadas</strong></li>
                            <li><strong>${serie.genres}</strong></li>
                        </article>

                        <li class="informacion">${serie.overviwe}</li>

                        <li class="informacion"><strong>Dirección:</strong>${serie.created_y}</li>
                        <li class="lifav"><a class="botonfav" href="./favorite.html"> Agregar a favoritos </a></li>
                    </ul>`
    nombreDetalleSerie.innerText= serie.name;
    textoDetalleSerie.innerHTML= contenido;
    img.src= `https://image.tmdb.org/t/p/w500${serie.poster_path}`
    return data
}
)
.catch(function (error) {
    return error
}
)




