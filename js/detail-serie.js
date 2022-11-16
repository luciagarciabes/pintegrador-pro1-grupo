/*  Capturo la query String, la paso a un objeto maniupulable, capturo el id*/
let qs= location.search;
let qsObj= new URLSearchParams(qs);
let idSerie= qsObj.get('idSerie');

/* api key y el endpoint de detalle de series*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let serieDetalle= `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${api_key}&language=en-US`;

/* Capturo elementos */ 
let img= document.querySelector(".img-detalle-titulos");
let textoDetalleSerie= document.querySelector(".texto-detalle-serie");
let nombreDetalleSerie= document.querySelector(".nombre-detalle-serie")

fetch(serieDetalle)
.then(function (respuesta) {
    return respuesta.json()
}
)
.then(function (data) {
    let serie= data;
    console.log(serie);
    let infoGeneros=""
    let generos= serie.genres
    for (let i = 0; i < generos.length; i++) {
        infoGeneros+=`<a class="generosboton" href="./detail-genres.html?idGenero=${generos[i].id}"> ${generos[i].name}</a>` }   
        
        nombreDetalleSerie.innerText= serie.name;
        img.src= `https://image.tmdb.org/t/p/w500${serie.poster_path}`


    /*let contenido=`<ul>
                        <article class="flex">
                            <li><strong>${serie.first_air_date}</strong></li>
                            <li><strong>${serie.number_of_seasons} temporada/s</strong></li>
                            <li> <strong> Rating:  ${serie.vote_average} </strong> </li>
                        </article>

                        <li class="informacion">${serie.overview}</li>
                        <li class="informacion"><strong>Géneros: <a  class="generosboton" href="?idGenero=" > </strong> ${infoGeneros} </a> </li>
                        <li class="lifav"><a class="botonfav" href="./favorite.html?idSerie=${serie.id}"> Agregar a favoritos </a> <a class="botonfav botonrecomendacion"> Ver recomendaciones </a></li>
                    </ul>`
                    textoDetalleSerie.innerHTML= contenido;*/
    
    
    
})
.catch(function (error) {
    return error
}
)




