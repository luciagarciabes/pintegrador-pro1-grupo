let storage = localStorage.getItem("favorite")
let favorite = JSON.parse(storage);

let section = document.querySelector("#Favs")

let peliculasFavs = "";

if (favorite.lenght == 0){
    section,innerHTML = <p>No hay peliculas en favoritos</p>
}
else{
    for (let i = 0; i < favorite.length; i++) {
        let url = array[i];
        
    }
}