let urlSeries = "https://api.themoviedb.org/3/tv/{tv_id}?api_key=a999f9c45003fc79555aea4968543ddf&language=en-US"
let urlPeliculas = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=a999f9c45003fc79555aea4968543dd&language=en-US"

fetch()
.then(function (respuesta) {
    return respuesta.json
})
.then(function (data) {
    return data
})
.catch(function (error) {
    return error
})

