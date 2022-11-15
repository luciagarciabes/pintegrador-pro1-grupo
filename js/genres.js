/*API keys y los endpoints*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let url= `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
let urlSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}&language=en-US`

/*capturamos elementos*/
let seccionGeneros= document.querySelector(".secciongeneros1")
let seccionGenerosSeries= document.querySelector(".secciongeneros2")


/* fetch de los generos peliculas*/
fetch(url)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    generos=data.genres
    contenido=''

    for (let i = 0; i < 10; i++) {
        contenido+=`<article class="genero">
                        <h2 class="h2generos">${generos[i].name}</h2>
                        <a class="vermas vermasgeneros" href="./detail-genres.html?idGenero=${generos[i].id}"> Ver más</a>
                    </article> `
    }
    seccionGeneros.innerHTML= contenido

    
})
.catch(function (error) {
    return error
})


/* fetch de los generos series*/
fetch(urlSeries)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data)
    let generosSeries=data.genres
    let contenido2=""
    for (let i = 0; i < 10; i++) {
        contenido2+= `<article class="genero">
        <h2 class="h2generos">${generosSeries[i].name}</h2>
        <a class="vermas vermasgeneros" href="./detail-genres.html?idGenero=${generosSeries[i].id}"> Ver más</a>
    </article> `    
    }
    seccionGenerosSeries.innerHTML=contenido2
})
.catch(function (error) {
    return error 
})

