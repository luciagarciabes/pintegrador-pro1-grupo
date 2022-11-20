/* FORMULARIO */


let formulario = document.querySelector(".form_header");
let campoForm = document.querySelector("[name=busqueda]");
let loader = document.querySelector(".loader")

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (campoForm.value == "") {
        alert("Debes escribir algo")
        campoForm.addEventListener('focus', function () {
            campoForm.value = ""
        })
    } else if (campoForm.value.length < 3) {
        alert("Su búsqueda debe tener más de tres caracteres")
        campoForm.addEventListener('focus', function () {
            campoForm.value = ""
        })

    } else {
        this.submit()
    }
})


/* Loader*/
window.addEventListener("load", function (e) {
    this.setTimeout(function () {
        loader.style.display = "none"

    }, 1000);
})


