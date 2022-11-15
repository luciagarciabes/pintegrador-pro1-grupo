/*API keys y los endpoints*/
let api_key = "a999f9c45003fc79555aea4968543ddf";
let url= `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`

/*capturamos elementos*/
let seccionGeneros= document.querySelector(".secciongeneros1")



fetch(url)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data.genres)
    generos=data.genres
    contenido=''

    for (let i = 0; i < generos.length; i++) {
        contenido+=`<article class="genero">
                        <h2 class="h2generos">${generos[i].name}</h2>
                        <a class="vermas vermasgeneros" href="./detail-genres.html?idGenero=${generos[i].id}"> Ver más</a>
                    </article> `
    }
    seccionGeneros.innerHTML= contenido

    return data
})
.catch(function (error) {
    return error
})

