let api_key = "a999f9c45003fc79555aea4968543ddf";
let qs = location.search
let qsObj = new URLSearchParams(qs)
let pelicula = qsObj.get('busqueda')

let resultados= document.querySelector(".lista_principal")
let h2resbusq= document.querySelector(".h2resbusq");


let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${pelicula}&page=1&include_adult=false`

 fetch(url)
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (data) {
    /*console.log(data.results)*/;

    let arrayPeliculas = data.results
    let allPeliculas = ""

    for (let i = 0; i < 5; i++) {
        allPeliculas += `<li>
                            <a href="./detail-movie.html?idPelicula=${arrayPeliculas[i].id}"> 
                            <img class="imagenes_home" src="https://image.tmdb.org/t/p/w500${arrayPeliculas[i].poster_path}" alt="Pelicula Titanic"
                                height="250px">
                            <ul class="lista_anidada">
                                <li class="li_piedefoto">${arrayPeliculas[i].original_title}</li>
                                <li class="li_piedefoto">Estreno: ${arrayPeliculas[i].release_date}</li>
                                <li class="vermas"> Ver más </li>

                            </ul>
                            </a> 
                        </li>` 
        resultados.innerHTML= allPeliculas;
       
        console.log(data.results[i]);        
    }
    h2resbusq.innerText =   `Usted buscó: "${pelicula}"`;
    return data
})
.catch(function (error) {
    return error
}) 